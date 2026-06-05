import {
  enforceRateLimits,
  getCorsHeaders,
  rejectDisallowedSource,
  rejectOversizedRequest,
  rejectWrongContentType,
} from './_guard.js';

const DEFAULT_ALLOWED_ORIGINS = [
  'https://freeimgtools.net',
  'https://www.freeimgtools.net',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
];

export async function onRequestOptions({ request, env }) {
  return new Response(null, { status: 204, headers: getCorsHeaders(request, env, DEFAULT_ALLOWED_ORIGINS) });
}

export async function onRequestPost({ request, env }) {
  const corsHeaders = getCorsHeaders(request, env, DEFAULT_ALLOWED_ORIGINS);

  try {
    const sourceRejection = rejectDisallowedSource(request, env, DEFAULT_ALLOWED_ORIGINS, corsHeaders);
    if (sourceRejection) return sourceRejection;

    const typeRejection = rejectWrongContentType(request, ['application/json'], corsHeaders);
    if (typeRejection) return typeRejection;

    const sizeRejection = rejectOversizedRequest(request, 4 * 1024, corsHeaders);
    if (sizeRejection) return sizeRejection;

    const rateRejection = await enforceRateLimits({
      request,
      env,
      endpoint: 'image-seo-audit',
      corsHeaders,
      windows: [
        { id: 'minute', seconds: 60, limit: 12 },
        { id: 'day', seconds: 86400, limit: 120 },
      ],
    });
    if (rateRejection) return rateRejection;

    const body = await request.json();
    const inputUrl = normalizeUrl(body.url || '');
    const target = new URL(inputUrl);

    const targetError = getUnsafeAuditUrlReason(target);
    if (targetError) return Response.json({ error: targetError }, { status: 400, headers: corsHeaders });

    const { res, finalUrl } = await fetchSafeHtml(target);

    const contentType = res.headers.get('content-type') || '';
    if (!res.ok) {
      return Response.json({ error: `Could not fetch page. HTTP ${res.status}.` }, { status: 502, headers: corsHeaders });
    }
    if (!contentType.includes('text/html')) {
      return Response.json({ error: 'The URL did not return an HTML page.' }, { status: 400, headers: corsHeaders });
    }

    const html = (await res.text()).slice(0, 1200000);
    return Response.json(analyzeHtml(html, finalUrl), { headers: corsHeaders });
  } catch (err) {
    return Response.json(
      { error: err.message || 'Image SEO audit failed.' },
      { status: 500, headers: corsHeaders }
    );
  }
}

