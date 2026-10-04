import { Analytics } from '@vercel/analytics/react';
import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
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
