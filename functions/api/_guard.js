const memoryBuckets = new Map();

export function getAllowedOrigins(env, defaults) {
  if (!env.ALLOWED_ORIGINS) return defaults;
  return env.ALLOWED_ORIGINS.split(',').map(origin => origin.trim()).filter(Boolean);
}

export function getCorsHeaders(request, env, defaults) {
  const origin = request.headers.get('Origin');
  const allowedOrigins = getAllowedOrigins(env, defaults);
  const allowedOrigin = origin && allowedOrigins.includes(origin) ? origin : allowedOrigins[0];

  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, CF-Turnstile-Response',
  };
}

export function rejectDisallowedSource(request, env, defaults, corsHeaders) {
  const allowedOrigins = getAllowedOrigins(env, defaults);
  const origin = request.headers.get('Origin');

  if (origin) {
    return allowedOrigins.includes(origin)
      ? null
      : Response.json({ error: 'Origin not allowed.' }, { status: 403, headers: corsHeaders });
  }

  const referer = request.headers.get('Referer');
  if (referer) {
    try {
      const refererOrigin = new URL(referer).origin;
      return allowedOrigins.includes(refererOrigin)
        ? null
        : Response.json({ error: 'Referrer not allowed.' }, { status: 403, headers: corsHeaders });
    } catch {
      return Response.json({ error: 'Referrer not allowed.' }, { status: 403, headers: corsHeaders });
    }
  }

  return isLocalRequest(request)
    ? null
    : Response.json({ error: 'Direct API requests are not allowed.' }, { status: 403, headers: corsHeaders });
}

export function rejectOversizedRequest(request, maxBytes, corsHeaders) {
  const rawLength = request.headers.get('Content-Length');
  const contentLength = rawLength ? Number.parseInt(rawLength, 10) : 0;
  if (contentLength > maxBytes) {
    return Response.json(
      { error: `Request too large. Maximum ${formatBytes(maxBytes)}.` },
      { status: 413, headers: corsHeaders }
    );
  }
  return null;
}

export function rejectWrongContentType(request, allowedTypes, corsHeaders) {
  const contentType = request.headers.get('Content-Type') || '';
  const ok = allowedTypes.some(type => contentType.toLowerCase().includes(type));
  return ok
    ? null
    : Response.json({ error: 'Unsupported request type.' }, { status: 415, headers: corsHeaders });
}

export async function enforceRateLimits({ request, env, endpoint, windows, corsHeaders }) {
  const clientKey = getClientKey(request);
  for (const window of windows) {
    const result = env.AI_RATE_LIMIT_KV
      ? await checkKvLimit(env.AI_RATE_LIMIT_KV, endpoint, clientKey, window)
      : checkMemoryLimit(endpoint, clientKey, window);

    if (!result.allowed) {
      return Response.json(
        { error: 'Too many requests. Please wait a bit and try again.' },
        {
          status: 429,
          headers: {
            ...corsHeaders,
            'Retry-After': String(result.retryAfter),
            'X-RateLimit-Limit': String(window.limit),
            'X-RateLimit-Remaining': '0',
          },
        }
      );
    }
  }
  return null;
}

export async function verifyTurnstileToken({ request, env, token, corsHeaders }) {
  if (!env.TURNSTILE_SECRET_KEY) return null;

  const cleanToken = String(token || '').trim();
  if (!cleanToken) {
    return Response.json(
      { error: 'Please complete the human verification check first.' },
      { status: 403, headers: corsHeaders }
    );
  }

  const formData = new FormData();
  formData.append('secret', env.TURNSTILE_SECRET_KEY);
  formData.append('response', cleanToken);

  const remoteIp = request.headers.get('CF-Connecting-IP');
  if (remoteIp) formData.append('remoteip', remoteIp);

  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
      signal: AbortSignal.timeout(8000),
    });
    const result = await res.json().catch(() => ({}));

    if (res.ok && result.success === true) return null;

    return Response.json(
      { error: 'Human verification failed. Please refresh the check and try again.' },
      { status: 403, headers: corsHeaders }
    );
  } catch {
    return Response.json(
      { error: 'Human verification is temporarily unavailable. Please try again.' },
      { status: 503, headers: corsHeaders }
    );
  }
}

