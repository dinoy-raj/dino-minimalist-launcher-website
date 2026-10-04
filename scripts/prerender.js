// Bakes every page into its own HTML file under dist/ so crawlers and link previews see the full
// content without running JavaScript. Runs after the client and SSR builds (see `npm run build`).
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { pathToFileURL } from 'node:url';

const SITE = 'https://minimalistlauncher.com';

const ssrEntry = pathToFileURL('dist-ssr/entry-server.js').href;
const { render, PAGES } = await import(ssrEntry);

const template = readFileSync('dist/index.html', 'utf8');
const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) {
  throw new Error(`prerender: ${placeholder} not found in dist/index.html`);
}

// Preload the Latin Inter file: it sets the headline, each page's largest paint.
const inter = readdirSync('dist/assets').find((f) => /^inter-latin-wght-normal-.*\.woff2$/.test(f));
const preload = inter
  ? `<link rel="preload" href="/assets/${inter}" as="font" type="font/woff2" crossorigin>\n  </head>`
  : '</head>';

// Inline the stylesheet (about 6 KB gzipped) so the first paint does not wait on a request.
const inlineCss = (html) =>
  html.replace(/<link rel="stylesheet" crossorigin href="\/assets\/([^"]+\.css)">/, (_, name) => {
    const css = readFileSync(`dist/assets/${name}`, 'utf8');
    return `<style>${css}</style>`;
  });

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

/** Swaps one tag in the template, failing loudly if the template no longer has it. */
const swap = (html, pattern, replacement) => {
  if (!pattern.test(html)) throw new Error(`prerender: ${pattern} not found in the template head`);
  return html.replace(pattern, replacement);
};

/** The template's head belongs to the home page; give every other page its own. */
const withHead = (html, page) => {
  if (!page.head) return html;
  const { title, description, ogType, jsonLd } = page.head;
  const url = `${SITE}${page.path}`;
  const t = escapeAttr(title);
  const d = escapeAttr(description);
  let out = html;
  out = swap(out, /<title>[^<]*<\/title>/, `<title>${t}</title>`);
  out = swap(out, /<meta name="description" content="[^"]*">/, `<meta name="description" content="${d}">`);
  out = swap(out, /<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url}">`);
  out = swap(out, /<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${t}">`);
  out = swap(out, /<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${d}">`);
  out = swap(out, /<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${url}">`);
  out = swap(out, /<meta property="og:type" content="[^"]*">/, `<meta property="og:type" content="${ogType}">`);
  out = swap(out, /<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${t}">`);
  out = swap(out, /<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${d}">`);
  // The hero icon preload only helps the home page.
  out = swap(out, /\s*<link rel="preload" href="\/icon-192\.png"[^>]*>/, '');
  out = swap(
    out,
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`
  );
  return out;
};

for (const page of PAGES) {
  const html = inlineCss(
    withHead(template, page).replace(placeholder, `<div id="root">${render(page.path)}</div>`).replace('</head>', preload)
  );
  const file = `dist/${page.file}`;
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  console.log('prerender: wrote', file);
}

rmSync('dist-ssr', { recursive: true, force: true });
