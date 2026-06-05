import {
  getCorsHeaders,
  rejectDisallowedSource,
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

export async function onRequestGet({ request, env }) {
  const corsHeaders = getCorsHeaders(request, env, DEFAULT_ALLOWED_ORIGINS);
  const sourceRejection = rejectDisallowedSource(request, env, DEFAULT_ALLOWED_ORIGINS, corsHeaders);
  if (sourceRejection) return sourceRejection;

  const siteKey = String(env.TURNSTILE_SITE_KEY || '').trim();
  const secretConfigured = Boolean(env.TURNSTILE_SECRET_KEY);

  return Response.json(
    {
      ai: {
        enabled: env.AI_FEATURES_ENABLED === 'true',
      },
      turnstile: {
        enabled: Boolean(siteKey && secretConfigured),
        siteKey: secretConfigured ? siteKey : '',
        required: secretConfigured,
      },
    },
    { headers: corsHeaders }
  );
}
