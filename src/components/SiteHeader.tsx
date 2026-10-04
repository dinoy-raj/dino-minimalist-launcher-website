import React, { useEffect, useState } from 'react';
import { ROADMAP_URL } from '../content/site';
import DownloadButton from './DownloadButton';

/**
 * The floating pill nav. On the home page (`revealOnScroll`) it appears once the hero scrolls
 * away; on the other pages it is always shown.
 */
const SiteHeader: React.FC<{ revealOnScroll?: boolean }> = ({ revealOnScroll = false }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!revealOnScroll) return;
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [revealOnScroll]);

  const shown = !revealOnScroll || scrolled;

  return (
    <header
      className={`fixed inset-x-3 top-3 z-50 mx-auto flex max-w-[1360px] items-center justify-between rounded-full border border-black/[0.04] bg-white/80 py-2 pl-6 pr-2 backdrop-blur-xl transition-all duration-500 sm:inset-x-6 sm:top-5 ${
        shown ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
      }`}
    >
      <a href="/" className="flex items-center gap-2.5 text-[22px] font-bold tracking-tight">
        <img src="/favicon.svg" alt="" width={28} height={28} className="h-7 w-7 rounded-[7px]" />
        Dino
      </a>
      <nav className="flex items-center gap-2 sm:gap-6">
        <a href="/#features" className="hidden text-[15px] font-semibold sm:block">
          Features
        </a>
        <a href="/guides" className="hidden text-[15px] font-semibold sm:block">
          Guides
        </a>
        <a href="/#faq" className="hidden text-[15px] font-semibold md:block">
          FAQ
        </a>
        <a href={ROADMAP_URL} target="_blank" rel="noopener noreferrer" className="hidden text-[15px] font-semibold lg:block">
          Roadmap
        </a>
        <DownloadButton size="sm" />
      </nav>
    </header>
  );
};

export default SiteHeader;
