import React from 'react';
import { PLAY_URL } from '../content/site';

const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
  </svg>
);

const DownloadButton: React.FC<{ size?: 'lg' | 'sm' }> = ({ size = 'lg' }) => (
  <a
    href={PLAY_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={
      size === 'lg'
        ? 'inline-flex items-center gap-3 rounded-[18px] bg-black px-7 py-[18px] text-[17px] font-semibold text-white transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]'
        : 'inline-flex items-center gap-2 rounded-full bg-black px-4 py-[10px] text-[14px] font-semibold text-white transition-transform duration-200 hover:scale-[1.03]'
    }
  >
    <PlayIcon className={size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'} />
    {size === 'lg' ? 'Get it on Google Play' : 'Download'}
  </a>
);

export default DownloadButton;
