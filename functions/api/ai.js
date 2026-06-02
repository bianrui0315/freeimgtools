// Cloudflare Pages Function — handles AI image analysis
// Requires AI binding configured in wrangler.toml: [ai] binding = "AI"

const DEFAULT_ALLOWED_ORIGINS = [
  'https://freeimgtools.net',
  'https://www.freeimgtools.net',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
];

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
      return Response.json(
        { error: 'Origin not allowed' },
        { status: 403, headers: corsHeaders }
      );
    }

    if (!env.AI) {
      return Response.json(
        { error: 'AI binding not configured. Add [ai] binding = "AI" to wrangler.toml.' },
        { status: 503, headers: corsHeaders }
      );
    }

    const formData = await request.formData();
    const file = formData.get('image');
    const action = formData.get('action') || 'alttext';

    if (!file) {
      return Response.json({ error: 'No image provided' }, { status: 400, headers: corsHeaders });
    }

    // Limit file size to 5MB to prevent abuse
    const MAX_BYTES = 5 * 1024 * 1024;
    if (file.size > MAX_BYTES) {
      return Response.json({ error: 'Image too large. Maximum 5MB for AI analysis.' }, { status: 413, headers: corsHeaders });
    }

    const arrayBuffer = await file.arrayBuffer();
    const imageArray = [...new Uint8Array(arrayBuffer)];

    let result;

    if (action === 'alttext') {
      // Vision model: generate SEO-friendly alt text
      result = await env.AI.run('@cf/unum/uform-gen2-qwen-500m', {
        image: imageArray,
        prompt: 'Write a concise, SEO-friendly alt text description for this image in one sentence. Start with what the image shows. Do not start with "This image shows" or "The image is".',
        max_tokens: 100,
      });
      return Response.json({ result: result.description }, { headers: corsHeaders });
    }

    if (action === 'classify') {
      // Classification model: identify objects/categories
      result = await env.AI.run('@cf/microsoft/resnet-50', {
        image: imageArray,
      });
      // result is an array of {label, score}
      const topResults = Array.isArray(result)
        ? result.sort((a, b) => b.score - a.score).slice(0, 10)
        : result;
      return Response.json({ result: topResults }, { headers: corsHeaders });
    }

    return Response.json({ error: 'Unknown action. Use "alttext" or "classify".' }, { status: 400, headers: corsHeaders });

  } catch (err) {
    console.error('AI worker error:', err);
    return Response.json(
      { error: 'AI processing failed: ' + (err.message || 'Unknown error') },
      { status: 500, headers: corsHeaders }
    );
  }
}
