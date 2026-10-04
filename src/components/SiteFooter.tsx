import React from 'react';
import { AUTHOR_URL, COMMUNITY_URL, PLAY_URL, ROADMAP_URL } from '../content/site';

const LINKS: { href: string; label: string; external?: boolean }[] = [
  { href: PLAY_URL, label: 'Google Play', external: true },
  { href: '/guides', label: 'Guides' },
  { href: '/#faq', label: 'FAQ' },
  { href: ROADMAP_URL, label: 'Roadmap', external: true },
  { href: COMMUNITY_URL, label: 'Community', external: true },
];

const SiteFooter: React.FC = () => (
  <footer className="pb-20 text-center">
    <a href="/" className="text-[26px] font-bold tracking-tight text-neutral-500 hover:text-black">
      Dino Minimalist Launcher
    </a>
    <nav className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 text-[17px] font-semibold text-neutral-500">
      {LINKS.map((link, i) => (
        <React.Fragment key={link.label}>
          {i > 0 && <span aria-hidden="true">•</span>}
          <a
            href={link.href}
            className="hover:text-black"
            {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {link.label}
          </a>
        </React.Fragment>
      ))}
    </nav>
    <p className="mt-4 text-[14px] font-semibold text-neutral-500">
      Crafted by{' '}
      <a href={AUTHOR_URL} target="_blank" rel="noopener noreferrer" className="hover:text-black">
        Dinoy Raj
      </a>
    </p>
  </footer>
);

export default SiteFooter;
