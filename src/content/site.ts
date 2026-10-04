// Page copy that is shared between the rendered page and its structured data.

export const SITE_URL = 'https://minimalistlauncher.com/';
export const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.dino.simple&pcampaignid=web_share';
export const ROADMAP_URL = 'https://puzzle-kettle-30f.notion.site/Simple-Launcher-182b8c4aae1f80d8941df2086b1caf73';
export const COMMUNITY_URL = 'https://linktr.ee/simple.launcher';
export const AUTHOR_URL = 'https://linktr.ee/dinoyraj';

export const FEATURES: { title: string; body: string }[] = [
  {
    title: 'Text-first home screen',
    body: 'Your favourite apps as a clean list of words. No icon grid, no badges, no colour pulling at your eye.',
  },
  {
    title: 'Themes and fonts',
    body: '12+ themes, including Material You, Nothing-style dot fonts and monochrome, and 32+ fonts to choose from.',
  },
  {
    title: 'Minimal widgets',
    body: 'Clocks, date, battery, notes and countdowns, 22 quick-settings toggles and nine tiny games. Yes, one is a Dino run.',
  },
  {
    title: 'Focus tools',
    body: 'Habits, to-dos, notes, countdowns, meetings, saved links and a day timeline, built into the launcher.',
  },
  {
    title: 'App and site blocker',
    body: 'Block the apps and websites that pull you in, so the habit loop breaks before it starts.',
  },
  {
    title: 'Mindful pause',
    body: 'A short pause before the apps you pick, so you open them on purpose instead of on reflex.',
  },
  {
    title: 'Notification filter',
    body: 'Hold back the noisy notifications and let the ones that matter through.',
  },
  {
    title: 'Screen time insights',
    body: 'See where your screen time goes, app by app and day by day, and watch it come down.',
  },
];

export const FAQ: { q: string; a: string }[] = [
  {
    q: 'What is Dino Minimalist Launcher?',
    a: 'Dino is a minimalist launcher for Android: a minimal home screen that replaces the grid of colourful app icons with a calm, text-only list of the apps you choose. It is designed to reduce screen time and help you focus.',
  },
  {
    q: 'Is Dino the same app as Simple Launcher?',
    a: 'Yes. Dino Minimalist Launcher is the new name for Simple Launcher. It is the same app on the same Google Play listing, so your settings stay as they are.',
  },
  {
    q: 'Is Dino free? Does it have ads?',
    a: 'Dino is free to download on Google Play and has no ads.',
  },
  {
    q: 'Can a minimal launcher really reduce screen time?',
    a: 'A minimal launcher removes the bright icons and badges that invite mindless taps, so opening an app becomes a choice. Dino adds a mindful pause, an app and site blocker and usage insights so you can see the difference for yourself. More ideas in [how to reduce screen time on Android](/guides/reduce-screen-time-on-android).',
  },
  {
    q: 'Which phones does Dino work on?',
    a: 'Any phone running Android 8.0 (Oreo) or newer, including Pixel, Samsung, OnePlus, Nothing, Motorola and Xiaomi phones.',
  },
  {
    q: 'How do I set Dino as my default launcher, and switch back?',
    a: 'Install Dino from Google Play, press the Home button and choose Dino, or open Settings → Apps → Default apps → Home app. To switch back, pick your previous launcher in the same place. Your apps and data are not touched. See the [step-by-step guide for every phone brand](/guides/set-default-launcher-android).',
  },
  {
    q: 'Can I still customise a minimalist launcher?',
    a: 'Yes. Pin and reorder apps, hide apps from the list, change alignment, spacing and font size, pick from 12+ themes and 32+ fonts, and add only the widgets you want.',
  },
];

/** Real screenshots of the launcher, one per theme. Also listed in the sitemap and structured data. */
export const SCREENSHOTS: { src: string; theme: string; alt: string }[] = [
  {
    src: '/screenshots/dino-launcher-dark-theme.webp',
    theme: 'Dark',
    alt: 'Dino Minimalist Launcher home screen in the dark theme: a stacked clock above a plain text list of apps with screen time for each',
  },
  {
    src: '/screenshots/dino-launcher-light-theme.webp',
    theme: 'Light',
    alt: 'Dino Minimalist Launcher home screen in the light theme: black text on white with a stacked clock and app list',
  },
  {
    src: '/screenshots/dino-launcher-red-theme.webp',
    theme: 'Red',
    alt: 'Dino Minimalist Launcher home screen in the red theme: a red clock on black above a white text list of apps',
  },
  {
    src: '/screenshots/dino-launcher-sand-theme.webp',
    theme: 'Sand',
    alt: 'Dino Minimalist Launcher home screen in the sand theme: a warm beige background with a copper clock and brown app names',
  },
];
