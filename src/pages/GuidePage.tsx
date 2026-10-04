import React from 'react';
import DownloadButton from '../components/DownloadButton';
import RichText from '../components/RichText';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import { GUIDES, guideUrl, type Guide } from '../content/guides';

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

const GuidePage: React.FC<{ guide: Guide }> = ({ guide }) => {
  const others = GUIDES.filter((g) => g.slug !== guide.slug);

  return (
    <div className="min-h-screen bg-white text-black">
      <SiteHeader />
      <main className="px-5 pb-24 pt-36 sm:pt-44">
        <article className="mx-auto max-w-[720px]">
          <nav aria-label="Breadcrumb" className="text-[14px] font-semibold text-neutral-500">
            <a href="/" className="hover:text-black">Home</a>
            <span aria-hidden="true"> / </span>
            <a href="/guides" className="hover:text-black">Guides</a>
          </nav>
          <h1 className="mt-5 text-[40px] font-bold leading-[1.05] tracking-[-0.04em] sm:text-[56px]">{guide.h1}</h1>
          <p className="mt-5 text-[14px] font-medium text-neutral-500">
            By Dinoy Raj, maker of Dino Minimalist Launcher · Updated{' '}
            <time dateTime={guide.updated}>{formatDate(guide.updated)}</time> · {guide.readingMinutes} min read
          </p>

          <div className="mt-10 space-y-5 text-[19px] leading-[1.65] text-neutral-700">
            {guide.intro.map((p, i) => (
              <p key={i}>
                <RichText text={p} />
              </p>
            ))}
          </div>

          {guide.sections.map((section) => (
            <section key={section.heading} className="mt-14">
              <h2 className="text-[26px] font-bold leading-tight tracking-[-0.03em] sm:text-[30px]">{section.heading}</h2>
              {section.steps && (
                <ol className="mt-5 list-decimal space-y-3 pl-6 text-[18px] leading-[1.6] text-neutral-700 marker:font-semibold marker:text-black">
                  {section.steps.map((s, i) => (
                    <li key={i} className="pl-1">
                      <RichText text={s} />
                    </li>
                  ))}
                </ol>
              )}
              {section.paragraphs?.map((p, i) => (
                <p key={i} className="mt-5 text-[18px] leading-[1.65] text-neutral-700">
                  <RichText text={p} />
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-5 list-disc space-y-3 pl-6 text-[18px] leading-[1.6] text-neutral-700 marker:text-neutral-400">
                  {section.bullets.map((b, i) => (
                    <li key={i} className="pl-1">
                      <RichText text={b} />
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <aside className="mt-20 rounded-[32px] bg-[#fafafa] px-6 py-12 text-center sm:px-12">
            <img src="/icon-192.png" alt="" width={56} height={56} className="mx-auto h-14 w-14 rounded-[14px]" />
            <p className="mt-5 text-[26px] font-bold leading-tight tracking-[-0.03em]">Try Dino Minimalist Launcher</p>
            <p className="mx-auto mt-3 max-w-[40ch] text-[17px] leading-relaxed text-neutral-500">
              A free, ad-free, text-only home screen for Android. Switch back any time.
            </p>
            <div className="mt-8">
              <DownloadButton />
            </div>
          </aside>

          {others.length > 0 && (
            <section className="mt-16">
              <h2 className="text-[22px] font-bold tracking-[-0.02em]">More guides</h2>
              <ul className="mt-4 space-y-3">
                {others.map((g) => (
                  <li key={g.slug}>
                    <a href={guideUrl(g.slug)} className="text-[18px] font-semibold underline decoration-black/25 underline-offset-[3px] hover:decoration-black">
                      {g.h1}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
      </main>
      <SiteFooter />
    </div>
  );
};

export default GuidePage;
