// Build-time module, not hot-reloaded: it exports render helpers rather than components.
/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { PAGES, pageFor } from './routes.tsx';

export { PAGES };

/** Renders a page to HTML at build time; see scripts/prerender.js. */
export function render(path: string) {
  return renderToString(<StrictMode>{pageFor(path).render()}</StrictMode>);
}
