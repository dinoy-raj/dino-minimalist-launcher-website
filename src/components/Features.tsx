import React from 'react';
import { FEATURES, SCREENSHOTS } from '../content/site';

const Features: React.FC = () => (
  <section id="features" className="scroll-mt-28 px-3 sm:px-[72px]">
    <div className="mx-auto max-w-[1296px] rounded-[40px] bg-[#fafafa] px-6 py-20 sm:rounded-[56px] sm:px-16 sm:py-28">
      <h2 className="mx-auto max-w-[16ch] text-center text-[34px] font-bold leading-[1.05] tracking-[-0.04em] sm:text-[56px]">
        More than a minimal launcher
      </h2>
      <p className="mx-auto mt-6 max-w-[46ch] text-center text-[17px] leading-relaxed text-neutral-500">
        Real screenshots of Dino on a phone. Every theme keeps the same calm, text-only home screen.
      </p>
      {/* Scrolls sideways on small screens, four across on large ones. */}
      <div className="-mx-6 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-4 sm:gap-6 sm:overflow-visible sm:px-0">
        {SCREENSHOTS.map((shot) => (
          <figure key={shot.src} className="w-[58%] shrink-0 snap-center sm:w-auto">
            <img
              src={shot.src}
              alt={shot.alt}
              width={891}
              height={2000}
              loading="lazy"
              decoding="async"
              className="h-auto w-full rounded-[22px] border border-black/[0.06] shadow-[0_20px_40px_-24px_rgba(0,0,0,0.35)]"
            />
            <figcaption className="mt-3 text-center text-[14px] font-semibold text-neutral-500">{shot.theme} theme</figcaption>
          </figure>
        ))}
      </div>
      <ul className="mx-auto mt-20 grid max-w-[1040px] gap-x-12 gap-y-10 sm:grid-cols-2">
        {FEATURES.map((f) => (
          <li key={f.title}>
            <h3 className="text-[20px] font-semibold tracking-tight">{f.title}</h3>
            <p className="mt-2 text-[17px] leading-relaxed text-neutral-500">{f.body}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Features;
