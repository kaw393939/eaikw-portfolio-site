# Portfolio moved

As of November 11, 2026, the live portfolio is https://keithwilliams.org/.
The original Eleventy source and its complete Git history remain here for reference.
Existing build and quality scripts still examine that historical source, but only
`.github/workflows/deploy.yml` publishes. It creates a tiny redirect-only artifact
with `scripts/build-redirect.mjs`, without installing dependencies.

The old About URL forwards to the new About page. The homepage and unmatched old
URLs forward to the new homepage. These are static HTML/JavaScript redirects with
a visible fallback link, not HTTP 301 responses. The old GitHub Pages custom domain
`www.eaikw.com` stays attached so old links continue working. No email/DNS changes
are part of this source update.
