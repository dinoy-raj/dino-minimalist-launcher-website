import React, { useEffect, useState } from 'react';
import { THEMES } from './themes';

const APPS: { name: string; usage?: string; folder?: boolean }[] = [
  { name: 'Messages', usage: '4 M' },
  { name: 'Camera', usage: '0 M' },
  { name: 'Productivity', folder: true },
  { name: 'WhatsApp', usage: '1 H 12 M' },
  { name: 'Gmail', usage: '9 M' },
];

const THEME_INTERVAL_MS = 3200;
const pad = (n: number) => String(n).padStart(2, '0');

/**
 * The visitor's clock, ticking every second. It starts as null so the prerendered HTML and the
 * first client render match; the real time arrives in the effect.
 */
function useClock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}

/** Steps through the themes on a timer. */
function useCycle(length: number) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % length), THEME_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [length]);
  return index;
}

/**
 * A pure-CSS phone showing Dino's stacked-clock home screen, swapping through the launcher's
 * themes on its own. Sizes are in container units so the screen scales as one piece.
 */
const PhoneMockup: React.FC = () => {
  const now = useClock();
  const themeIndex = useCycle(THEMES.length);
  const theme = THEMES[themeIndex];

  const hours = now ? pad(now.getHours()) : '01';
  const minutes = now ? pad(now.getMinutes()) : '14';
  const second = now ? now.getSeconds() : 43;
  const weekday = now ? now.toLocaleDateString('en-GB', { weekday: 'short' }) : 'Sun';
  const day = now ? `${now.getDate()} ${now.toLocaleDateString('en-GB', { month: 'short' })}` : '27 Sept';

  const fade = 'transition-colors duration-700';

  return (
    <div>
      <div
        role="img"
        aria-label="Dino Minimalist Launcher home screen: a stacked clock above a plain text list of apps, cycling through dark, light, red and sand themes"
        className="relative mx-auto w-[290px] rounded-[50px] bg-[#111] p-[10px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.35),0_0_0_1px_rgba(0,0,0,0.08)] sm:w-[360px] sm:rounded-[58px] sm:p-3"
      >
        {/* Side buttons */}
        <span className="absolute -left-[3px] top-[22%] h-12 w-[3px] rounded-l bg-[#222]" />
        <span className="absolute -right-[3px] top-[28%] h-20 w-[3px] rounded-r bg-[#222]" />

        <div
          aria-hidden="true"
          className={`relative aspect-[891/2000] w-full overflow-hidden rounded-[40px] [container-type:inline-size] sm:rounded-[46px] ${fade}`}
          style={{ background: theme.bg, fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {/* Camera punch-hole */}
          <span className="absolute left-1/2 top-[1.6%] h-[3.4cqw] w-[3.4cqw] -translate-x-1/2 rounded-full bg-black" />

          {/* Stacked clock: hours over minutes, date and a rolling seconds wheel beside them */}
          <div className="absolute inset-x-0 top-[10.6%] flex justify-center gap-[4cqw]">
            <div className={`text-[10.8cqw] font-bold leading-[1.22] tracking-[-0.02em] tabular-nums ${fade}`} style={{ color: theme.accent }}>
              <div>{hours}</div>
              <div>{minutes}</div>
            </div>
            <div className="flex flex-col justify-between pb-[1.6cqw] pt-[1.4cqw]">
              <div className={`text-[3.5cqw] leading-[1.3] ${fade}`} style={{ color: theme.fg, opacity: 0.85 }}>
                <div>{weekday},</div>
                <div>{day}</div>
              </div>
              <div className="h-[11.4cqw] overflow-hidden text-[3.3cqw] leading-[3.8cqw] tabular-nums">
                <div key={second} className="motion-safe:animate-roll">
                  <div className={fade} style={{ color: theme.fg, opacity: 0.22 }}>{pad((second + 59) % 60)}</div>
                  <div className={`font-medium ${fade}`} style={{ color: theme.accent }}>{pad(second)}</div>
                  <div className={fade} style={{ color: theme.fg, opacity: 0.22 }}>{pad((second + 1) % 60)}</div>
                </div>
              </div>
            </div>
          </div>

          {/* App list */}
          <ul className="absolute inset-x-0 top-[45.6%] space-y-[4.25cqw] pl-[7.4cqw] pr-[7.9cqw]" style={{ fontFamily: "'Inter Variable', sans-serif" }}>
            {APPS.map((app) => (
              <li key={app.name} className="flex items-center leading-[4.4cqw]">
                <span className={`mr-[3.8cqw] h-[0.9cqw] w-[0.9cqw] rounded-full ${fade}`} style={{ background: theme.muted }} />
                <span className={`text-[3.8cqw] ${app.folder ? 'font-bold' : ''} ${fade}`} style={{ color: theme.fg }}>
                  {app.name}
                </span>
                {app.usage && (
                  <span className={`ml-auto text-[2.1cqw] tracking-[0.04em] ${fade}`} style={{ color: theme.muted }}>
                    {app.usage}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Battery pill */}
          <div
            className={`absolute left-1/2 top-[91.9%] flex h-[3.8cqw] w-[8cqw] -translate-x-1/2 items-center justify-center gap-[0.6cqw] rounded-full text-[2cqw] ${fade}`}
            style={{ background: theme.pillBg, color: theme.pillFg, fontFamily: "'Doto', monospace" }}
          >
            <svg viewBox="0 0 10 16" className="h-[1.8cqw] w-[1.2cqw]" fill="currentColor">
              <path d="M6 0 0 9h4l-1 7 7-10H6l1-6z" />
            </svg>
            <span className="font-bold">34</span>
          </div>

          {/* Gesture bar */}
          <span className={`absolute bottom-[1.1%] left-1/2 h-[0.8cqw] w-[26cqw] -translate-x-1/2 rounded-full ${fade}`} style={{ background: theme.bar }} />
        </div>
      </div>

      <div className="mt-10 flex justify-center gap-5 text-[14px] font-semibold" aria-hidden="true">
        {THEMES.map((t, i) => (
          <span key={t.id} className={`transition-colors duration-500 ${i === themeIndex ? 'text-black' : 'text-neutral-500'}`}>
            {t.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PhoneMockup;
