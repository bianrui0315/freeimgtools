# Free Image Tools

Free online image tools — compress, convert, and resize images entirely in the browser.

**Live site:** https://freeimgtools.net

## Features

- **Image Compressor** — JPEG/PNG/WebP/AVIF, adjustable quality, EXIF strip, batch ZIP
- **Format Converter** — convert between JPG, PNG, WebP, AVIF; batch support
- **Image Resizer** — custom dimensions, social media presets (Instagram, Twitter, LinkedIn, OG)
- **AI Alt Text** — generate SEO alt text via Cloudflare Workers AI
- **Image Classifier** — tag/classify images with confidence scores

## Privacy

All image processing (compress, convert, resize) runs **100% client-side** in the browser.  
Images are never uploaded to any server. AI features use Cloudflare edge inference (no storage).

## Deploy to Cloudflare Pages

1. Push this repo to GitHub (private repo is fine)
2. Go to [Cloudflare Pages](https://pages.cloudflare.com) → Create application → Connect Git
3. Select this repo, leave build settings blank (static site)
4. Add the AI binding in Settings → Functions → AI Bindings: name = `AI`
5. Optional: add an `ALLOWED_ORIGINS` environment variable for `/api/ai`
   if you use additional domains. Example:
   `https://freeimgtools.net,https://www.freeimgtools.net`
6. Done — Cloudflare will deploy automatically on every push

## Local development

```bash
npm install
npm run dev
# Opens http://localhost:3000
```

Requires `wrangler` (Cloudflare CLI) for AI features. AI features won't work locally without a Cloudflare account with Workers AI access.

## Monetization

- **Google AdSense**: the publisher ID is currently `ca-pub-7946557800571551`.
  Verify it matches your account before applying.
- Keep ad slots commented until the domain is approved and you have real slot IDs.
- Use a Google-certified CMP, such as Google Funding Choices, for AdSense traffic
  in the EEA, UK, and Switzerland.
- Submit `sitemap.xml` in Google Search Console, request indexing for the main
  tool and trust pages, then apply for AdSense once those pages are indexed.

## SEO tips

- Each tool page has its own URL, title, and meta description targeting different keywords
- Add more specific pages: `/png-to-jpg.html`, `/jpg-to-webp.html` etc. for more search entry points
- Submit sitemap to Google Search Console
- Write a brief blog-style section on each page explaining the tool (already included)

## Rename the site

Search and replace `ImageFlow` across all files if you choose a different brand name.
Update `wrangler.toml` name field and `<link rel="canonical">` URLs.
