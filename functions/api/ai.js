// Cloudflare Pages Function — handles AI image analysis
// Requires AI binding configured in wrangler.toml: [ai] binding = "AI"

const DEFAULT_VISION_TEXT_MODEL = '@cf/llava-hf/llava-1.5-7b-hf';

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
    const context = String(formData.get('context') || '').trim().slice(0, 300);

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

    const contextLine = context
      ? `User context for the image: ${context}\nUse this context when it is relevant, but do not invent details that are not visible.`
      : 'No user context was provided. Describe only visible information.';

    const prompts = {
      alttext: `${contextLine}\nWrite one concise, SEO-friendly alt text sentence for this image. Describe the visible subject, action, and setting. Do not start with "This image shows" or "The image is". Avoid keyword stuffing.`,
      'product-alt': `${contextLine}\nWrite one polished ecommerce product image alt text sentence. Mention product type, visible color, material, angle, and important details when visible. If user context includes a product name, include it naturally. Do not keyword-stuff.`,
      caption: `${contextLine}\nWrite one natural image caption for a blog, portfolio, or social post. Keep it under 160 characters, clear, and human-readable.`,
      filename: `${contextLine}\nSuggest one SEO-friendly image filename base for this image. Use lowercase words separated by hyphens. Do not include a file extension. Return only the filename text.`,
      tags: `${contextLine}\nGenerate 10 useful image SEO tags for this image. Use lowercase short phrases, comma-separated. Include visible objects, scene, use case, and style when relevant. Return only the comma-separated tags.`,
      'seo-pack': `${contextLine}\nAnalyze this image for website SEO. Return only valid JSON with these exact keys: "altText", "productAltText", "caption", "seoFilename", "imageTitle", "tags". "tags" must be an array of 8 to 12 short lowercase strings. Keep altText and productAltText under 140 characters, caption under 160 characters, seoFilename lowercase-hyphenated without extension, and imageTitle under 70 characters.`,
    };

    if (Object.prototype.hasOwnProperty.call(prompts, action)) {
      result = await env.AI.run(env.VISION_TEXT_MODEL || DEFAULT_VISION_TEXT_MODEL, {
        image: imageArray,
        prompt: prompts[action],
        max_tokens: action === 'seo-pack' ? 420 : 140,
      });
      const description = String(result.description || '').trim();
      if (action === 'seo-pack') {
        return Response.json({ result: parseSeoPack(description) || { raw: description } }, { headers: corsHeaders });
      }
      return Response.json({ result: cleanSingleLine(description) }, { headers: corsHeaders });
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

    return Response.json({ error: 'Unknown action.' }, { status: 400, headers: corsHeaders });

  } catch (err) {
    console.error('AI worker error:', err);
    return Response.json(
      { error: 'AI processing failed: ' + (err.message || 'Unknown error') },
      { status: 500, headers: corsHeaders }
    );
  }
}

function cleanSingleLine(text) {
  return text.replace(/^["']|["']$/g, '').replace(/\s+/g, ' ').trim();
}

function parseSeoPack(text) {
  try {
    const jsonText = extractJson(text);
    if (!jsonText) return null;
    const parsed = JSON.parse(jsonText);
    return {
      altText: cleanSingleLine(parsed.altText || ''),
      productAltText: cleanSingleLine(parsed.productAltText || ''),
      caption: cleanSingleLine(parsed.caption || ''),
      seoFilename: cleanFilename(parsed.seoFilename || ''),
      imageTitle: cleanSingleLine(parsed.imageTitle || ''),
      tags: Array.isArray(parsed.tags)
        ? parsed.tags.map(tag => cleanSingleLine(String(tag)).toLowerCase()).filter(Boolean).slice(0, 12)
        : [],
    };
  } catch {
    return null;
  }
}

function extractJson(text) {
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end === -1 || end <= start) return '';
  return text.slice(start, end + 1);
}

function cleanFilename(text) {
  return cleanSingleLine(text)
    .replace(/\.[a-z0-9]+$/i, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}
