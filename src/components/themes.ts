/** Colours sampled from the launcher's own stacked-clock home screen in each theme. */
export type PhoneTheme = {
  id: string;
  name: string;
  bg: string;
  /** Clock digits and the current second. */
  accent: string;
  /** App labels and the date. */
  fg: string;
  /** Bullets and usage times. */
  muted: string;
  pillBg: string;
  pillFg: string;
  /** The gesture bar at the bottom of the screen. */
  bar: string;
};

export const THEMES: PhoneTheme[] = [
  { id: 'dark', name: 'Dark', bg: '#000000', accent: '#ffffff', fg: '#ffffff', muted: '#8c8c8c', pillBg: '#3a3a3a', pillFg: '#ffffff', bar: '#ffffff' },
  { id: 'light', name: 'Light', bg: '#ffffff', accent: '#000000', fg: '#111111', muted: '#8c8c8c', pillBg: '#3a3a3a', pillFg: '#ffffff', bar: '#555555' },
  { id: 'red', name: 'Red', bg: '#000000', accent: '#df1c25', fg: '#ffffff', muted: '#8c8c8c', pillBg: '#262626', pillFg: '#df1c25', bar: '#ffffff' },
  { id: 'sand', name: 'Sand', bg: '#f2e9d8', accent: '#b6662f', fg: '#4a3826', muted: '#a39684', pillBg: '#6b5440', pillFg: '#f2e9d8', bar: '#5c4a38' },
];
