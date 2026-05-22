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
5. Done — Cloudflare will deploy automatically on every push

## Local development

```bash
npm install
npm run dev
# Opens http://localhost:3000
```

Requires `wrangler` (Cloudflare CLI) for AI features. AI features won't work locally without a Cloudflare account with Workers AI access.

## Monetization

- **Google AdSense**: Uncomment the AdSense snippet in each HTML file, replace `ca-pub-XXXXXXXXXXXXXXXX` and slot IDs
- Apply for AdSense at https://adsense.google.com once you have traffic

## SEO tips

- Each tool page has its own URL, title, and meta description targeting different keywords
- Add more specific pages: `/png-to-jpg.html`, `/jpg-to-webp.html` etc. for more search entry points
- Submit sitemap to Google Search Console
- Write a brief blog-style section on each page explaining the tool (already included)

## Rename the site

Search and replace `ImageFlow` across all files if you choose a different brand name.
Update `wrangler.toml` name field and `<link rel="canonical">` URLs.
