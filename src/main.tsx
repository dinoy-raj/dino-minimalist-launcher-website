import { Analytics } from '@vercel/analytics/react';
import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
// Self-hosted fonts: Inter for the page, Space Grotesk and Doto for the phone mockup.
import '@fontsource-variable/inter';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/doto/700.css';
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
