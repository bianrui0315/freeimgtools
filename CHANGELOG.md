# Changelog — AdSense Readiness Upgrade
**Date:** May 27, 2026

## Summary
Full AdSense readiness upgrade. Goal: transform the site from a thin utility
collection into a complete, content-backed, policy-compliant image tools website.

---

## New pages added

### Trust & legal (required for AdSense approval)
- **`/about`** — Explains what the site is, why it was built, privacy-first design,
  and what tools are available. No fabricated claims.
- **`/contact`** — GitHub issues link for bug reports and feature requests; guidance
  on what to include in a bug report; honest response-time disclosure.
- **`/terms`** — Terms of Service in plain English. 10 sections covering acceptable
  use, intellectual property, disclaimers, third-party services, and contact.
- **`/disclaimer`** — Covers tool limitations, AI feature caveats, AdSense advertising
  disclosure, and no-professional-advice statement.
- **`/404`** — Custom 404 page with `noindex` and links back to popular tools.

### Guides section (original long-form content)
- **`/guides`** — Hub page with 4 guide cards and 5 quick-answer FAQs.
- **`/guides/image-compression`** — ~2,100 words. Lossy vs. lossless,
  quality settings guide, format comparison, file size targets by use case, 5 FAQs.
- **`/guides/image-formats`** — ~2,000 words. JPG, PNG, WebP, AVIF, GIF, BMP
  compared in detail with decision table and browser compatibility notes. 5 FAQs.
- **`/guides/web-performance-images`** — ~2,300 words. Core Web Vitals impact,
  srcset/sizes, lazy loading, LCP preload, 8-step audit checklist. 5 FAQs.

---

## Existing pages improved

### compress.html
- Replaced 3-paragraph stub with 5 full sections: how compression works,
  quality settings reference table (90+/75-85/60-74/<60), format guide,
  step-by-step instructions, and 5-question FAQ.
- Added related guides links.

### convert.html
- Added 4 new sections: step-by-step instructions, common conversion use cases,
  limitations (HEIC/TIFF input, GIF animation), and 5-question FAQ.
- Added related guides links.

### resize.html
- Added 4 new sections: step-by-step instructions, resize modes explained
  (fit/cover/stretch), best practices (always resize down, 2× for HiDPI),
  and 5-question FAQ.
- Added related guides links.

### privacy.html
- Expanded from 7 short sections to 11 full sections.
- Added Google AdSense disclosure with opt-out links (adssettings.google.com,
  aboutads.info, networkadvertising.org).
- Added GDPR/CCPA section.
- Added Cloudflare Pages hosting disclosure.
- Added detailed cookie section distinguishing first-party (none) from
  third-party (AdSense, Cloudflare).

---

## Global site changes

### Navigation
- Added **Guides** link to the nav bar on all 21 existing pages.

### Footer
- Replaced tool-only footer with full legal footer on all 21 existing pages.
- Footer now includes: Home, Compress, Convert, Resize, Guides, About, Contact,
  Privacy Policy, Terms, Disclaimer.

### Sitemap
- Updated from 21 to 29 URLs.
- Added all new guides, trust pages, and updated lastmod to 2026-05-27.

---

## What was NOT changed
- Core tool functionality (compress.js, convert.js, resize.js, ai.js) — untouched.
- CSS design system — untouched.
- All existing long-tail SEO pages — nav/footer updated, content unchanged.
- AdSense publisher ID — already present on all pages.
