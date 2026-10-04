import React from 'react';
import GuideCards from '../components/GuideCards';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

const GuidesIndex: React.FC = () => (
  <div className="min-h-screen bg-white text-black">
    <SiteHeader />
    <main className="px-5 pb-28 pt-36 sm:pt-44">
      <div className="mx-auto max-w-[1040px]">
        <nav aria-label="Breadcrumb" className="text-[14px] font-semibold text-neutral-500">
          <a href="/" className="hover:text-black">Home</a>
        </nav>
        <h1 className="mt-5 max-w-[16ch] text-[44px] font-bold leading-[1.02] tracking-[-0.045em] sm:text-[72px]">
          Guides to a calmer phone
        </h1>
        <p className="mt-6 max-w-[52ch] text-[19px] leading-relaxed text-neutral-500">
          Practical, step-by-step help for spending less time on your Android phone and setting up a minimalist home
          screen.
        </p>
        <div className="mt-14">
          <GuideCards />
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
);

export default GuidesIndex;
