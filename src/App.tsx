import React, { useEffect, useState } from 'react';
import { Focus, Hourglass, LayoutList } from 'lucide-react';
import Glyph from './components/Glyph';
import PhoneMockup from './components/PhoneMockup';
import { THEMES } from './components/themes';
import RevealText from './components/RevealText';

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.dino.simple&pcampaignid=web_share';
const ROADMAP_URL = 'https://puzzle-kettle-30f.notion.site/Simple-Launcher-182b8c4aae1f80d8941df2086b1caf73';
const COMMUNITY_URL = 'https://linktr.ee/simple.launcher';
const AUTHOR_URL = 'https://linktr.ee/dinoyraj';

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
      <div className="text-[13px] font-medium text-neutral-400">{top}</div>
      <div className="text-[20px] font-semibold tracking-tight text-neutral-400">{bottom}</div>
    </div>
    <Laurel flip />
  </div>
);

const STATEMENT = 'text-[34px] font-bold leading-[1.08] tracking-[-0.04em] sm:text-[56px] lg:text-[68px]';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [themeIndex, setThemeIndex] = useState(0);

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
        <a href="#top" className="text-[22px] font-bold tracking-tight">
          Dino
        </a>
        <nav className="flex items-center gap-2 sm:gap-6">
          <a href={ROADMAP_URL} target="_blank" rel="noopener noreferrer" className="hidden text-[15px] font-semibold sm:block">
            Roadmap
          </a>
          <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className="hidden text-[15px] font-semibold sm:block">
            Community
          </a>
          <DownloadButton size="sm" />
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="flex min-h-[88vh] flex-col items-center justify-center px-4 pb-16 pt-24 text-center">
          <p className="animate-fade-in-up text-[18px] font-semibold tracking-tight sm:text-[22px]">Dino Minimalist Launcher</p>
          <h1 className="animate-fade-in-up animate-delay-100 mt-6 max-w-[15ch] text-[44px] font-bold leading-[1.02] tracking-[-0.045em] sm:text-[72px] lg:text-[92px]">
            The home screen
            <Glyph label="text list">
              <LayoutList strokeWidth={2.6} className="h-full w-full" />
            </Glyph>
            that gives
            <Glyph label="focus">
              <Focus strokeWidth={2.6} className="h-full w-full" />
            </Glyph>
            you your time
            <Glyph label="hourglass">
              <Hourglass strokeWidth={2.6} className="h-full w-full" />
            </Glyph>
            back
          </h1>
          <div className="animate-fade-in-up animate-delay-200 mt-12">
            <DownloadButton />
          </div>
          <div className="animate-fade-in-up animate-delay-300 mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <Badge top="Rated on Google Play" bottom="4.5 ★" />
            <Badge top="Loved by" bottom="2.5K+ reviewers" />
          </div>
        </section>

        {/* Product panel */}
        <section className="px-3 sm:px-[72px]">
          <div className="mx-auto max-w-[1296px] rounded-[40px] bg-[#fafafa] px-4 pb-14 pt-20 sm:rounded-[56px] sm:pt-28">
            <PhoneMockup theme={THEMES[themeIndex]} />
            <div className="mt-12 flex flex-wrap justify-center gap-2" role="radiogroup" aria-label="Preview theme">
              {THEMES.map((t, i) => (
                <button
                  key={t.id}
                  role="radio"
                  aria-checked={i === themeIndex}
                  onClick={() => setThemeIndex(i)}
                  className={`rounded-full px-4 py-2 text-[14px] font-semibold transition-colors ${
                    i === themeIndex ? 'bg-black text-white' : 'bg-black/[0.05] text-neutral-500 hover:text-black'
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
            <p className="mt-4 text-center text-[13px] text-neutral-400">12+ themes and 32+ fonts in the app. Tap to preview a few.</p>
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

        <section className="flex justify-center px-4 pb-32">
          <DownloadButton />
        </section>
      </main>

      <footer className="pb-20 text-center">
        <div className="text-[26px] font-bold tracking-tight text-neutral-200">Dino</div>
        <nav className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 text-[17px] font-semibold text-neutral-400">
          <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-black">Google Play</a>
          <span aria-hidden="true">•</span>
          <a href={ROADMAP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-black">Roadmap</a>
          <span aria-hidden="true">•</span>
          <a href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-black">Community</a>
        </nav>
        <p className="mt-4 text-[14px] font-semibold text-neutral-300">
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
