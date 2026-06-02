# TODO — Monetization Readiness

## Completed

- [x] **Add trust pages.**
  About, Contact, Privacy Policy, Terms, and Disclaimer pages are present.

- [x] **Add a real contact method.**
  The contact and privacy pages list `admin@freeimgtools.net`.

- [x] **Add cookie consent loader.**
  `js/cookie-consent.js` delays AdSense loading until consent is accepted.

- [x] **Add `ads.txt`.**
  `ads.txt` lists `google.com, pub-7946557800571551, DIRECT, f08c47fec0942fa0`.

- [x] **Add guide content.**
  The Guides section includes image compression, formats, performance, SEO,
  PDF-to-image, file-size reduction, and accessibility articles.

- [x] **Harden the AI API CORS policy.**
  `/api/ai` allows the production domain and localhost by default instead of
  returning wildcard `Access-Control-Allow-Origin: *`.

---

## Critical Before Applying To AdSense

- [ ] **Verify the AdSense publisher ID is correct.**
  Current ID: `ca-pub-7946557800571551`. Confirm this exactly matches your
  AdSense account before applying or enabling ad slots.

- [ ] **Use a Google-certified CMP for EEA/UK/Switzerland traffic.**
  The current lightweight cookie banner is useful, but Google requires a
  certified Consent Management Platform for personalized/non-personalized ads
  in those regions. Google Funding Choices is the simplest option because it
  integrates directly with AdSense.

- [ ] **Submit the updated sitemap to Google Search Console.**
  The sitemap includes tool, guide, and trust pages.
  GSC → Sitemaps → Enter `sitemap.xml` → Submit.

- [ ] **Request indexing for the new pages in Google Search Console.**
  Use URL Inspection on each new page (/about, /contact, /terms, /disclaimer,
  /guides, /guides/image-compression, /guides/image-formats,
  /guides/web-performance-images) and click "Request Indexing."

- [ ] **Wait for content to be indexed before applying.**
  Apply for AdSense only after Google has indexed at least the main tool pages
  and the trust pages. Check GSC → Pages → Indexed to confirm.

---

## Recommended

- [ ] **Add Search Console verification metadata or DNS verification.**
  DNS verification is best because it covers the whole domain and does not
  require adding a per-page `<meta>` tag.

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

- [ ] **Add more high-intent tool pages.**
  Good next targets: `compress-image-under-100kb`, `heic-to-jpg`,
  `resize-image-for-linkedin-banner`, `passport-photo-size`, and
  `make-image-transparent-background`.

- [ ] **Add `loading="lazy"` to any images** once you add real imagery to
  the guides (screenshots, diagrams). Core Web Vitals improvement.

- [ ] **Add Open Graph tags** (`og:title`, `og:description`, `og:image`) to
  the guides and trust pages. Currently only index.html has OG tags.

---

## After AdSense approval

- [ ] Replace the commented-out ad slot placeholders with live AdSense ad units.
  Do this only after the domain is approved and you have real slot IDs.
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
| Trust & compliance    | 8 / 10  | About, Contact, Privacy, Terms, Disclaimer, email, consent loader, and ads.txt are present. Still needs certified CMP if serving EEA/UK/Switzerland AdSense traffic. |
| UX & mobile           | 9 / 10  | iOS/macOS design, responsive layout, no dark patterns. |
| SEO basics            | 8 / 10  | Canonical tags, JSON-LD, sitemap, internal links all correct. |
| Policy risk           | Low     | No fake engagement, no deceptive UI, no thin affiliate content. |

**Overall:** Close to application-ready once the publisher ID is verified,
the sitemap is submitted, key pages are indexed, and a certified CMP decision is
made for EEA/UK/Switzerland ad traffic.
