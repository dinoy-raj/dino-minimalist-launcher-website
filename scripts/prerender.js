// Bakes the rendered page into dist/index.html so crawlers and link previews see the full
// content without running JavaScript. Runs after the client and SSR builds (see `npm run build`).
import { readFileSync, rmSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const ssrEntry = pathToFileURL('dist-ssr/entry-server.js').href;
const { render } = await import(ssrEntry);

const file = 'dist/index.html';
const template = readFileSync(file, 'utf8');
const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) {
  throw new Error(`prerender: ${placeholder} not found in ${file}`);
}

writeFileSync(file, template.replace(placeholder, `<div id="root">${render()}</div>`));
rmSync('dist-ssr', { recursive: true, force: true });
console.log('prerender: wrote', file);
