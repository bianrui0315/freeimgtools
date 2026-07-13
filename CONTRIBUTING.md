# Contributing to FreeImgTools

Thanks for helping improve FreeImgTools. This project is a privacy-first collection of browser-based image tools, so the most valuable contributions make everyday image work faster, clearer, more accessible, and safer for users.

## Good First Contributions

- Fix a reproducible bug in a browser-side image tool.
- Improve mobile layout, keyboard access, or screen-reader labels.
- Add clearer error messages for unsupported files or browser limitations.
- Improve guide accuracy with first-party sources.
- Add focused internal links between related tools and guides.
- Add QA steps for a tool page that is hard to test manually.

## Local Setup

Install dependencies:

```bash
npm install
```

Run the Cloudflare Pages local server:

```bash
npm run dev
```

For a quick static preview:

```bash
python3 -m http.server 4174
```

A plain static server does not emulate Cloudflare Pages Functions, redirects, headers, or clean URLs.

## Project Principles

- Keep core image processing local to the browser whenever possible.
- Do not add server uploads for private image workflows such as compression, conversion, resizing, cropping, GIF creation, or image-to-PDF.
- Treat AI features separately and clearly because they require a server-side inference request.
- Prefer focused pages that solve a real task over thin keyword-only pages.
- Keep canonical URLs, sitemap entries, redirects, and internal links consistent.
- Avoid adding heavy dependencies unless they unlock a real tool workflow.

## Page and SEO Checklist

When adding or changing a page, check:

- One clear `h1`.
- A descriptive `<title>` and meta description.
- A canonical URL using `https://freeimgtools.net/...`.
- Internal links to related tools and guides.
- Relevant FAQ or structured data when useful.
- A sitemap entry for public canonical pages.
- No duplicate pages with conflicting canonical tags.

## QA Checklist

Before opening a pull request, run or verify:

```bash
npm run check
```

Also test changed tool pages in a browser. For UI changes, check desktop and mobile widths. For processing changes, verify that downloaded files open correctly and match the selected format, size, or dimensions.

## Pull Requests

- Keep pull requests focused on one feature, fix, or content group.
- Describe what changed and how it was tested.
- Include screenshots for visible UI changes when possible.
- Do not commit generated secrets, API tokens, local environment files, or private user images.

## Security Reports

Please do not report security issues in public GitHub issues. See [SECURITY.md](SECURITY.md) for private reporting instructions.
