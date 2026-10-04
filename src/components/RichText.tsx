import React from 'react';

const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Plain text in which [label](href) becomes a link; internal links stay in the tab. */
const RichText: React.FC<{ text: string }> = ({ text }) => {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    const [whole, label, href] = match;
    parts.push(text.slice(last, match.index));
    const external = /^https?:/.test(href);
    parts.push(
      <a
        key={match.index}
        href={href}
        className="font-medium text-black underline decoration-black/25 underline-offset-[3px] hover:decoration-black"
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {label}
      </a>
    );
    last = (match.index ?? 0) + whole.length;
  }
  parts.push(text.slice(last));
  return <>{parts}</>;
};

export default RichText;
