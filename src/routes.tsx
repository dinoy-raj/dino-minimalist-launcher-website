// The page table, not a component module: its entries hold render functions.
/* eslint-disable react-refresh/only-export-components */
import App from './App.tsx';
import { GUIDES, guideUrl } from './content/guides';
import { SITE_URL } from './content/site';
import GuidePage from './pages/GuidePage';
import GuidesIndex from './pages/GuidesIndex';

const ORIGIN = SITE_URL.replace(/\/$/, '');
const ORG = { '@id': `${SITE_URL}#organization` };

/**
 * A prerendered page. `file` is its path under dist/ (Vercel's cleanUrls serves guides.html at
 * /guides). Pages with `head` get their title, description, canonical, social tags and structured
 * data swapped into the index.html template; the home page keeps the template's own.
 */
export type Page = {
  path: string;
  file: string;
  render: () => JSX.Element;
  head?: { title: string; description: string; ogType: 'website' | 'article'; jsonLd: object };
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

export const PAGES: Page[] = [
  { path: '/', file: 'index.html', render: () => <App /> },
  {
    path: '/guides',
    file: 'guides.html',
    render: () => <GuidesIndex />,
    head: {
      title: 'Guides to a Calmer Phone – Dino Minimalist Launcher',
      description:
        'Practical guides to reducing screen time on Android and setting up a minimalist home screen, from the makers of Dino Minimalist Launcher.',
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
            hasPart: GUIDES.map((g) => ({ '@type': 'Article', headline: g.h1, url: `${ORIGIN}${guideUrl(g.slug)}` })),
          },
          breadcrumbs([
            { name: 'Home', path: '/' },
            { name: 'Guides', path: '/guides' },
          ]),
        ],
      },
    },
  },
  ...GUIDES.map(
    (g): Page => ({
      path: guideUrl(g.slug),
      file: `guides/${g.slug}.html`,
      render: () => <GuidePage guide={g} />,
      head: {
        title: g.title,
        description: g.description,
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
              image: `${ORIGIN}/og-image.png`,
              mainEntityOfPage: `${ORIGIN}${guideUrl(g.slug)}`,
              inLanguage: 'en',
              author: { '@type': 'Person', name: 'Dinoy Raj', url: 'https://linktr.ee/dinoyraj' },
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
    })
  ),
];

/** The page for a URL path; unknown paths fall back to the home page (Vercel serves 404.html first). */
export const pageFor = (path: string) => {
  const clean = path.length > 1 ? path.replace(/\/+$/, '').replace(/\.html$/, '') : path;
  return PAGES.find((p) => p.path === clean) ?? PAGES[0];
};
