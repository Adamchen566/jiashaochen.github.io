# Personal Website

[简体中文](README.zh.md) | [English](README.md)

Live site: https://adamchen566.github.io/jiashaochen.github.io/

![Site preview](public/assets/img/review.jpg)

## About

Personal website of Jiashao Chen (陈佳绍): Master of Information Technology (Artificial Intelligence) student at the University of Melbourne, software engineer and indie developer.

## Features

- Chinese pages at `/`, English pages at `/en/`, all rendered at build time so the text is in the HTML
- Products section (Mianyu, Lijie) with real status labels and a product page
- Projects with status labels and a detail page each
- Resume download in Chinese or English
- Dark theme in the Amber Night (琥珀夜色) palette: follows the system setting on the first visit, then remembers the choice
- Book list drawn as a shelf
- Readable without JavaScript; no requests to third-party domains

## Tech stack

- [Astro](https://astro.build) static site, no client-side framework
- Bootstrap 5, with AOS, GLightbox, Isotope, Swiper and Typed.js served from `public/assets/vendor`
- Hosted on GitHub Pages, deployed by GitHub Actions

## Structure

| Path | Contents |
|---|---|
| `src/i18n/zh.json`, `src/i18n/en.json` | All text of the home page |
| `src/components/Home.astro` | Home page sections |
| `astro.config.mjs` (`company`) | Product pages live on the studio site, https://jiashao.tech (repo `D:\zhiji-site`); old product URLs redirect there |
| `src/data/projects.ts` | Project detail pages: one entry per project, both languages |
| `src/data/books.ts` | Book list |
| `src/layouts/Base.astro` | Head, sidebar, footer, scripts |
| `src/pages/` | Routes; `en/` mirrors the Chinese pages |
| `public/assets/` | CSS, JS, images, video, resume PDFs |
| `public/resume/` | Resume source (HTML + CSS) |

## Common edits

| I want to | Edit |
|---|---|
| Change wording on the home page | `src/i18n/zh.json` and `src/i18n/en.json` |
| Add a project detail page | Add an entry to `src/data/projects.ts`, images go in `public/assets/img/portfolio/` |
| Add a product or project card on the home page | `src/components/Home.astro` plus its text keys in both JSON files |
| Add a book | Add an entry to `src/data/books.ts` |
| Update the resume | `public/resume/zh.html`, `public/resume/en.html`, then rebuild the PDFs |

## Run locally

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

`npm run preview` serves the built site at `http://localhost:4321/jiashaochen.github.io/`.

## Rebuild the resume PDFs

With `npm run preview` running, print each page to PDF with headless Chrome:

```bash
chrome --headless=new --no-pdf-header-footer --print-to-pdf=public/assets/resume/Jiashao-Chen-Resume-zh.pdf http://localhost:4321/jiashaochen.github.io/resume/zh.html
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages. In the repository settings, Pages → Build and deployment → Source must be set to **GitHub Actions**.

To build for a server with its own domain:

```bash
SITE_URL=https://example.com SITE_BASE=/ npm run build
```

Then upload `dist/`.

## Contact

- Email: 205637794@qq.com · xhl566@gmail.com
- LinkedIn: [Jiashao Chen](https://www.linkedin.com/in/%E4%BD%B3%E7%BB%8D-%E9%99%88-5950ba347/)

## Credits

Built on the [iPortfolio](https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/) template by BootstrapMade, used under its [license](https://bootstrapmade.com/license/).
