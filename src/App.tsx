import React from 'react';
import { Hourglass, LayoutList } from 'lucide-react';
import DownloadButton from './components/DownloadButton';
import Faq from './components/Faq';
import Features from './components/Features';
import Glyph from './components/Glyph';
import GuideCards from './components/GuideCards';
import PhoneMockup from './components/PhoneMockup';
import RevealText from './components/RevealText';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';

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
  return (
    <div className="min-h-screen bg-white text-black">
      <SiteHeader revealOnScroll />

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

        {/* Guides */}
        <section id="guides" className="mx-auto max-w-[1040px] scroll-mt-28 px-5 pt-32 sm:pt-40">
          <h2 className="text-center text-[34px] font-bold leading-[1.05] tracking-[-0.04em] sm:text-[56px]">Guides to a calmer phone</h2>
          <p className="mx-auto mt-6 max-w-[46ch] text-center text-[17px] leading-relaxed text-neutral-500">
            Step-by-step help for spending less time on your phone. <a href="/guides" className="font-semibold text-black underline decoration-black/25 underline-offset-[3px] hover:decoration-black">See all guides</a>
          </p>
          <div className="mt-12">
            <GuideCards headingLevel="h3" />
          </div>
        </section>

        <Faq />

        <section className="flex justify-center px-4 pb-32">
          <DownloadButton />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
