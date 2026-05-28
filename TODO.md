# TODO — Before Submitting to Google AdSense

## Critical (must do before applying)

- [ ] **Verify the AdSense publisher ID is correct** across all pages.
  Current ID: `ca-pub-7946557800571551`. Confirm this matches your AdSense account.

- [ ] **Add a real contact method.** The current contact page links to GitHub issues.
  AdSense reviewers prefer a visible email address or working contact form.
  Consider adding a public email address (e.g. via a form at Formspree or similar)
  so the contact page looks more like a real business.

- [ ] **Submit the updated sitemap to Google Search Console.**
  The sitemap now has 29 URLs including new trust and guide pages.
  GSC → Sitemaps → Enter `sitemap.xml` → Submit.

- [ ] **Request indexing for the new pages in Google Search Console.**
  Use URL Inspection on each new page (/about, /contact, /terms, /disclaimer,
  /guides, /guides/image-compression, /guides/image-formats,
  /guides/web-performance-images) and click "Request Indexing."

- [ ] **Wait for content to be indexed before applying.**
  Apply for AdSense only after Google has indexed at least the main tool pages
  and the trust pages. Check GSC → Pages → Indexed to confirm.

- [ ] **Add a cookie consent banner (if serving EU users).**
  AdSense requires cookie consent for EU visitors. Options:
  - Implement the Google Funding Choices consent platform (free, integrates
    directly with AdSense).
  - Use a lightweight third-party CMP (e.g. Cookiebot free tier).

---

## Recommended (improves approval chances)

- [ ] **Add a 4th guide article.** Consider `/guides/image-seo` covering
  alt text, file naming, structured data for images, and lazy loading.
  More original long-form content = stronger content signal for AdSense.

- [ ] **Expand the About page** with a clear statement of who runs the site
  and why. Even "built by an independent developer" with a brief personal note
  is better than no attribution. You don't need to expose personal details —
  a brief "about the creator" paragraph helps.

- [ ] **Add social sharing or RSS** to the guides section so the site
  looks like a living publication rather than a static set of pages.

- [ ] **Add a breadcrumb nav to guide pages.** The JSON-LD breadcrumbs are
  already present; add visible HTML breadcrumbs above each guide's H1 so
  reviewers and users see clear site hierarchy.

- [ ] **Expand the smaller long-tail pages.** Pages like `/jpg-to-png`,
  `/png-to-webp`, `/jpg-to-webp`, `/png-to-jpg` currently have 550–760 words.
  Adding a 200-word "How and when to convert" section and a 5-question FAQ
  would bring them to an acceptable content depth.

- [ ] **Add `loading="lazy"` to any images** once you add real imagery to
  the guides (screenshots, diagrams). Core Web Vitals improvement.

- [ ] **Add Open Graph tags** (`og:title`, `og:description`, `og:image`) to
  the guides and trust pages. Currently only index.html has OG tags.

---

## After AdSense approval

- [ ] Replace the commented-out ad slot placeholders with live AdSense ad units.
  Suggested positions:
  - Below the hero on the homepage (banner/leaderboard).
  - Below the tool interface on compress/convert/resize (responsive).
  - Within guides articles after the 2nd section (in-article format).

- [ ] Do NOT place ads inside the tool interaction area (upload zone, settings,
  results panel). AdSense policy prohibits ads that could be accidentally clicked
  during normal tool use.

- [ ] Monitor AdSense policy notifications closely for the first 30 days.

---

## AdSense Readiness Score (current state)

| Area                  | Score   | Notes |
|---|---|---|
| Content depth         | 7 / 10  | Guides add strong original content. Small long-tail pages still thin. |
| Trust & compliance    | 8 / 10  | About, Contact, Privacy, Terms, Disclaimer all present. Missing: working email, cookie consent. |
| UX & mobile           | 9 / 10  | iOS/macOS design, responsive layout, no dark patterns. |
| SEO basics            | 8 / 10  | Canonical tags, JSON-LD, sitemap, internal links all correct. |
| Policy risk           | Low     | No fake engagement, no deceptive UI, no thin affiliate content. |

**Overall:** Ready to apply once contact email and cookie consent are added and
new content pages are indexed.
