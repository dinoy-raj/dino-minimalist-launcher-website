// Bakes the rendered page into dist/index.html so crawlers and link previews see the full
// content without running JavaScript. Runs after the client and SSR builds (see `npm run build`).
import { readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const ssrEntry = pathToFileURL('dist-ssr/entry-server.js').href;
const { render } = await import(ssrEntry);

const file = 'dist/index.html';
const template = readFileSync(file, 'utf8');
const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) {
  throw new Error(`prerender: ${placeholder} not found in ${file}`);
}

// Preload the Latin Inter file: it sets the headline, the page's largest paint.
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

writeFileSync(
  file,
  inlineCss(template.replace(placeholder, `<div id="root">${render()}</div>`).replace('</head>', preload))
);
rmSync('dist-ssr', { recursive: true, force: true });
console.log('prerender: wrote', file);
