// Cloudflare Pages Function — text-to-image generation for website image workflows.
// Requires AI binding configured in wrangler.toml: [ai] binding = "AI"

const DEFAULT_TEXT_TO_IMAGE_MODEL = '@cf/black-forest-labs/flux-1-schnell';

const DEFAULT_ALLOWED_ORIGINS = [
  'https://freeimgtools.net',
  'https://www.freeimgtools.net',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
];

const USE_CASES = {
  social: 'Create a polished social media image concept with a clear subject, high contrast, clean composition, and space for optional text overlay.',
  blog: 'Create an editorial blog hero image with a professional web-publishing look, balanced composition, and strong visual metaphor.',
  product: 'Create a clean ecommerce product-style image with studio lighting, minimal background, realistic detail, and commercial polish.',
  og: 'Create an Open Graph preview image concept for a website article, centered composition, uncluttered background, and room for title text.',
  thumbnail: 'Create a bold YouTube-style thumbnail background with dramatic lighting, strong focal point, and high visual energy.',
};

const STYLES = {
  realistic: 'realistic, high quality, natural lighting, sharp detail',
  editorial: 'editorial design, premium publication style, tasteful composition',
  minimal: 'minimal clean design, simple background, modern and uncluttered',
  vibrant: 'vibrant colors, high contrast, energetic commercial style',
  product: 'studio product photography, soft shadows, clean backdrop',
};

function getAllowedOrigins(env) {
  if (!env.ALLOWED_ORIGINS) return DEFAULT_ALLOWED_ORIGINS;
  return env.ALLOWED_ORIGINS.split(',').map(origin => origin.trim()).filter(Boolean);
}

function getCorsHeaders(request, env) {
  const origin = request.headers.get('Origin');
  const allowedOrigins = getAllowedOrigins(env);
  const allowedOrigin = origin && allowedOrigins.includes(origin) ? origin : allowedOrigins[0];

  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function isAllowedOrigin(request, env) {
  const origin = request.headers.get('Origin');
  return !origin || getAllowedOrigins(env).includes(origin);
}

export async function onRequestOptions({ request, env }) {
  return new Response(null, { status: 204, headers: getCorsHeaders(request, env) });
}

export async function onRequestPost({ request, env }) {
  const corsHeaders = getCorsHeaders(request, env);

  try {
    if (!isAllowedOrigin(request, env)) {
      return Response.json({ error: 'Origin not allowed' }, { status: 403, headers: corsHeaders });
    }

    if (!env.AI) {
      return Response.json(
        { error: 'AI binding not configured. Add [ai] binding = "AI" to wrangler.toml.' },
        { status: 503, headers: corsHeaders }
      );
    }

    const body = await request.json().catch(() => ({}));
    const rawPrompt = String(body.prompt || '').trim();
    const useCase = USE_CASES[body.useCase] ? body.useCase : 'social';
    const style = STYLES[body.style] ? body.style : 'editorial';
    const steps = clampInt(body.steps, 4, 8, 4);
    const seed = Number.isInteger(body.seed) ? Math.abs(body.seed) : Math.floor(Math.random() * 1000000);

    if (!rawPrompt) {
      return Response.json({ error: 'Prompt is required.' }, { status: 400, headers: corsHeaders });
    }
    if (rawPrompt.length > 700) {
      return Response.json({ error: 'Prompt is too long. Keep it under 700 characters.' }, { status: 400, headers: corsHeaders });
    }

    const prompt = buildPrompt(rawPrompt, useCase, style);
    const result = await env.AI.run(env.TEXT_TO_IMAGE_MODEL || DEFAULT_TEXT_TO_IMAGE_MODEL, {
      prompt,
      steps,
      seed,
    });

    if (!result?.image) {
      return Response.json({ error: 'Image generation returned no image.' }, { status: 502, headers: corsHeaders });
    }

    return Response.json(
      {
        image: `data:image/jpeg;charset=utf-8;base64,${result.image}`,
        prompt,
        seed,
        model: env.TEXT_TO_IMAGE_MODEL || DEFAULT_TEXT_TO_IMAGE_MODEL,
      },
      { headers: corsHeaders }
    );
  } catch (err) {
    console.error('Text-to-image worker error:', err);
    return Response.json(
      { error: 'Image generation failed: ' + (err.message || 'Unknown error') },
      { status: 500, headers: corsHeaders }
    );
  }
}

function buildPrompt(rawPrompt, useCase, style) {
  return [
    rawPrompt,
    USE_CASES[useCase],
    STYLES[style],
    'No visible watermarks, no distorted text, no logo imitation, professional image suitable for a website workflow.',
  ].join(' ');
}

function clampInt(value, min, max, fallback) {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.min(max, Math.max(min, parsed));
}
