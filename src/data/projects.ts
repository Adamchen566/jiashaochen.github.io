// Project detail pages. One entry per page under /projects/<slug>/ (and /en/projects/<slug>/).
// To add a project: add an entry here and put its images in public/assets/img/portfolio/.

type Text = { zh: string; en: string };

export interface Project {
  slug: string;
  title: Text;
  category: Text;
  /** Who it was made for. */
  audience: Text;
  date: Text;
  link?: { label: Text; href: string; lightbox?: boolean };
  note?: Text;
  /** File names inside public/assets/img/portfolio/. */
  images: string[];
  brief: Text;
}

export const projects: Project[] = [
  {
    slug: 'vct-calendar',
    title: { zh: 'VCT 赛程订阅日历', en: 'VCT Matches to iCal' },
    category: { zh: '开源项目 · Python 爬虫', en: 'Open source · Python web crawler' },
    audience: { zh: '无畏契约观赛玩家', en: 'Valorant esports viewers' },
    date: { zh: '2024 年 3 月起，持续更新', en: 'Since March 2024, still maintained' },
    link: {
      label: { zh: 'GitHub 仓库', en: 'GitHub repository' },
      href: 'https://github.com/Adamchen566/VCT-matches-to-iCal',
    },
    images: ['opensource-1.jpg', 'opensource-1.1.jpg', 'opensource-1.2.jpg'],
    brief: {
      zh: '用 Python 抓取 VLR.gg 上的无畏契约比赛信息，包括赛事名称、比赛时间、队伍和比分，整理排序后生成 iCal（.ics）日历文件，可以在日历应用里订阅。GitHub Actions 每天自动刷新一次，订阅之后不用手动上传，赛程会自己更新。项目还带一个桌面查看器，有表格、卡片和热力图三种视图。',
      en: 'A Python web scraper that extracts Valorant match information from VLR.gg, including event names, match dates, teams and scores. The data is processed, sorted and converted into an iCal (.ics) file for calendar subscription. A GitHub Actions workflow refreshes the calendar every day, so a subscribed calendar stays up to date without any manual upload. The project also ships a desktop viewer with table, card and heatmap views.',
    },
  },
  {
    slug: 'bookstore-analysis',
    title: { zh: '在线书店读者数据分析', en: 'Online Bookstore Analysis' },
    category: { zh: '课程项目 · 机器学习', en: 'Course project · Machine learning' },
    audience: { zh: '在线书店（课程设定）', en: 'An online bookstore (course scenario)' },
    date: { zh: '2024 年 9 月', en: 'September 2024' },
    link: {
      label: { zh: 'GitHub 仓库', en: 'GitHub repository' },
      href: 'https://github.com/YubotKwng/Eodp-2nd-Asmt',
    },
    images: ['course-1.jpg', 'course-1.1.jpg', 'course-1.2.jpg', 'course-1.3.jpg', 'course-1.4.jpg', 'course-1.5.jpg', 'course-1.6.jpg'],
    brief: {
      zh: '小组项目，分析在线书店里高活跃用户的行为，目的是提高用户参与度。我们聚焦经常给书打分的用户，找出他们在人群特征和阅读偏好上的规律。数据预处理用了分析工具包和正则匹配，之后做 k-means 聚类和线性回归。结论用来帮书店针对这批最活跃的用户调整服务。',
      en: 'A group project that analyses the behaviour of highly active users at an online bookstore in order to improve engagement. Focusing on users who rate books often, the study identifies patterns in demographics and preferences. We preprocessed the data with an analytics toolkit and regular expressions, then applied k-means clustering and linear regression. The findings are meant to help the bookstore tailor its services to its most engaged users.',
    },
  },
  {
    slug: 'ogre-database',
    title: { zh: 'OGRE 数据库设计', en: 'OGRE Database Design' },
    category: { zh: '课程项目 · 数据库系统', en: 'Course project · Database systems' },
    audience: { zh: 'OGRE 平台（课程设定）', en: 'The OGRE platform (course scenario)' },
    date: { zh: '2024 年 9 月', en: 'September 2024' },
    images: ['course-2.jpg', 'course-2.1.jpg'],
    brief: {
      zh: 'OGRE（Open Generative-AI Responsible Environment）是课程里设定的一个统一平台，用来负责任、低成本地使用生成式 AI，同时支持伦理审计和合规。这个项目为它设计并实现了一个 MySQL 数据库，管理平台的核心数据，并支持接入主流的 AI 服务商。表结构按数据完整性、可访问性和安全性来设计，可以追踪 AI 生成的内容、用户行为和合规措施。',
      en: 'OGRE (Open Generative-AI Responsible Environment) is a course scenario: a unified platform for responsible and cost-effective use of generative AI with ethical auditing and legal compliance. This project designs and implements a MySQL database for the platform’s core data, with support for integrating major AI providers. The schema is structured for data integrity, accessibility and security, and tracks AI-generated content, user activity and compliance measures.',
    },
  },
  {
    slug: 'shadow-taxi',
    title: { zh: 'Shadow Taxi 出租车模拟游戏', en: 'Shadow Taxi' },
    category: { zh: '课程项目 · 面向对象编程', en: 'Course project · Object-oriented programming' },
    audience: { zh: 'SWEN20003 课程', en: 'SWEN20003 coursework' },
    date: { zh: '2024 年 9 月', en: 'September 2024' },
    link: {
      label: { zh: 'GitHub 仓库', en: 'GitHub repository' },
      href: 'https://github.com/Adamchen566/ShadowTaxi',
    },
    images: ['course-3.jpg'],
    brief: {
      zh: 'SWEN20003 的课程项目，用 Java 写的出租车模拟游戏。项目分两部分：第一部分提交 UML 类图，说明游戏打算怎么实现；第二部分完成游戏本身。整体按面向对象的原则来组织代码，让它容易扩展和维护。',
      en: 'The project for SWEN20003: a taxi simulation game written in Java. It has two parts. The first is a UML class design showing how the game will be implemented, and the second is the implementation itself. The code is organised around object-oriented principles so that it stays easy to extend and maintain.',
    },
  },
  {
    slug: 'commbank-job-simulation',
    title: { zh: 'Commonwealth Bank 工作模拟', en: 'Commonwealth Bank Job Simulation' },
    category: { zh: '工作模拟（Forage）', en: 'Job simulation (Forage)' },
    audience: { zh: 'Commonwealth Bank 线上项目', en: 'Commonwealth Bank virtual program' },
    date: { zh: '2025 年 3 月 7 日', en: '7 March 2025' },
    link: {
      label: { zh: '查看证书', en: 'View certificate' },
      href: 'assets/img/portfolio/work-1.jpg',
      lightbox: true,
    },
    note: { zh: '证书以昵称 Huolong Xiao 注册', en: 'Certificate registered under the nickname Huolong Xiao' },
    images: ['work-1.jpg'],
    brief: {
      zh: '很有意思的一次工作模拟。我了解到银行现在面对的一个主要问题：经济虐待，这在生活里其实很常见，也让我认真想了想怎么避免它发生在自己身上。同时我的办公软件技能（PowerPoint、Excel、Word）在实际任务里得到了练习。',
      en: 'A very interesting job simulation. I learned about one of the main problems banks deal with today: financial abuse, which is more common in everyday life than I expected, and it made me think about how to keep it from happening to me. My office skills (PowerPoint, Excel and Word) also got practical use in the tasks.',
    },
  },
];
