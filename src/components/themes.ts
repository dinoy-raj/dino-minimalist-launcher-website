export type PhoneTheme = {
  id: string;
  name: string;
  bg: string;
  fg: string;
  muted: string;
  font: string;
  upper?: boolean;
};

export const THEMES: PhoneTheme[] = [
  { id: 'light', name: 'Light', bg: '#ffffff', fg: '#0a0a0a', muted: '#a3a3a3', font: "'Inter', sans-serif" },
  { id: 'dark', name: 'Dark', bg: '#0a0a0a', fg: '#fafafa', muted: '#6b6b6b', font: "'Inter', sans-serif" },
  { id: 'nothing', name: 'Nothing', bg: '#000000', fg: '#ffffff', muted: '#ff3b30', font: "'Doto', monospace", upper: true },
  { id: 'serif', name: 'Paper', bg: '#f4efe6', fg: '#2b2620', muted: '#9c907f', font: "'Instrument Serif', serif" },
  { id: 'mono', name: 'Mono', bg: '#e9e9e9', fg: '#3a3a3a', muted: '#9a9a9a', font: "'JetBrains Mono', monospace" },
];
