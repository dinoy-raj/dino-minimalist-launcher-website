// Bakes every page into its own HTML file under dist/ so crawlers, AI agents and link previews see
// the full content and head without running JavaScript, then writes sitemap.xml and llms.txt from
// the same page table. Runs after the client and SSR builds (see `npm run build`).
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { pathToFileURL } from 'node:url';

const SITE = 'https://minimalistlauncher.com';
const OG_IMAGE = `${SITE}/og-image.png`;

const ssrEntry = pathToFileURL('dist-ssr/entry-server.js').href;
const { render, PAGES, GUIDES, FAQ, FEATURES, pageFor } = await import(ssrEntry);

const template = readFileSync('dist/index.html', 'utf8');
const placeholder = '<div id="root"></div>';
const headBlock = /<!-- seo:head[^>]*-->[\s\S]*?<!-- \/seo:head -->/;
for (const [what, ok] of [
  [placeholder, template.includes(placeholder)],
  ['the seo:head block', headBlock.test(template)],
]) {
  if (!ok) throw new Error(`prerender: ${what} not found in dist/index.html`);
}

// Preload the Latin Inter file: it sets the headline, each page's largest paint.
const inter = readdirSync('dist/assets').find((f) => /^inter-latin-wght-normal-.*\.woff2$/.test(f));
if (!inter) throw new Error('prerender: Inter font file not found in dist/assets');

// Inline the stylesheet (about 6 KB gzipped) so the first paint does not wait on a request.
const inlineCss = (html) =>
  html.replace(/<link rel="stylesheet" crossorigin href="\/assets\/([^"]+\.css)">/, (_, name) => {
    const css = readFileSync(`dist/assets/${name}`, 'utf8');
    return `<style>${css}</style>`;
  });

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Every tag a search engine or link preview reads, for one page. */
function headHtml(page) {
  const { title, description, social = description, imageAlt, ogType, jsonLd, preloadIcon } = page.head;
  const url = page.path === '/' ? `${SITE}/` : `${SITE}${page.path}`;
  const [t, d, s, alt] = [title, description, social, imageAlt].map(esc);
  const lines = [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}">`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">`,
    `<link rel="canonical" href="${url}">`,
    `<meta property="og:site_name" content="Dino Minimalist Launcher">`,
    `<meta property="og:type" content="${ogType}">`,
    `<meta property="og:title" content="${t}">`,
    `<meta property="og:description" content="${s}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:locale" content="en_US">`,
    `<meta property="og:image" content="${OG_IMAGE}">`,
    `<meta property="og:image:secure_url" content="${OG_IMAGE}">`,
    `<meta property="og:image:type" content="image/png">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="${alt}">`,
    ...(ogType === 'article' && page.article
      ? [
          `<meta property="article:published_time" content="${page.article.published}">`,
          `<meta property="article:modified_time" content="${page.article.updated}">`,
        ]
      : []),
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${t}">`,
    `<meta name="twitter:description" content="${s}">`,
    `<meta name="twitter:image" content="${OG_IMAGE}">`,
    `<meta name="twitter:image:alt" content="${alt}">`,
    `<link rel="preload" href="/assets/${inter}" as="font" type="font/woff2" crossorigin>`,
    ...(preloadIcon ? ['<link rel="preload" href="/icon-192.png" as="image" fetchpriority="high">'] : []),
    `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`,
  ];
  return lines.join('\n    ');
}

const titles = new Set();
for (const page of PAGES) {
  if (titles.has(page.head.title)) throw new Error(`prerender: duplicate title "${page.head.title}"`);
  titles.add(page.head.title);

  if (pageFor(page.path) !== page) throw new Error(`prerender: ${page.path} resolves to a different page`);
  const markup = render(page.path);
  if (!markup.includes('<h1')) throw new Error(`prerender: ${page.path} rendered without an <h1>`);
  const html = inlineCss(
    template.replace(headBlock, () => headHtml(page)).replace(placeholder, () => `<div id="root">${markup}</div>`)
  );
  const file = `dist/${page.file}`;
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  console.log('prerender: wrote', file);
}

// sitemap.xml: every page, with the date its content last changed (not the build date).
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${PAGES.map(
  (p) => `  <url>
    <loc>${p.path === '/' ? `${SITE}/` : `${SITE}${p.path}`}</loc>
    <lastmod>${p.lastmod}</lastmod>
${(p.images ?? []).map((src) => `    <image:image>\n      <image:loc>${SITE}${src}</image:loc>\n    </image:image>\n`).join('')}  </url>`
).join('\n')}
</urlset>
`;
writeFileSync('dist/sitemap.xml', sitemap);
console.log('prerender: wrote dist/sitemap.xml');

// llms.txt: a plain summary for AI assistants that read it (Google Search does not need it).
const plain = (text) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
const llms = `# Dino Minimalist Launcher

> Dino Minimalist Launcher (formerly Simple Launcher) is a free, ad-free minimalist launcher for Android 8.0 and newer. It replaces the grid of app icons with a calm, text-only minimal home screen and adds focus tools to reduce screen time.

- Website: ${SITE}/
- Google Play: https://play.google.com/store/apps/details?id=com.dino.simple
- Made by: Dinoy Raj

## Features

${FEATURES.map((f) => `- ${f.title}: ${f.body}`).join('\n')}

## Guides

${GUIDES.map((g) => `- [${g.h1}](${SITE}/guides/${g.slug}): ${g.description}`).join('\n')}

## FAQ

${FAQ.map((f) => `### ${f.q}\n\n${plain(f.a)}`).join('\n\n')}
`;
writeFileSync('dist/llms.txt', llms);
console.log('prerender: wrote dist/llms.txt');

rmSync('dist-ssr', { recursive: true, force: true });
