import React from 'react';
import { FEATURES } from '../content/site';

const Features: React.FC = () => (
  <section id="features" className="scroll-mt-28 px-3 sm:px-[72px]">
    <div className="mx-auto max-w-[1296px] rounded-[40px] bg-[#fafafa] px-6 py-20 sm:rounded-[56px] sm:px-16 sm:py-28">
      <h2 className="mx-auto max-w-[16ch] text-center text-[34px] font-bold leading-[1.05] tracking-[-0.04em] sm:text-[56px]">
        More than a minimal launcher
      </h2>
      <ul className="mx-auto mt-16 grid max-w-[1040px] gap-x-12 gap-y-10 sm:grid-cols-2">
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
