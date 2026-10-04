import React from 'react';
import { GUIDES, guideUrl } from '../content/guides';

/** One card per guide, linking to it. Used on /guides and the home page. */
const GuideCards: React.FC<{ headingLevel?: 'h2' | 'h3' }> = ({ headingLevel = 'h2' }) => {
  const Heading = headingLevel;
  return (
    <ul className="grid gap-5 sm:grid-cols-2">
      {GUIDES.map((g) => (
        <li key={g.slug}>
          <a
            href={guideUrl(g.slug)}
            className="block h-full rounded-[28px] bg-[#fafafa] p-7 transition-colors hover:bg-[#f2f2f2] sm:p-9"
          >
            <Heading className="text-[24px] font-bold leading-tight tracking-[-0.03em]">{g.h1}</Heading>
            <p className="mt-3 text-[16px] leading-relaxed text-neutral-500">{g.description}</p>
            <p className="mt-5 text-[14px] font-semibold">Read the guide · {g.readingMinutes} min →</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default GuideCards;
