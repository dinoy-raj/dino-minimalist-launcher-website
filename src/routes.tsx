// The page table, not a component module: its entries hold render functions.
/* eslint-disable react-refresh/only-export-components */
import App from './App.tsx';
import { GUIDES, guideUrl } from './content/guides';
import {
  APP_NAME,
  AUTHOR_URL,
  COMMUNITY_URL,
  FEATURES,
  HOME_HEAD,
  HOME_UPDATED,
  PLAY_URL,
  RATING,
  SCREENSHOTS,
  SITE_URL,
} from './content/site';
import GuidePage from './pages/GuidePage';
import GuidesIndex from './pages/GuidesIndex';

const ORIGIN = SITE_URL.replace(/\/$/, '');
const ORG_ID = `${SITE_URL}#organization`;
const ORG = { '@id': ORG_ID };
const STORE_URL = PLAY_URL.split('&')[0];
const OG_IMAGE = `${ORIGIN}/og-image.png`;

/**
 * A prerendered page. `file` is its path under dist/ (Vercel's cleanUrls serves guides.html at
 * /guides). scripts/prerender.js writes each page's head (title, description, canonical, robots,
 * social tags, structured data) from `head`, and its sitemap entry from `lastmod` and `images`.
 */
export type Page = {
  path: string;
  file: string;
  render: () => JSX.Element;
  head: {
    title: string;
    description: string;
    /** Open Graph / X description, when it should differ from the search description. */
    social?: string;
    imageAlt: string;
    ogType: 'website' | 'article';
    jsonLd: object;
    /** Preload the hero icon: only the home page shows it above the fold. */
    preloadIcon?: boolean;
  };
  /** Date of the last significant content change (YYYY-MM-DD), for the sitemap. */
  lastmod: string;
  /** Images worth listing in the image sitemap. */
  images?: string[];
  /** Article dates, for article:published_time / modified_time. */
  article?: { published: string; updated: string };
};

const breadcrumbs = (items: { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: `${ORIGIN}${item.path}`,
  })),
});

const AUTHOR = { '@type': 'Person', name: 'Dinoy Raj', url: AUTHOR_URL };
const SCREENSHOT_URLS = SCREENSHOTS.map((s) => `${ORIGIN}${s.src}`);

const ORGANIZATION = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: APP_NAME,
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: `${ORIGIN}/icon-512.png`, width: 512, height: 512 },
  founder: AUTHOR,
  sameAs: [STORE_URL, COMMUNITY_URL],
};

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    ORGANIZATION,
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}#website`,
      name: APP_NAME,
      alternateName: ['Dino Launcher', 'Minimalist Launcher', 'Simple Launcher'],
      url: SITE_URL,
      inLanguage: 'en',
      publisher: ORG,
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}#webpage`,
      url: SITE_URL,
      name: HOME_HEAD.title,
      description: HOME_HEAD.description,
      isPartOf: { '@id': `${SITE_URL}#website` },
      about: { '@id': `${SITE_URL}#app` },
      mainEntity: { '@id': `${SITE_URL}#app` },
      primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
      dateModified: HOME_UPDATED,
      inLanguage: 'en',
    },
    {
      '@type': 'MobileApplication',
      '@id': `${SITE_URL}#app`,
      name: APP_NAME,
      alternateName: ['Dino Launcher', 'Simple Launcher: Minimalist'],
      description: HOME_HEAD.description,
      url: SITE_URL,
      image: `${ORIGIN}/icon-512.png`,
      screenshot: SCREENSHOT_URLS,
      featureList: FEATURES.map((f) => f.title),
      keywords: 'minimalist launcher, minimal launcher, Android launcher, text launcher, screen time, focus',
      publisher: ORG,
      author: AUTHOR,
      applicationCategory: 'LifestyleApplication',
      applicationSubCategory: 'Launcher',
      operatingSystem: 'Android 8.0 or later',
      installUrl: STORE_URL,
      downloadUrl: STORE_URL,
      sameAs: [STORE_URL],
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: RATING.value,
        ratingCount: String(RATING.count),
        bestRating: '5',
      },
    },
  ],
};

const guidesUpdated = GUIDES.map((g) => g.updated).sort().reverse()[0];

export const PAGES: Page[] = [
  {
    path: '/',
    file: 'index.html',
    render: () => <App />,
    head: { ...HOME_HEAD, ogType: 'website', jsonLd: homeJsonLd, preloadIcon: true },
    lastmod: HOME_UPDATED,
    images: ['/og-image.png', ...SCREENSHOTS.map((s) => s.src)],
  },
  {
    path: '/guides',
    file: 'guides.html',
    render: () => <GuidesIndex />,
    head: {
      title: 'Minimalist Launcher Guides: A Calmer Android Phone | Dino',
      description:
        'Practical guides to minimalist launchers, reducing screen time on Android and setting up a minimal home screen, from the makers of Dino Minimalist Launcher.',
      imageAlt: HOME_HEAD.imageAlt,
      ogType: 'website',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'CollectionPage',
            '@id': `${ORIGIN}/guides#webpage`,
            url: `${ORIGIN}/guides`,
            name: 'Guides to a calmer phone',
            isPartOf: { '@id': `${SITE_URL}#website` },
            publisher: ORG,
            inLanguage: 'en',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: GUIDES.map((g, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: g.h1,
                url: `${ORIGIN}${guideUrl(g.slug)}`,
              })),
            },
          },
          breadcrumbs([
            { name: 'Home', path: '/' },
            { name: 'Guides', path: '/guides' },
          ]),
        ],
      },
    },
    lastmod: guidesUpdated,
  },
  ...GUIDES.map(
    (g): Page => ({
      path: guideUrl(g.slug),
      file: `guides/${g.slug}.html`,
      render: () => <GuidePage guide={g} />,
      head: {
        title: g.title,
        description: g.description,
        imageAlt: HOME_HEAD.imageAlt,
        ogType: 'article',
        jsonLd: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Article',
              '@id': `${ORIGIN}${guideUrl(g.slug)}#article`,
              headline: g.h1,
              description: g.description,
              datePublished: g.published,
              dateModified: g.updated,
              image: OG_IMAGE,
              mainEntityOfPage: `${ORIGIN}${guideUrl(g.slug)}`,
              isPartOf: { '@id': `${SITE_URL}#website` },
              about: { '@id': `${SITE_URL}#app` },
              inLanguage: 'en',
              author: AUTHOR,
              publisher: ORG,
            },
            breadcrumbs([
              { name: 'Home', path: '/' },
              { name: 'Guides', path: '/guides' },
              { name: g.h1, path: guideUrl(g.slug) },
            ]),
          ],
        },
      },
      lastmod: g.updated,
      article: { published: g.published, updated: g.updated },
    })
  ),
];

/** The page for a URL path; unknown paths fall back to the home page (Vercel serves 404.html first). */
export const pageFor = (path: string) => {
  const clean = path.length > 1 ? path.replace(/\/+$/, '').replace(/\.html$/, '') : path;
  return PAGES.find((p) => p.path === clean) ?? PAGES[0];
};
