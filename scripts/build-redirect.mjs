// Retire the public deployment without deleting the original Eleventy source.
import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
const out = 'redirect-site';
rmSync(out, { recursive: true, force: true });
mkdirSync(out);
function page(target) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Keith Williams has moved</title><link rel="canonical" href="${target}"><meta name="robots" content="noindex,follow"><meta http-equiv="refresh" content="0;url=${target}"><script>location.replace(${JSON.stringify(target)})</script><style>body{font:1.2rem system-ui;max-width:38rem;margin:15vh auto;padding:2rem;background:#f7f4ec;color:#253d35}a{color:inherit}</style></head><body><h1>A new home for my work.</h1><p>My portfolio has moved to <a href="${target}">keithwilliams.org</a>.</p><p>Follow the link if you aren’t redirected automatically.</p></body></html>`;
}
writeFileSync(`${out}/index.html`, page('https://keithwilliams.org/'));
writeFileSync(`${out}/404.html`, page('https://keithwilliams.org/'));
mkdirSync(`${out}/about`);
writeFileSync(`${out}/about/index.html`, page('https://keithwilliams.org/about'));
writeFileSync(`${out}/about.html`, page('https://keithwilliams.org/about'));
writeFileSync(`${out}/CNAME`, 'www.eaikw.com\n');
writeFileSync(`${out}/.nojekyll`, '');
writeFileSync(`${out}/robots.txt`, 'User-agent: *\nAllow: /\n');
