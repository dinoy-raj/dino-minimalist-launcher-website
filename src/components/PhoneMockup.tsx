import React, { useEffect, useState } from 'react';
import type { PhoneTheme } from './themes';

const APPS = ['Phone', 'Messages', 'Camera', 'Notes', 'Music', 'Maps'];

/**
 * The visitor's clock. It starts as null so the prerendered HTML and the first client render
 * match; the real time arrives in the effect.
 */
function useClock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 15_000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}

/** A pure-CSS phone that renders Dino's text-first home screen in the chosen theme. */
const PhoneMockup: React.FC<{ theme: PhoneTheme }> = ({ theme }) => {
  const now = useClock();
  const time = now ? now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }) : '09:41';
  const date = now ? now.toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'long' }) : 'Monday, 9 June';
  const cased = (s: string) => (theme.upper ? s.toUpperCase() : s);

  return (
    <div role="img" aria-label="Dino Minimalist Launcher home screen: a clock above a plain text list of apps" className="relative mx-auto w-[280px] sm:w-[320px] aspect-[9/19] rounded-[48px] bg-[#111] p-[10px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.35),0_0_0_1px_rgba(0,0,0,0.08)]">
      {/* Side buttons */}
      <span className="absolute -left-[3px] top-[22%] h-12 w-[3px] rounded-l bg-[#222]" />
      <span className="absolute -right-[3px] top-[28%] h-20 w-[3px] rounded-r bg-[#222]" />

      <div
        className="relative h-full w-full overflow-hidden rounded-[38px] flex flex-col px-7 pt-14 pb-8 transition-colors duration-500"
        style={{ background: theme.bg, color: theme.fg, fontFamily: theme.font }}
      >
        {/* Camera punch-hole */}
        <span className="absolute left-1/2 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-black" />

        <div className="text-[54px] leading-none tracking-tight tabular-nums">{time}</div>
        <div className="mt-2 text-[13px]" style={{ color: theme.muted }}>
          {cased(date)}
        </div>

        <ul className="mt-auto mb-auto space-y-[14px] pt-10">
          {APPS.map((app) => (
            <li key={app} className="text-[22px] leading-none tracking-tight">
              {cased(app)}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between text-[12px]" style={{ color: theme.muted }}>
          <span>{cased('Search')}</span>
          <span>{cased('82%')}</span>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
