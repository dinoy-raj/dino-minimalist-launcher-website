import React from 'react';

/**
 * A dark rounded tile that sits inline inside a headline, sized to the text. It is decoration, so
 * it is hidden from screen readers, and the hidden spaces either side keep the heading's text
 * (what search engines index) reading as separate words: "launcher that", not "launcherthat".
 */
const Glyph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <span className="sr-only"> </span>
    <span
      aria-hidden="true"
      className="inline-flex items-center justify-center align-middle mx-[0.12em] -mt-[0.12em] w-[0.82em] h-[0.82em] rounded-[0.24em] bg-black text-white"
    >
      <span className="w-[0.5em] h-[0.5em] flex">{children}</span>
    </span>
    <span className="sr-only"> </span>
  </>
);

export default Glyph;
