# Security Policy

FreeImgTools is a small open-source project maintained by an independent developer. Security reports are welcome and appreciated.

## Supported Version

Security fixes are applied to the current `main` branch and the live site at:

https://freeimgtools.net

## Reporting a Vulnerability

Please do not open a public GitHub issue for security-sensitive reports.

Send reports privately to:

admin@freeimgtools.net

You can also use the contact page for non-sensitive questions:

https://freeimgtools.net/contact

## What to Include

Please include:

- Affected URL or file.
- Steps to reproduce.
- Browser and operating system.
- Expected result and actual result.
- Screenshots or console output if helpful.
- Whether the issue exposes user data, enables abuse, or affects site integrity.

You do not need to attach private images or documents. A description of the file type and size is usually enough.

## Scope

In scope:

- Cross-site scripting or script injection.
- Accidental image upload or data leakage from browser-only tools.
- Cloudflare Pages Function issues.
- Exposed secrets or credentials.
- Abuse paths that could create unexpected AI/API costs.

Out of scope:

- Best-effort spam reports without a reproducible issue.
- Social engineering.
- Denial-of-service testing against the live site.
- Reports that require access to private user files.

## Secrets

Do not commit Cloudflare tokens, API keys, analytics secrets, or local `.env` files. If a secret is accidentally committed, revoke it immediately and open a private security report.

## No Bug Bounty

There is currently no paid bug bounty program and no guaranteed response SLA. Reports are reviewed as maintainer time allows.
