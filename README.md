# Personal Website

[简体中文](README.zh.md) | [English](README.md)

Live site: https://adamchen566.github.io/jiashaochen.github.io/

![Site preview](assets/img/review.jpg)

## About

Personal website of Jiashao Chen (陈佳绍): Master of Information Technology (Artificial Intelligence) student at the University of Melbourne, software engineer and indie developer.

## Features

- Chinese / English switch (follows the browser language on the first visit)
- Responsive layout for phone, tablet and desktop
- Products section (Mianyu, Lijie) with real status labels and a product page
- Projects with status labels and detail pages
- Resume download in Chinese or English, following the page language

## Tech stack

- Static HTML, CSS and JavaScript, no build step
- Bootstrap 5, with AOS, GLightbox, Isotope, Swiper and Typed.js in `assets/vendor`
- Hosted on GitHub Pages

## Structure

| Path | Contents |
|---|---|
| `index.html` | The single main page |
| `products/` | One page per product |
| `portfolio-details/` | One page per project |
| `resume/` | Resume source (HTML + CSS); the PDFs live in `assets/resume/` |
| `assets/js/i18n.js` | All Chinese and English text of the main page |
| `assets/js/main.js` | Page behaviour (menu, typing effect, lightbox, sliders) |
| `assets/css/main.css` | Styles |
| `assets/img/` | Images |

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

## Rebuild the resume PDFs

Edit `resume/zh.html` or `resume/en.html`, serve the folder locally (see above), then print each page to PDF with headless Chrome:

```bash
chrome --headless=new --no-pdf-header-footer --print-to-pdf=assets/resume/Jiashao-Chen-Resume-zh.pdf http://localhost:8000/resume/zh.html
```

## Projects

- [VCT matches to iCal](https://github.com/Adamchen566/VCT-matches-to-iCal): crawls Valorant match schedules and publishes a subscription calendar
- [Shadow Taxi](https://github.com/Adamchen566/ShadowTaxi): a taxi simulation game in Java

## Contact

- Email: 205637794@qq.com · xhl566@gmail.com
- LinkedIn: [Jiashao Chen](https://www.linkedin.com/in/%E4%BD%B3%E7%BB%8D-%E9%99%88-5950ba347/)

## Credits

Built on the [iPortfolio](https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/) template by BootstrapMade, used under its [license](https://bootstrapmade.com/license/).
