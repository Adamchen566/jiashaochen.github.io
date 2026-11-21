# 个人网站

[简体中文](README.zh.md) | [English](README.md)

线上地址：https://adamchen566.github.io/jiashaochen.github.io/

![网站预览](assets/img/review.jpg)

## 关于

陈佳绍（Jiashao Chen）的个人网站：墨尔本大学信息技术硕士（人工智能方向）在读，软件工程师、独立开发者。

## 功能

- 中英文切换（首次访问跟随浏览器语言）
- 响应式布局，适配手机、平板和桌面
- 产品区（眠屿、力阶），标注真实进度，带产品详情页
- 项目区，标注状态，带详情页
- 简历下载，中文或英文跟随页面语言

## 技术栈

- 纯静态 HTML、CSS、JavaScript，没有构建步骤
- Bootstrap 5，以及 `assets/vendor` 里的 AOS、GLightbox、Isotope、Swiper、Typed.js
- 部署在 GitHub Pages

## 目录

| 路径 | 内容 |
|---|---|
| `index.html` | 唯一的主页面 |
| `products/` | 每个产品一个详情页 |
| `portfolio-details/` | 每个项目一个详情页 |
| `resume/` | 简历源文件（HTML + CSS）；PDF 在 `assets/resume/` |
| `assets/js/i18n.js` | 主页面的全部中英文文案 |
| `assets/js/main.js` | 页面行为（菜单、打字效果、灯箱、轮播） |
| `assets/css/main.css` | 样式 |
| `assets/img/` | 图片 |

## 本地预览

直接用浏览器打开 `index.html`，或者起一个本地服务：

```bash
python -m http.server 8000
```

## 重新生成简历 PDF

改 `resume/zh.html` 或 `resume/en.html`，按上面的方法起本地服务，再用无头 Chrome 把页面打印成 PDF：

```bash
chrome --headless=new --no-pdf-header-footer --print-to-pdf=assets/resume/Jiashao-Chen-Resume-zh.pdf http://localhost:8000/resume/zh.html
```

## 项目

- [VCT 赛程订阅日历](https://github.com/Adamchen566/VCT-matches-to-iCal)：抓取无畏契约赛程，生成可订阅的日历
- [Shadow Taxi](https://github.com/Adamchen566/ShadowTaxi)：用 Java 写的出租车模拟游戏

## 联系方式

- 邮箱：205637794@qq.com · xhl566@gmail.com
- LinkedIn：[陈佳绍](https://www.linkedin.com/in/%E4%BD%B3%E7%BB%8D-%E9%99%88-5950ba347/)

## 致谢

基于 BootstrapMade 的 [iPortfolio](https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/) 模板，按其[许可](https://bootstrapmade.com/license/)使用。
