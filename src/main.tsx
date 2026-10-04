import { Analytics } from '@vercel/analytics/react';
import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
// Self-hosted Latin fonts: Inter (declared in index.css) for the page, Space Grotesk and Doto for
// the phone mockup.
import '@fontsource/space-grotesk/latin-400.css';
import '@fontsource/space-grotesk/latin-500.css';
import '@fontsource/space-grotesk/latin-700.css';
import '@fontsource/doto/latin-700.css';
import './index.css';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>
);

// The production build ships prerendered HTML (scripts/prerender.js); the dev server does not.
if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
