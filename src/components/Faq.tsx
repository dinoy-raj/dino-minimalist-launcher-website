import React from 'react';
import { FAQ } from '../content/site';
import RichText from './RichText';

// Structured data takes plain text: keep a link's label, drop its target.
const plain = (text: string) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: plain(a) },
  })),
};

/** Questions and answers, as native disclosure widgets so they work without JavaScript. */
const Faq: React.FC = () => (
  <section id="faq" className="mx-auto max-w-[820px] scroll-mt-28 px-5 py-32 sm:py-40">
    <h2 className="text-center text-[34px] font-bold leading-[1.05] tracking-[-0.04em] sm:text-[56px]">Questions, answered</h2>
    <div className="mt-14 divide-y divide-black/[0.06] border-y border-black/[0.06]">
      {FAQ.map(({ q, a }) => (
        <details key={q} className="group py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[19px] font-semibold tracking-tight [&::-webkit-details-marker]:hidden">
            <h3>{q}</h3>
            <span aria-hidden="true" className="text-[26px] font-normal leading-none text-neutral-400 transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 max-w-[64ch] text-[17px] leading-relaxed text-neutral-500">
            <RichText text={a} />
          </p>
        </details>
      ))}
    </div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  </section>
);

export default Faq;
