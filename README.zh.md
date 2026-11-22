# 个人网站

[简体中文](README.zh.md) | [English](README.md)

线上地址：https://adamchen566.github.io/jiashaochen.github.io/

![网站预览](public/assets/img/review.jpg)

## 关于

陈佳绍（Jiashao Chen）的个人网站：墨尔本大学信息技术硕士（人工智能方向）在读，软件工程师、独立开发者。

## 功能

- 中文页面在 `/`，英文页面在 `/en/`，都在构建时生成，文字直接写在 HTML 里
- 产品区（眠屿、力阶），标注真实进度，带产品详情页
- 项目区，标注状态，每个项目有详情页
- 简历下载，中文或英文
- 深色主题用“琥珀夜色”配色：第一次打开跟随系统设置，之后记住你的选择
- 书单页画成一排书脊
- 不开 JavaScript 也能看；不请求任何第三方域名

## 技术栈

- [Astro](https://astro.build) 静态站点，没有前端框架
- Bootstrap 5，以及 `public/assets/vendor` 里的 AOS、GLightbox、Isotope、Swiper、Typed.js
- 部署在 GitHub Pages，由 GitHub Actions 发布

## 目录

| 路径 | 内容 |
|---|---|
| `src/i18n/zh.json`、`src/i18n/en.json` | 首页的全部文字 |
| `src/components/Home.astro` | 首页各个区块 |
| `astro.config.mjs`（`company`） | 产品页已搬到知集软件官网 https://jiashao.tech（仓库 `D:\zhiji-site`），旧的产品页地址会跳转过去 |
| `src/data/projects.ts` | 项目详情页：每个项目一条，中英文都在里面 |
| `src/data/books.ts` | 书单 |
| `src/layouts/Base.astro` | 页头、侧栏、页脚、脚本 |
| `src/pages/` | 路由；`en/` 和中文页面一一对应 |
| `public/assets/` | 样式、脚本、图片、视频、简历 PDF |
| `public/resume/` | 简历源文件（HTML + CSS） |

## 常见修改

| 想做什么 | 改哪里 |
|---|---|
| 改首页的文字 | `src/i18n/zh.json` 和 `src/i18n/en.json` |
| 加一个项目详情页 | 在 `src/data/projects.ts` 里加一条，图片放 `public/assets/img/portfolio/` |
| 在首页加产品或项目卡片 | `src/components/Home.astro`，文字加到两个 JSON 文件里 |
| 加一本书 | 在 `src/data/books.ts` 里加一条 |
| 更新简历 | `public/resume/zh.html`、`public/resume/en.html`，然后重新生成 PDF |

## 本地运行

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

`npm run preview` 会在 `http://localhost:4321/jiashaochen.github.io/` 提供构建好的站点。

## 重新生成简历 PDF

先运行 `npm run preview`，再用无头 Chrome 把页面打印成 PDF：

```bash
chrome --headless=new --no-pdf-header-footer --print-to-pdf=public/assets/resume/Jiashao-Chen-Resume-zh.pdf http://localhost:4321/jiashaochen.github.io/resume/zh.html
```

## 部署

推送到 `main` 会运行 `.github/workflows/deploy.yml`，构建站点并把 `dist/` 发布到 GitHub Pages。仓库设置里 Pages → Build and deployment → Source 要选 **GitHub Actions**。

部署到自己的域名和服务器时这样构建：

```bash
SITE_URL=https://example.com SITE_BASE=/ npm run build
```

然后上传 `dist/`。

## 联系方式

- 邮箱：205637794@qq.com · xhl566@gmail.com
- LinkedIn：[陈佳绍](https://www.linkedin.com/in/%E4%BD%B3%E7%BB%8D-%E9%99%88-5950ba347/)

## 致谢

基于 BootstrapMade 的 [iPortfolio](https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/) 模板，按其[许可](https://bootstrapmade.com/license/)使用。
