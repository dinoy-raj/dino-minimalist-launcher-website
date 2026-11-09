// Build-time module, not hot-reloaded: it exports render helpers rather than components.
/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { GUIDES } from './content/guides';
import { FAQ, FEATURES } from './content/site';
import { PAGES, pageFor } from './routes.tsx';

export { FAQ, FEATURES, GUIDES, PAGES, pageFor };

/** Renders a page to HTML at build time; see scripts/prerender.js. */
export function render(path: string) {
  return renderToString(<StrictMode>{pageFor(path).render()}</StrictMode>);
}
