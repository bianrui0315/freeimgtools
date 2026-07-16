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
const MAX_HTML_BYTES = 1200000;
const MAX_IMAGES_RETURNED = 160;
const MAX_IMAGE_SIZE_PROBES = 24;
const LARGE_IMAGE_BYTES = 500 * 1024;
const HUGE_IMAGE_BYTES = 1024 * 1024;

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

    const html = (await res.text()).slice(0, MAX_HTML_BYTES);
    return Response.json(await analyzeHtml(html, finalUrl), { headers: corsHeaders });
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

  if (url.username || url.password) {
    return 'URLs with embedded credentials are not supported.';
  }

  if (url.port && !['80', '443'].includes(url.port)) {
    return 'Only standard web ports are supported.';
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
  if (hostname.endsWith('.internal') || hostname.endsWith('.localhost')) return true;

  const parts = hostname.split('.').map(part => Number.parseInt(part, 10));
  if (parts.length !== 4 || parts.some(part => !Number.isInteger(part))) return false;

  const [a, b] = parts;
  return a === 10
    || a === 127
    || (a === 169 && b === 254)
    || (a === 172 && b >= 16 && b <= 31)
    || (a === 192 && b === 168);
}

async function analyzeHtml(html, pageUrl) {
  const page = new URL(pageUrl);
  const title = textMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const canonical = attrFromTag(textMatch(html, /<link\b[^>]*rel=["']canonical["'][^>]*>/i), 'href');
  const imgTags = html.match(/<img\b[^>]*>/gi) || [];
  const images = imgTags.map((tag, index) => analyzeImage(tag, page, index)).filter(Boolean);

  await probeImageFiles(images);

  const summary = {
    imageCount: images.length,
    missingAlt: images.filter(img => img.altStatus === 'missing').length,
    emptyAlt: images.filter(img => img.altStatus === 'empty').length,
    missingDimensions: images.filter(img => !img.hasDimensions).length,
    missingResponsive: images.filter(img => !img.hasSrcset).length,
    missingLazyLoading: images.filter(img => img.index > 0 && !img.loading).length,
    weakFilename: images.filter(img => img.weakFilename).length,
    legacyFormat: images.filter(img => img.legacyFormat).length,
    checkedFileSizes: images.filter(img => Number.isFinite(img.fileBytes)).length,
    largeFiles: images.filter(img => Number.isFinite(img.fileBytes) && img.fileBytes > LARGE_IMAGE_BYTES).length,
    hugeFiles: images.filter(img => Number.isFinite(img.fileBytes) && img.fileBytes > HUGE_IMAGE_BYTES).length,
    knownBytes: images.reduce((sum, img) => sum + (Number.isFinite(img.fileBytes) ? img.fileBytes : 0), 0),
  };

  const score = scoreAudit(summary);
  const recommendations = buildRecommendations(summary);

  return {
    url: page.toString(),
    title,
    canonical: canonical ? resolveUrl(canonical, page) : '',
    score,
    summary,
    recommendations,
    images: images.slice(0, MAX_IMAGES_RETURNED),
    truncated: images.length > MAX_IMAGES_RETURNED,
    limits: {
      maxImagesReturned: MAX_IMAGES_RETURNED,
      maxImageSizeProbes: MAX_IMAGE_SIZE_PROBES,
      maxHtmlBytes: MAX_HTML_BYTES,
    },
  };
}

function analyzeImage(tag, page, index) {
  const attrs = parseAttrs(tag);
  const rawSrc = attrs.src || attrs['data-src'] || attrs['data-original'] || firstSrcsetUrl(attrs.srcset || attrs['data-srcset']);
  if (!rawSrc || rawSrc.startsWith('data:')) return null;

  const url = resolveUrl(rawSrc, page);
  const filename = getFilename(url);
  const alt = Object.prototype.hasOwnProperty.call(attrs, 'alt') ? attrs.alt.trim() : null;
  const ext = getExtension(filename);

  return {
    index,
    src: url,
    filename,
    alt: alt === null ? '' : alt,
    altStatus: alt === null ? 'missing' : (alt ? 'present' : 'empty'),
    hasDimensions: Boolean(attrs.width && attrs.height),
    hasSrcset: Boolean(attrs.srcset || attrs['data-srcset']),
    loading: attrs.loading || '',
    decoding: attrs.decoding || '',
    width: attrs.width || '',
    height: attrs.height || '',
    weakFilename: isWeakFilename(filename),
    legacyFormat: ['jpg', 'jpeg', 'png', 'gif', 'bmp'].includes(ext),
    format: ext || 'unknown',
  };
}

async function probeImageFiles(images) {
  const candidates = images
    .filter(img => !getUnsafeImageUrlReason(img.src))
    .slice(0, MAX_IMAGE_SIZE_PROBES);

  for (let i = 0; i < candidates.length; i += 6) {
    const chunk = candidates.slice(i, i + 6);
    await Promise.all(chunk.map(async (img) => {
      try {
        const meta = await fetchSafeImageHead(new URL(img.src));
        if (!meta) return;
        img.fileBytes = meta.bytes;
        img.fileSize = meta.bytes ? formatBytes(meta.bytes) : '';
        img.contentType = meta.contentType;
        img.largeFile = Number.isFinite(meta.bytes) && meta.bytes > LARGE_IMAGE_BYTES;
        img.hugeFile = Number.isFinite(meta.bytes) && meta.bytes > HUGE_IMAGE_BYTES;
      } catch {
        img.fileSize = '';
      }
    }));
  }
}

async function fetchSafeImageHead(startUrl) {
  let current = new URL(startUrl);

  for (let redirectCount = 0; redirectCount <= 2; redirectCount += 1) {
    const reason = getUnsafeImageUrlReason(current.toString());
    if (reason) return null;

    const res = await fetch(current.toString(), {
      method: 'HEAD',
      headers: {
        'User-Agent': 'FreeImgTools-ImageSEOAudit/1.0 (+https://freeimgtools.net/image-seo-audit)',
      },
      signal: AbortSignal.timeout(3500),
      redirect: 'manual',
    });

    if (res.status >= 300 && res.status < 400) {
      const location = res.headers.get('location');
      if (!location) return null;
      current = new URL(location, current);
      continue;
    }

    const contentType = res.headers.get('content-type') || '';
    if (contentType && !contentType.toLowerCase().startsWith('image/')) return null;

    const rawLength = res.headers.get('content-length');
    const bytes = rawLength ? Number.parseInt(rawLength, 10) : NaN;
    return {
      bytes: Number.isFinite(bytes) ? bytes : null,
      contentType,
    };
  }

  return null;
}

function getUnsafeImageUrlReason(value) {
  try {
    return getUnsafeAuditUrlReason(new URL(value));
  } catch {
    return 'Invalid image URL.';
  }
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
  score -= summary.missingResponsive * 2;
  score -= summary.missingLazyLoading * 2;
  score -= summary.weakFilename * 3;
  score -= summary.legacyFormat * 1;
  score -= summary.largeFiles * 5;
  score -= summary.hugeFiles * 8;
  return Math.max(0, Math.round(score));
}

function buildRecommendations(summary) {
  const recommendations = [];
  if (summary.missingAlt) {
    recommendations.push({
      title: 'Write useful alt text',
      text: `${summary.missingAlt} image${summary.missingAlt === 1 ? ' is' : 's are'} missing alt attributes. Add descriptive alt text for meaningful images and leave decorative images empty intentionally.`,
      href: '/ai',
      action: 'Generate alt text',
    });
  }
  if (summary.largeFiles) {
    recommendations.push({
      title: 'Compress large images',
      text: `${summary.largeFiles} checked image${summary.largeFiles === 1 ? ' is' : 's are'} over ${formatBytes(LARGE_IMAGE_BYTES)}. Compress or resize before publishing.`,
      href: '/compress-image-to-500kb',
      action: 'Compress to 500KB',
    });
  }
  if (summary.missingDimensions) {
    recommendations.push({
      title: 'Add width and height',
      text: `${summary.missingDimensions} image${summary.missingDimensions === 1 ? ' is' : 's are'} missing dimensions. Add width and height attributes to reduce layout shift.`,
      href: '/guides/web-performance-images',
      action: 'Read performance guide',
    });
  }
  if (summary.weakFilename) {
    recommendations.push({
      title: 'Rename weak image files',
      text: `${summary.weakFilename} filename${summary.weakFilename === 1 ? ' looks' : 's look'} generic. Use short lowercase words with hyphens before uploading.`,
      href: '/guides/image-file-names',
      action: 'Filename guide',
    });
  }
  if (summary.legacyFormat) {
    recommendations.push({
      title: 'Use modern formats where possible',
      text: `${summary.legacyFormat} image${summary.legacyFormat === 1 ? ' uses' : 's use'} JPG, PNG, GIF, or BMP. Consider WebP or AVIF for web delivery.`,
      href: '/convert',
      action: 'Convert images',
    });
  }
  if (!recommendations.length) {
    recommendations.push({
      title: 'Image SEO looks clean',
      text: 'No major image SEO problems were found in the returned HTML. For deeper checks, review rendered pages and Core Web Vitals in Search Console or Lighthouse.',
      href: '/guides/image-seo',
      action: 'Image SEO guide',
    });
  }
  return recommendations.slice(0, 5);
}

function formatBytes(bytes) {
  if (!Number.isFinite(bytes) || bytes <= 0) return '';
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(bytes >= 10 * 1024 * 1024 ? 0 : 1)} MB`;
  if (bytes >= 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${bytes} B`;
}

function decodeHtml(value) {
  return String(value)
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}
