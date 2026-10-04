import React from 'react';

/** A dark rounded tile that sits inline inside a headline, sized to the text. */
const Glyph: React.FC<{ children: React.ReactNode; label: string }> = ({ children, label }) => (
  <span
    role="img"
    aria-label={label}
    className="inline-flex items-center justify-center align-middle mx-[0.12em] -mt-[0.12em] w-[0.82em] h-[0.82em] rounded-[0.24em] bg-black text-white"
  >
    <span className="w-[0.5em] h-[0.5em] flex">{children}</span>
  </span>
);

export default Glyph;
