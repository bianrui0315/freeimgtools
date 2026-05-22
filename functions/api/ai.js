// Cloudflare Pages Function — handles AI image analysis
// Requires AI binding configured in wrangler.toml: [ai] binding = "AI"

const ALLOWED_ORIGINS = ['*']; // Restrict to your domain in production

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function onRequestPost({ request, env }) {
  try {
    if (!env.AI) {
      return Response.json(
        { error: 'AI binding not configured. Add [ai] binding = "AI" to wrangler.toml.' },
        { status: 503, headers: CORS_HEADERS }
      );
    }

    const formData = await request.formData();
    const file = formData.get('image');
    const action = formData.get('action') || 'alttext';

    if (!file) {
      return Response.json({ error: 'No image provided' }, { status: 400, headers: CORS_HEADERS });
    }

    // Limit file size to 5MB to prevent abuse
    const MAX_BYTES = 5 * 1024 * 1024;
    if (file.size > MAX_BYTES) {
      return Response.json({ error: 'Image too large. Maximum 5MB for AI analysis.' }, { status: 413, headers: CORS_HEADERS });
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
      return Response.json({ result: result.description }, { headers: CORS_HEADERS });
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
      return Response.json({ result: topResults }, { headers: CORS_HEADERS });
    }

    return Response.json({ error: 'Unknown action. Use "alttext" or "classify".' }, { status: 400, headers: CORS_HEADERS });

  } catch (err) {
    console.error('AI worker error:', err);
    return Response.json(
      { error: 'AI processing failed: ' + (err.message || 'Unknown error') },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}