function normalizeUrl(value) {
  const trimmed = String(value).trim();
  if (!trimmed) throw new Error('Enter a website URL.');
  if (trimmed.length > 2048) throw new Error('URL is too long.');
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

async function fetchSafeHtml(startUrl) {
  let current = new URL(startUrl);

  for (let redirectCount = 0; redirectCount <= 3; redirectCount += 1) {
    const reason = getUnsafeAuditUrlReason(current);
    if (reason) throw new Error(reason);

    const res = await fetch(current.toString(), {
      headers: {
        'User-Agent': 'FreeImgTools-ImageSEOAudit/1.0 (+https://freeimgtools.net/image-seo-audit)',
      },
      signal: AbortSignal.timeout(10000),
      redirect: 'manual',
    });

    if (res.status >= 300 && res.status < 400) {
      const location = res.headers.get('location');
      if (!location) return { res, finalUrl: current.toString() };
      current = new URL(location, current);
      continue;
    }

    return { res, finalUrl: current.toString() };
  }

  throw new Error('Too many redirects while fetching the page.');
}

function getUnsafeAuditUrlReason(url) {
  if (!['http:', 'https:'].includes(url.protocol)) {
    return 'Only http and https URLs are supported.';
  }

  const hostname = url.hostname.toLowerCase();
  if (!hostname || hostname === 'localhost' || hostname.endsWith('.local')) {
    return 'Local URLs are not supported.';
  }

  if (isPrivateHostname(hostname)) {
    return 'Private network URLs are not supported.';
  }

  return '';
}

function isPrivateHostname(hostname) {
  if (hostname === '0.0.0.0') return true;
  if (hostname === '::1' || hostname.startsWith('[')) return true;

  const parts = hostname.split('.').map(part => Number.parseInt(part, 10));
  if (parts.length !== 4 || parts.some(part => !Number.isInteger(part))) return false;

  const [a, b] = parts;
  return a === 10
    || a === 127
    || (a === 169 && b === 254)
    || (a === 172 && b >= 16 && b <= 31)
    || (a === 192 && b === 168);
}

function analyzeHtml(html, pageUrl) {
  const page = new URL(pageUrl);
  const title = textMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const canonical = attrFromTag(textMatch(html, /<link\b[^>]*rel=["']canonical["'][^>]*>/i), 'href');
  const imgTags = html.match(/<img\b[^>]*>/gi) || [];
  const images = imgTags.map(tag => analyzeImage(tag, page)).filter(Boolean);

  const summary = {
    imageCount: images.length,
    missingAlt: images.filter(img => img.altStatus === 'missing').length,
    emptyAlt: images.filter(img => img.altStatus === 'empty').length,
    missingDimensions: images.filter(img => !img.hasDimensions).length,
    weakFilename: images.filter(img => img.weakFilename).length,
    legacyFormat: images.filter(img => img.legacyFormat).length,
  };

  const score = scoreAudit(summary);

  return {
    url: page.toString(),
    title,
    canonical: canonical ? resolveUrl(canonical, page) : '',
    score,
    summary,
    images: images.slice(0, 120),
    truncated: images.length > 120,
  };
}

function analyzeImage(tag, page) {
  const attrs = parseAttrs(tag);
  const rawSrc = attrs.src || attrs['data-src'] || attrs['data-original'] || firstSrcsetUrl(attrs.srcset || attrs['data-srcset']);
  if (!rawSrc || rawSrc.startsWith('data:')) return null;

  const url = resolveUrl(rawSrc, page);
  const filename = getFilename(url);
  const alt = Object.prototype.hasOwnProperty.call(attrs, 'alt') ? attrs.alt.trim() : null;
  const ext = getExtension(filename);

  return {
    src: url,
    filename,
    alt: alt === null ? '' : alt,
    altStatus: alt === null ? 'missing' : (alt ? 'present' : 'empty'),
    hasDimensions: Boolean(attrs.width && attrs.height),
    width: attrs.width || '',
    height: attrs.height || '',
    weakFilename: isWeakFilename(filename),
    legacyFormat: ['jpg', 'jpeg', 'png', 'gif', 'bmp'].includes(ext),
    format: ext || 'unknown',
  };
}

function parseAttrs(tag) {
  const attrs = {};
  for (const match of tag.matchAll(/([\w:-]+)(?:\s*=\s*("([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g)) {
    const name = match[1].toLowerCase();
    if (name === 'img') continue;
    attrs[name] = decodeHtml(match[3] ?? match[4] ?? match[5] ?? '');
  }
  return attrs;
}

function attrFromTag(tag, attr) {
  if (!tag) return '';
  const match = tag.match(new RegExp(`${attr}=["']([^"']+)["']`, 'i'));
  return match ? decodeHtml(match[1]) : '';
}

function firstSrcsetUrl(srcset) {
  if (!srcset) return '';
  return srcset.split(',')[0]?.trim().split(/\s+/)[0] || '';
}

function textMatch(text, regex) {
  const match = text.match(regex);
  return match ? decodeHtml((match[1] || match[0]).replace(/<[^>]+>/g, '').trim()) : '';
}

function resolveUrl(value, base) {
  try {
    return new URL(value, base).toString();
  } catch {
    return value;
  }
}

function getFilename(url) {
  try {
    const pathname = new URL(url).pathname;
    return decodeURIComponent(pathname.split('/').filter(Boolean).pop() || '');
  } catch {
    return '';
  }
}

function getExtension(filename) {
  const clean = filename.split('?')[0].toLowerCase();
  const match = clean.match(/\.([a-z0-9]+)$/);
  return match ? match[1] : '';
}

function isWeakFilename(filename) {
  const base = filename.replace(/\.[^.]+$/, '').toLowerCase();
  if (!base) return true;
  return /^(img|image|photo|pic|dsc|screenshot)[-_]?\d+/.test(base)
    || /^[a-f0-9]{10,}$/.test(base)
    || base.length < 4;
}

function scoreAudit(summary) {
  if (!summary.imageCount) return 100;
  let score = 100;
  score -= summary.missingAlt * 12;
  score -= summary.emptyAlt * 5;
  score -= summary.missingDimensions * 4;
  score -= summary.weakFilename * 3;
  score -= summary.legacyFormat * 1;
  return Math.max(0, Math.round(score));
}

function decodeHtml(value) {
  return String(value)
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}
