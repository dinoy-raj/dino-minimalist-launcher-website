import { Analytics } from '@vercel/analytics/react';
import { StrictMode, startTransition } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
// Inter, the page font, is declared in index.css and preloaded by scripts/prerender.js.
import './index.css';
import { pageFor } from './routes.tsx';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    {pageFor(window.location.pathname).render()}
    <Analytics />
  </StrictMode>
);

// The production build ships prerendered HTML (scripts/prerender.js); the dev server does not.
// Hydrating in a transition lets React yield between chunks of work (lower blocking time).
if (root.hasChildNodes()) {
  startTransition(() => {
    hydrateRoot(root, app);
  });
} else {
  createRoot(root).render(app);
}

/** Runs `fn` once the page has painted, so it never competes with the first paint. */
function afterFirstPaint(fn: () => void) {
  let done = false;
  const run = () => {
    if (!done) {
      done = true;
      fn();
    }
  };
  try {
    const observer = new PerformanceObserver((list) => {
      if (list.getEntries().some((e) => e.name === 'first-contentful-paint')) {
        observer.disconnect();
        run();
      }
    });
    observer.observe({ type: 'paint', buffered: true });
  } catch {
    run();
  }
  // Browsers without paint timing, or a page painted in the background.
  window.setTimeout(run, 3000);
}

afterFirstPaint(() => {
  void import('./mockup-fonts.css');
});
