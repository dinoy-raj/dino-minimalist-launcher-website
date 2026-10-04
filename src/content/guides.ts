// Long-form guides. Each one is prerendered to its own URL (/guides/<slug>) with its own title,
// description and structured data. In body text, [label](href) becomes a link.

export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  /** Rendered as an ordered list. */
  steps?: string[];
  /** Rendered as a bulleted list. */
  bullets?: string[];
};

export type Guide = {
  slug: string;
  /** The <title> and the card heading on /guides. */
  title: string;
  h1: string;
  description: string;
  published: string;
  updated: string;
  readingMinutes: number;
  intro: string[];
  sections: GuideSection[];
};

export const GUIDES: Guide[] = [
  {
    slug: 'reduce-screen-time-on-android',
    title: 'How to Reduce Screen Time on Android: 9 Steps That Work',
    h1: 'How to reduce screen time on Android',
    description:
      'Nine practical steps to cut screen time on Android: measure it, tame notifications, set app timers, go grayscale and use a minimalist launcher.',
    published: '2026-10-04',
    updated: '2026-10-04',
    readingMinutes: 6,
    intro: [
      'Most screen time is not a decision. It is a reflex: you unlock the phone to check one thing, a bright icon or a red badge catches your eye, and twenty minutes go somewhere you did not choose.',
      'The fix is less about willpower and more about changing what the phone puts in front of you. These nine steps start with what Android already gives you and finish with the home screen itself, which is where most of those reflexes begin.',
    ],
    sections: [
      {
        heading: '1. Measure it first',
        paragraphs: [
          'Open Settings and look for Digital Wellbeing (on most phones it is “Digital Wellbeing & parental controls”). The dashboard shows today’s screen time, how many times you unlocked the phone and which apps sent the most notifications.',
          'Note your daily average for a few days before changing anything. One or two apps usually account for most of it, and those are where every later step pays off.',
        ],
      },
      {
        heading: '2. Turn off notifications you did not ask for',
        paragraphs: [
          'Every notification is an invitation to unlock the phone. Go to Settings → Notifications → App notifications and switch off everything that is not from a person or about something time-sensitive. Shopping, games, news and social “someone posted” alerts are the usual suspects.',
          'You can also long-press any notification as it arrives and turn that app’s notifications off right there.',
        ],
      },
      {
        heading: '3. Set app timers for your top two apps',
        paragraphs: [
          'In Digital Wellbeing, tap an app on the dashboard and set a daily timer. When the time is up, the app is paused for the rest of the day and its icon turns grey. Start with a limit a little below your current average so it feels achievable.',
        ],
      },
      {
        heading: '4. Schedule Focus mode and Bedtime mode',
        paragraphs: [
          'Focus mode pauses the apps you pick while it is on, and you can schedule it for work or study hours. Bedtime mode can switch the screen to grayscale and turn on Do Not Disturb at night. The names and exact options vary a little between phone makers, but both live in Digital Wellbeing on most Android phones.',
        ],
      },
      {
        heading: '5. Try grayscale during the day',
        paragraphs: [
          'Colour is a big part of what makes apps feel rewarding. Turning the screen grey makes them noticeably less tempting. Besides Bedtime mode, many phones offer it under Settings → Accessibility → Color correction (Grayscale). Try it for a day and see how often you still reach for the phone.',
        ],
      },
      {
        heading: '6. Move distracting apps off the home screen',
        paragraphs: [
          'Anything on your home screen gets opened on autopilot. Keep only tools there (phone, messages, camera, maps, calendar) and leave social media, video and games in the app drawer, where opening them takes a deliberate search.',
        ],
      },
      {
        heading: '7. Switch to a minimalist launcher',
        paragraphs: [
          'A launcher is the app that draws your home screen. A minimalist launcher replaces the grid of colourful icons with a short, text-only list of the apps you choose, so there is nothing on screen designed to catch your eye.',
          '[Dino Minimalist Launcher](/) is built for exactly this: a calm, text-first home screen, hidden apps, and themes and fonts so it still feels like yours. It is free on Google Play and has no ads. Switching takes about a minute, and you can switch back at any time; see [how to set a default launcher on Android](/guides/set-default-launcher-android).',
        ],
      },
      {
        heading: '8. Add friction before the apps that pull you in',
        paragraphs: [
          'The most effective change is a small pause between the reflex and the app. Dino’s tools are built around that:',
        ],
        bullets: [
          'Mindful pause: a short pause before the apps you pick, so you open them on purpose instead of on reflex.',
          'App and site blocker: block the apps and websites that pull you in during the hours you choose.',
          'Notification filter: hold back noisy notifications and let the ones from people through.',
          'Usage stats: see where your screen time goes, app by app and day by day, without leaving the launcher.',
        ],
      },
      {
        heading: '9. Review once a week',
        paragraphs: [
          'Check your weekly screen time every Sunday. If a timer feels too tight, loosen it; if an app has crept back, move it further away. The goal is a phone you pick up on purpose, not a perfect number.',
        ],
      },
    ],
  },
  {
    slug: 'set-default-launcher-android',
    title: 'How to Change the Default Launcher on Android (and Switch Back)',
    h1: 'How to change your default launcher on Android',
    description:
      'Step-by-step: set a new home screen launcher on Pixel, Samsung, Xiaomi, OnePlus and other Android phones, switch back any time, and fix common problems.',
    published: '2026-10-04',
    updated: '2026-10-04',
    readingMinutes: 4,
    intro: [
      'Your launcher is the app that shows your home screen and app list. Android lets you replace it with any launcher from Google Play, such as a minimalist launcher, and go back to the original whenever you like. Changing it does not delete apps, photos or data.',
      'These steps use [Dino Minimalist Launcher](/) as the example, but they work for any launcher.',
    ],
    sections: [
      {
        heading: 'The quickest way',
        steps: [
          'Install Dino Minimalist Launcher from Google Play.',
          'Press the Home button, or swipe up from the bottom edge if you use gesture navigation.',
          'If Android asks which app to use for Home, choose Dino and tap Always.',
        ],
        paragraphs: [
          'Not every phone asks. If yours goes straight to the old home screen, use the Settings route below.',
        ],
      },
      {
        heading: 'From Settings (Pixel and most Android phones)',
        steps: [
          'Open Settings → Apps.',
          'Tap Default apps.',
          'Tap Home app and choose Dino.',
        ],
      },
      {
        heading: 'Samsung Galaxy',
        steps: [
          'Open Settings → Apps.',
          'Tap Choose default apps (called Default apps on some versions).',
          'Tap Home app and choose Dino.',
        ],
      },
      {
        heading: 'Xiaomi, Redmi and POCO',
        steps: [
          'Open Settings → Apps.',
          'Look for Default apps (on some versions it is under Manage apps or the menu in its top corner).',
          'Tap Home screen or Launcher and choose Dino.',
        ],
      },
      {
        heading: 'OnePlus, Motorola, Nothing and other phones',
        paragraphs: [
          'Menus move between Android versions and phone makers. The reliable shortcut is the search bar at the top of Settings: search for “Home app” or “default apps” and open the result.',
        ],
      },
      {
        heading: 'How to switch back',
        paragraphs: [
          'Go to the same Home app setting and pick your previous launcher, such as Pixel Launcher, One UI Home or System launcher. Uninstalling a launcher also returns you to the phone’s original one. Your apps and data are not touched either way.',
        ],
      },
      {
        heading: 'Troubleshooting',
        bullets: [
          'The phone keeps going back to the old launcher: make sure you chose Always, not Just once, or set it in Settings as above.',
          'Gesture navigation changed or stopped working: some phones, including some Xiaomi models, limit full-screen gestures with third-party launchers. Check Settings → System navigation (or Display → Navigation bar).',
          'Your old layout looks different when you switch back: the original launcher keeps its own layout, so it is still there when you return.',
        ],
      },
    ],
  },
];

export const guideUrl = (slug: string) => `/guides/${slug}`;