export function getBlockedPromptReason(prompt) {
  const text = String(prompt || '').toLowerCase().replace(/\s+/g, ' ');
  const rules = [
    {
      pattern: /\b(child|children|kid|kids|minor|underage|teen|teenager)\b.*\b(nude|naked|sexual|erotic|porn|lingerie)\b/,
      message: 'Prompts involving minors and sexual content are not allowed.',
    },
    {
      pattern: /\b(nude|naked|explicit sex|porn|pornographic|erotic|fetish|nsfw)\b/,
      message: 'Explicit sexual image prompts are not allowed.',
    },
    {
      pattern: /\b(fake|counterfeit|forged|forgery)\b.*\b(passport|visa|driver'?s license|id card|credit card|bank statement)\b/,
      message: 'Prompts for fake IDs, payment cards, or official documents are not allowed.',
    },
    {
      pattern: /\b(impersonate|deepfake)\b.*\b(real person|celebrity|politician|official)\b/,
      message: 'Prompts for impersonating real people are not allowed.',
    },
    {
      pattern: /\b(gore|graphic violence|blood-soaked|dismembered|decapitated)\b/,
      message: 'Graphic violence prompts are not allowed.',
    },
  ];

  return rules.find(rule => rule.pattern.test(text))?.message || '';
}

function getClientKey(request) {
  const ip = request.headers.get('CF-Connecting-IP')
    || request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim()
    || 'unknown-ip';
  const ua = request.headers.get('User-Agent') || 'unknown-agent';
  return `${ip}:${ua.slice(0, 80)}`;
}

async function checkKvLimit(kv, endpoint, clientKey, window) {
  const now = Date.now();
  const windowMs = window.seconds * 1000;
  const bucket = Math.floor(now / windowMs);
  const key = `rate:${endpoint}:${window.id}:${clientKey}:${bucket}`;
  const current = Number.parseInt((await kv.get(key)) || '0', 10);
  if (current >= window.limit) {
    return {
      allowed: false,
      retryAfter: Math.max(1, Math.ceil(((bucket + 1) * windowMs - now) / 1000)),
    };
  }
  await kv.put(key, String(current + 1), { expirationTtl: window.seconds + 60 });
  return { allowed: true };
}

function checkMemoryLimit(endpoint, clientKey, window) {
  const now = Date.now();
  const windowMs = window.seconds * 1000;
  const bucket = Math.floor(now / windowMs);
  const key = `rate:${endpoint}:${window.id}:${clientKey}:${bucket}`;
  const existing = memoryBuckets.get(key);
  const next = existing ? existing.count + 1 : 1;

  memoryBuckets.set(key, {
    count: next,
    expiresAt: (bucket + 1) * windowMs,
  });

  if (memoryBuckets.size > 1000) {
    for (const [bucketKey, value] of memoryBuckets.entries()) {
      if (value.expiresAt <= now) memoryBuckets.delete(bucketKey);
    }
  }

  if (next > window.limit) {
    return {
      allowed: false,
      retryAfter: Math.max(1, Math.ceil(((bucket + 1) * windowMs - now) / 1000)),
    };
  }
  return { allowed: true };
}

function isLocalRequest(request) {
  try {
    const host = new URL(request.url).hostname;
    return host === 'localhost' || host === '127.0.0.1' || host === '::1';
  } catch {
    return false;
  }
}

function formatBytes(bytes) {
  if (bytes >= 1024 * 1024) return `${Math.round(bytes / 1024 / 1024)}MB`;
  if (bytes >= 1024) return `${Math.round(bytes / 1024)}KB`;
  return `${bytes} bytes`;
}
