import React, { useEffect, useRef, useState } from 'react';

/**
 * A large statement whose words darken from grey to black as it scrolls
 * through the viewport.
 */
const RevealText: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);
  const words = text.split(' ');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1);
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the top enters the lower 85% of the viewport, 1 when the bottom reaches 55%.
      const start = vh * 0.85;
      const end = vh * 0.55;
      const p = (start - rect.top) / (rect.height + start - end);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const lit = Math.round(progress * words.length);

  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="transition-colors duration-300"
          style={{ color: i < lit ? '#000' : '#d4d4d4' }}
        >
          {word}{' '}
        </span>
      ))}
    </p>
  );
};

export default RevealText;
