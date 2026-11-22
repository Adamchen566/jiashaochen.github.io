import { defineConfig } from 'astro/config';

// GitHub Pages serves this repo under /jiashaochen.github.io/.
// On a server with its own domain, build with SITE_URL and SITE_BASE set, for example:
//   SITE_URL=https://jiashao.tech SITE_BASE=/ npm run build
const site = process.env.SITE_URL ?? 'https://adamchen566.github.io';
const base = process.env.SITE_BASE ?? '/jiashaochen.github.io';

// Product pages moved to the studio site on 2026-11-22.
const company = 'https://jiashao.tech';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  // Old URLs from the hand-written site. Astro does not add the base to redirect targets.
  redirects: {
    '/products/mianyu': `${company}/mianyu/`,
    '/products/mianyu.html': `${company}/mianyu/`,
    '/en/products/mianyu': `${company}/mianyu/`,
    ...Object.fromEntries(
      Object.entries({
        '/portfolio-details/opensource1.html': 'projects/vct-calendar/',
        '/portfolio-details/course1.html': 'projects/bookstore-analysis/',
        '/portfolio-details/course2.html': 'projects/ogre-database/',
        '/portfolio-details/course3.html': 'projects/shadow-taxi/',
        '/portfolio-details/work1.html': 'projects/commbank-job-simulation/',
        '/books': '#books',
        '/en/books': 'en/#books',
      }).map(([from, to]) => [from, `${base.replace(/\/+$/, '')}/${to}`]),
    ),
  },
});
