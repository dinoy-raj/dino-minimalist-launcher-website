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
    slug: 'what-is-a-minimalist-launcher',
    title: 'What Is a Minimalist Launcher? A Plain Guide to Minimal Launchers',
    h1: 'What is a minimalist launcher?',
    description:
      'A minimalist launcher replaces your Android home screen with a calm, text-only list of apps. What a minimal launcher does, who it helps, and how to choose one.',
    published: '2026-11-09',
    updated: '2026-11-09',
    readingMinutes: 5,
    intro: [
      'A minimalist launcher is an Android app that replaces your home screen with something much quieter: a short, plain-text list of the apps you choose, instead of a grid of colourful icons, widgets and red notification badges. You will also see it called a minimal launcher, a text launcher or a minimalist home screen. They all mean the same thing.',
      'The idea is simple. Most of what pulls you into your phone starts on the home screen. Take away the bright shapes and the badges, and opening an app becomes something you decide to do, not something that happens on autopilot.',
    ],
    sections: [
      {
        heading: 'What a launcher is',
        paragraphs: [
          'On Android, the launcher is the app that draws your home screen and app drawer. Your phone comes with one (Pixel Launcher, Samsung One UI Home and so on), but Android lets you replace it with any launcher from Google Play and switch back whenever you like. Changing the launcher does not touch your apps, photos or data; it only changes how they are shown to you.',
        ],
      },
      {
        heading: 'What a minimalist launcher changes',
        bullets: [
          'Words instead of icons: apps appear as a list of names in one font and one colour, so nothing competes for your attention.',
          'Only what you pick: you choose the handful of apps that sit on the home screen. Everything else stays one search away.',
          'No badges or feeds: no unread counters, no news cards, no suggested apps.',
          'Fewer, smaller widgets: usually a clock and date, sometimes battery, weather or a short to-do list.',
          'Monochrome or quiet themes: dark, light or a single accent colour, which makes the phone look less like a slot machine.',
        ],
      },
      {
        heading: 'Why people switch to a minimal launcher',
        paragraphs: [
          'The most common reason is screen time. Colourful icons and badges are designed to be noticed, and every glance is a chance to open something you did not plan to. A text-only home screen removes most of those cues, so people tend to unlock the phone, do the thing they came for and put it down.',
          'Other reasons are simpler: a cleaner look, a phone that feels faster, or wanting the same calm setup on every device. A minimal launcher is also a gentle step for anyone curious about digital minimalism who does not want to give up a smartphone.',
        ],
      },
      {
        heading: 'What to look for when choosing one',
        bullets: [
          'Fast search: with fewer apps on screen, you will open most apps by typing a few letters, so search has to be instant.',
          'Hide and pin apps: keep tools on the home screen and move distracting apps out of sight.',
          'Focus tools: a pause before distracting apps, an app blocker or usage stats make the calm last beyond the first week.',
          'Customisation that stays minimal: fonts, alignment and a few themes so it feels like yours without bringing the clutter back.',
          'No ads and light on battery: a launcher runs all day, so it should be small, fast and free of ads.',
          'Easy to undo: you should be able to switch back to your old home screen in a few taps.',
        ],
      },
      {
        heading: 'Dino Minimalist Launcher',
        paragraphs: [
          '[Dino Minimalist Launcher](/) is a free, ad-free minimalist launcher for Android 8.0 and newer. It gives you a text-first home screen with hidden and pinned apps, 12+ themes and 32+ fonts, minimal widgets, and focus tools built in: a mindful pause before the apps you choose, an app and site blocker, a notification filter and screen time insights.',
          'If you want to try it, [here is how to change your default launcher](/guides/set-default-launcher-android), and how to switch back. For more ways to use your phone less, see [how to reduce screen time on Android](/guides/reduce-screen-time-on-android).',
        ],
      },
    ],
  },
  {
    slug: 'minimal-launcher-vs-stock-launcher',
    title: 'Minimal Launcher vs Stock Launcher: What Actually Changes',
    h1: 'Minimal launcher vs stock launcher: what actually changes',
    description:
      'How a minimal launcher compares with your phone’s stock Android launcher for focus, speed, battery, widgets and customisation, and when each one makes sense.',
    published: '2026-11-09',
    updated: '2026-11-09',
    readingMinutes: 5,
    intro: [
      'Every Android phone ships with a stock launcher: Pixel Launcher on Pixel phones, One UI Home on Samsung, System Launcher on Xiaomi and so on. A minimal launcher, also called a minimalist launcher, replaces it with a plain-text home screen. Here is what actually changes when you switch, and what stays the same.',
    ],
    sections: [
      {
        heading: 'What stays the same',
        paragraphs: [
          'Your apps, notifications, settings, photos and accounts are untouched. Apps still open and work exactly as before, the notification shade and quick settings still come from Android, and you can go back to the stock launcher at any time from Settings → Apps → Default apps → Home app.',
        ],
      },
      {
        heading: 'The home screen',
        paragraphs: [
          'A stock launcher shows a grid of icons, folders and widgets, often with a news or discover feed one swipe away. A minimal launcher shows a short list of app names, usually with a clock and little else. The difference is mostly about what grabs your attention: icons, colours and badges on one side, plain words on the other.',
        ],
      },
      {
        heading: 'Focus and screen time',
        paragraphs: [
          'This is where a minimal launcher makes the biggest difference. Stock launchers are built to help you find and open apps quickly, which also makes it easy to open them without thinking. A minimal launcher adds a little friction: the apps you want to use less are not on screen, and many minimal launchers add tools such as a pause before an app opens, an app blocker or usage stats on the home screen.',
          'Android’s own Digital Wellbeing works with both. A minimal launcher simply puts those habits where you see them every time you unlock the phone.',
        ],
      },
      {
        heading: 'Speed, memory and battery',
        paragraphs: [
          'A text-only home screen draws less than a page of icons, live widgets and animated wallpapers, so a well-made minimal launcher tends to feel quick, even on older phones. Battery savings are real but modest; the bigger saving usually comes from opening the phone less often.',
        ],
      },
      {
        heading: 'Widgets and customisation',
        paragraphs: [
          'Stock launchers support every home screen widget and icon pack. Minimal launchers deliberately offer less: usually their own small widgets (clock, date, battery, notes) plus fonts, themes, alignment and spacing. If your home screen depends on large widgets, a stock launcher, or a minimal launcher that allows a few widgets, will suit you better.',
        ],
      },
      {
        heading: 'Which one should you use?',
        bullets: [
          'Choose a minimal launcher if you want to spend less time on your phone, like a calm look, or keep opening apps on reflex.',
          'Stay with the stock launcher if your home screen is built around big widgets, or you rely on features only your phone maker’s launcher offers.',
          'Not sure? Try a minimal launcher for a week. Switching takes a minute and switching back takes less.',
        ],
      },
      {
        heading: 'Try a minimal launcher',
        paragraphs: [
          '[Dino Minimalist Launcher](/) is a free, ad-free minimal launcher with themes, fonts, minimal widgets and focus tools built in. Start with [what a minimalist launcher is](/guides/what-is-a-minimalist-launcher), or go straight to [setting it as your default launcher](/guides/set-default-launcher-android).',
        ],
      },
    ],
  },
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
          'A launcher is the app that draws your home screen. A [minimalist launcher](/guides/what-is-a-minimalist-launcher) replaces the grid of colourful icons with a short, text-only list of the apps you choose, so there is nothing on screen designed to catch your eye.',
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
