import React, { useEffect, useState } from 'react';
import { Hourglass, LayoutList } from 'lucide-react';
import Faq from './components/Faq';
import Features from './components/Features';
import Glyph from './components/Glyph';
import PhoneMockup from './components/PhoneMockup';
import RevealText from './components/RevealText';
import { AUTHOR_URL, COMMUNITY_URL, PLAY_URL, ROADMAP_URL } from './content/site';

const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
  </svg>
);

const DownloadButton: React.FC<{ size?: 'lg' | 'sm' }> = ({ size = 'lg' }) => (
  <a
    href={PLAY_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={
      size === 'lg'
        ? 'inline-flex items-center gap-3 rounded-[18px] bg-black px-7 py-[18px] text-[17px] font-semibold text-white transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]'
        : 'inline-flex items-center gap-2 rounded-full bg-black px-4 py-[10px] text-[14px] font-semibold text-white transition-transform duration-200 hover:scale-[1.03]'
    }
  >
    <PlayIcon className={size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'} />
    {size === 'lg' ? 'Get it on Google Play' : 'Download'}
  </a>
);

// Leaves placed along the left half of a circle, each tilted off the tangent.
const LEAVES = [0, 1, 2, 3, 4, 5].map((i) => {
  const a = ((115 + i * 26) * Math.PI) / 180;
  return { cx: 24 + Math.cos(a) * 17, cy: 28 - Math.sin(a) * 22, angle: -((115 + i * 26) - 90) + 35 };
});

const Laurel: React.FC<{ flip?: boolean }> = ({ flip }) => (
  <svg viewBox="0 0 24 56" className={`h-12 w-5 text-neutral-300 ${flip ? '-scale-x-100' : ''}`} fill="currentColor" aria-hidden="true">
    {LEAVES.map(({ cx, cy, angle }) => (
      <ellipse key={cy} cx={cx} cy={cy} rx="2.6" ry="5" transform={`rotate(${angle} ${cx} ${cy})`} />
    ))}
  </svg>
);

const Badge: React.FC<{ top: string; bottom: string }> = ({ top, bottom }) => (
  <div className="flex items-center gap-2">
    <Laurel />
    <div className="text-center leading-tight">
      <div className="text-[13px] font-medium text-neutral-500">{top}</div>
      <div className="text-[20px] font-semibold tracking-tight text-neutral-500">{bottom}</div>
    </div>
    <Laurel flip />
  </div>
);

const STATEMENT = 'text-[34px] font-bold leading-[1.08] tracking-[-0.04em] sm:text-[56px] lg:text-[68px]';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Floating pill nav, shown once the hero scrolls away */}
      <header
        className={`fixed inset-x-3 top-3 z-50 mx-auto flex max-w-[1360px] items-center justify-between rounded-full border border-black/[0.04] bg-white/80 py-2 pl-6 pr-2 backdrop-blur-xl transition-all duration-500 sm:inset-x-6 sm:top-5 ${
          scrolled ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 text-[22px] font-bold tracking-tight">
          <img src="/favicon.svg" alt="" width={28} height={28} className="h-7 w-7 rounded-[7px]" />
          Dino
        </a>
        <nav className="flex items-center gap-2 sm:gap-6">
          <a href="#features" className="hidden text-[15px] font-semibold sm:block">
            Features
          </a>
          <a href="#faq" className="hidden text-[15px] font-semibold sm:block">
            FAQ
          </a>
          <a href={ROADMAP_URL} target="_blank" rel="noopener noreferrer" className="hidden text-[15px] font-semibold md:block">
            Roadmap
          </a>
          <DownloadButton size="sm" />
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="flex min-h-[88vh] flex-col items-center justify-center px-4 pb-16 pt-24 text-center">
          <div className="animate-rise flex flex-col items-center gap-4">
            <img
              src="/icon-192.png"
              alt="Dino Minimalist Launcher app icon"
              width={72}
              height={72}
              fetchPriority="high"
              className="h-[72px] w-[72px] rounded-[18px] shadow-[0_12px_30px_-10px_rgba(0,0,0,0.45)]"
            />
            <p className="text-[18px] font-semibold tracking-tight sm:text-[22px]">Dino Minimalist Launcher</p>
          </div>
          <h1 className="animate-rise animate-delay-100 mt-6 max-w-[16ch] text-[44px] font-bold leading-[1.02] tracking-[-0.045em] sm:text-[72px] lg:text-[92px]">
            The minimalist launcher
            <Glyph label="text list">
              <LayoutList strokeWidth={2.6} className="h-full w-full" />
            </Glyph>
            that gives you your time
            <Glyph label="hourglass">
              <Hourglass strokeWidth={2.6} className="h-full w-full" />
            </Glyph>
            back
          </h1>
          <p className="animate-rise animate-delay-200 mt-8 max-w-[34ch] text-[18px] leading-relaxed text-neutral-500 sm:text-[20px]">
            A free, ad-free minimal launcher for Android. A calm, text-only home screen that cuts distractions and screen time.
          </p>
          <div className="animate-rise animate-delay-200 mt-10">
            <DownloadButton />
          </div>
          <div className="animate-rise animate-delay-300 mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <Badge top="Rated on Google Play" bottom="4.8 ★" />
            <Badge top="Loved by" bottom="2.5K+ reviewers" />
          </div>
        </section>

        {/* Product panel */}
        <section className="px-3 sm:px-[72px]">
          <div className="mx-auto max-w-[1296px] rounded-[40px] bg-[#fafafa] px-4 pb-14 pt-20 sm:rounded-[56px] sm:pt-28">
            <PhoneMockup />
            <p className="mt-3 text-center text-[13px] text-neutral-500">12+ themes and 32+ fonts in the app. Here are a few.</p>
          </div>
        </section>

        {/* Statements */}
        <section className="mx-auto max-w-[1040px] space-y-32 px-5 py-32 text-center sm:space-y-48 sm:py-48">
          <RevealText
            className={STATEMENT}
            text="Dino swaps rows of colourful icons for a calm, text-first list of the apps you actually need."
          />
          <RevealText
            className={STATEMENT}
            text="Pin your favourites, hide the rest, and make it yours with themes, fonts and widgets."
          />
          <RevealText
            className={STATEMENT}
            text="Lightweight, fast and free of ads, so your phone feels like a tool again — not a slot machine."
          />
        </section>

        <Features />

        <Faq />

        <section className="flex justify-center px-4 pb-32">
          <DownloadButton />
        </section>
      </main>

      <footer className="pb-20 text-center">
        <div className="text-[26px] font-bold tracking-tight text-neutral-500">Dino Minimalist Launcher</div>
        <nav className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 text-[17px] font-semibold text-neutral-500">
          <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-black">Google Play</a>
          <span aria-hidden="true">•</span>
          <a href={ROADMAP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-black">Roadmap</a>
          <span aria-hidden="true">•</span>
          <a href="#faq" className="hover:text-black">FAQ</a>
          <span aria-hidden="true">•</span>
          <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-black">Community</a>
        </nav>
        <p className="mt-4 text-[14px] font-semibold text-neutral-500">
          Crafted by{' '}
          <a href={AUTHOR_URL} target="_blank" rel="noopener noreferrer" className="hover:text-black">
            Dinoy
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
