# Dino Minimalist Launcher

[![Get it on Google Play](https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png)](https://play.google.com/store/apps/details?id=com.dino.simple&pcampaignid=web_share)

**Website:** [minimalistlauncher.com](https://minimalistlauncher.com) · **Guides:** [How to reduce screen time on Android](https://minimalistlauncher.com/guides/reduce-screen-time-on-android) · [How to change your default launcher](https://minimalistlauncher.com/guides/set-default-launcher-android)

Dino Minimalist Launcher (formerly Simple Launcher) is a minimalist Android launcher designed to help you reduce screen time and boost focus. With a distraction-free, clutter-free interface, it offers complete customisation without compromising on Minimalist UI & simplicity & performance.

## Key Features

- **Distraction-Free Home Screen**: A clean and minimalist text-based interface with no clutter, no distractions – just the apps you need.
- **Lightweight and Fast**: Optimised for speed and performance. No ads, no bloatware, just pure efficiency.
- **Highly Customisable**:
    - Pin your favourite or most-used apps to the home screen.
    - Hide apps if you need to.
    - Adjust the number, order, alignment, spacing, and font size of apps.
    - Change fonts to suit your style, from standard to dotted Nothing-like fonts, retro or fancy fonts, and standard fonts.
- **Widget Customisation**: Option to hide the clock widget for an even cleaner look.

## Custom Color Themes

Simple Launcher Minimalist offers a variety of themes to match your aesthetic and minimalist preferences:

- **Material Theme**: Perfect for stock Android and Pixel fans, this theme dynamically extracts colours from your wallpaper for a vibrant Material You-inspired experience.
- **Nothing Dark & Light Themes**: For Nothing Phone enthusiasts, enjoy a sleek Nothing Launcher-like feel with dotted fonts.
- **Valorant Dark & Light Themes**: Gamers can immerse themselves in the Valorant universe with themed fonts and visuals.
- **Clash of Clans Theme**: Bring the iconic gaming vibe to your home screen.
- **Monochrome Theme**: Ideal for those who prefer low-contrast, minimalist visuals.
- **Normal Light & Dark Themes**: Classic options for a clean, timeless look.

## Community

- **Roadmap**: [View Roadmap](https://puzzle-kettle-30f.notion.site/Simple-Launcher-182b8c4aae1f80d8941df2086b1caf73)
- **Website**: [minimalistlauncher.com](https://minimalistlauncher.com)
- **Socials**: [https://linktr.ee/simple.launcher](https://linktr.ee/simple.launcher)
- **WhatsApp Community**: Join our WhatsApp Community for exclusive updates and discussions.

---

*The Best Minimalist launcher made for android ever.*

## Working on the site

```sh
npm ci
npm run dev     # local dev server
npm run build   # client build, SSR build, then scripts/prerender.js writes one HTML file per page
npm run lint
```

- Pages are listed in `src/routes.tsx`. Each non-home page gets its own title, description, canonical URL and structured data swapped into the `index.html` template at build time.
- To add a guide, add an entry to `src/content/guides.ts` and its URL to `public/sitemap.xml`. In guide text, `[label](href)` becomes a link.
- Deployed on Vercel; `vercel.json` holds the www → apex redirect, caching and security headers.
