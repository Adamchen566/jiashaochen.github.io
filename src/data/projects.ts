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
  /** Optional longer write-up below the brief: results first, technical details after. */
  detail?: ProjectDetail;
}

export interface Row {
  name: Text;
  text: Text;
}

export interface ProjectDetail {
  /** Headline numbers. Measured results only. */
  stats: { value: Text; unit: Text; label: Text }[];
  /** Upper half, for clients and partners: what was built and how well it works. */
  overview: { title: Text; intro?: Text; rows: Row[] }[];
  /** Lower half, for readers who want the implementation. */
  tech: {
    title: Text;
    intro: Text;
    steps: Row[];
    stack: string[];
    /** A screenshot shown beside the steps; file name inside public/assets/img/portfolio/. */
    figure?: { image: string; caption: Text };
  };
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
    slug: 'mahjong-ai',
    title: { zh: 'Mahjong AI · 四川麻将', en: 'Mahjong AI · Sichuan Mahjong' },
    category: { zh: '个人项目 · 强化学习', en: 'Personal project · Reinforcement learning' },
    audience: { zh: '想和 AI 打四川麻将、想看它怎么想的人', en: 'People who want to play Sichuan Mahjong against an AI and see how it thinks' },
    date: { zh: '2026 年，主体已完成', en: '2026, main work complete' },
    link: {
      label: { zh: 'GitHub 仓库', en: 'GitHub repository' },
      href: 'https://github.com/Adamchen566/mahjong_AI',
    },
    note: {
      zh: '没有在线试玩，克隆仓库后在本地运行',
      en: 'No online demo; clone the repository and run it locally',
    },
    images: ['mahjong-watch.png', 'mahjong-ladder.png'],
    brief: {
      zh: '能在浏览器里打的四川麻将（血战到底），1 人对 3 个电脑，加上一个从零训练的 AI。规则、界面、训练、评估都是我一个人做的。AI 先模仿一个按规则写的程序，再靠自己和自己打了 897 万局，最后明显强过它的老师：和三个规则型程序同桌打 1 万局，平均每局多赢 1.38 分。',
      en: 'Sichuan Mahjong (the Bloody Battle variant) playable in the browser, one player against three computer opponents, plus an AI trained from scratch. I built the rules, the interface, the training and the evaluation myself. The AI first imitated a rule-based program, then played 8.97 million games against itself and ended up clearly stronger than its teacher: over 10,000 games at a table with three rule-based programs, it wins 1.38 points more per game on average.',
    },
    detail: {
      stats: [
        {
          value: { zh: '+1.38', en: '+1.38' },
          unit: { zh: '分 / 局', en: 'pts / game' },
          label: { zh: '和三个规则型程序同桌打 1 万局，平均每局多赢的分数', en: 'Average margin per game over 10,000 games against three rule-based programs' },
        },
        {
          value: { zh: '897', en: '8.97' },
          unit: { zh: '万局', en: 'million games' },
          label: { zh: '自我对弈的局数，一张 RTX 4060 Ti 上 12 小时', en: 'Self-play, 12 hours on one RTX 4060 Ti' },
        },
        {
          value: { zh: '< 1', en: '< 1' },
          unit: { zh: '毫秒', en: 'ms' },
          label: { zh: '在 CPU 上出一手牌的时间，不需要显卡', en: 'Time to choose a move on a CPU, no GPU needed' },
        },
        {
          value: { zh: '189', en: '189' },
          unit: { zh: '个', en: 'tests' },
          label: { zh: '自动化测试，规则逐条有测试', en: 'Automated tests; every rule is covered' },
        },
      ],
      overview: [
        {
          title: { zh: '做成了什么，效果如何', en: 'What was built and how well it works' },
          intro: { zh: '下面的数字都是实测。', en: 'All figures below are measured.' },
          rows: [
            {
              name: { zh: '能玩', en: 'Playable' },
              text: {
                zh: '你和三个电脑打完整的一局：换三张、定缺、碰、杠、胡、结算，连打多局，每局自动存牌谱',
                en: 'A full game against three computer opponents, from the tile exchange to scoring, over several rounds; every game is saved as a record',
              },
            },
            {
              name: { zh: 'AI 有多强', en: 'Strength' },
              text: {
                zh: '和三个规则型程序同桌打 1 万局没用过的牌，平均每局多赢 1.38 分（95% 置信区间 1.23 到 1.53）',
                en: 'Over 10,000 games on unseen deals against three rule-based programs: +1.38 points per game (95% confidence interval 1.23 to 1.53)',
              },
            },
            {
              name: { zh: '练了多久', en: 'Training' },
              text: {
                zh: '先模仿规则型程序，再自我对弈 12 小时、897 万局，用的是一张家用显卡（RTX 4060 Ti）',
                en: 'Imitation of the rule-based program first, then 12 hours and 8.97 million games of self-play on one consumer GPU (RTX 4060 Ti)',
              },
            },
            {
              name: { zh: '反应多快', en: 'Speed' },
              text: {
                zh: '模型导出后只有 6 MB，不用显卡，出一手牌不到 1 毫秒',
                en: 'The exported model is 6 MB and picks a move in under 1 ms on a CPU',
              },
            },
            {
              name: { zh: '公平', en: 'Fairness' },
              text: {
                zh: 'AI 只看得到自己的牌，这一点有自动化测试证明；给你的提示也一样',
                en: 'The AI sees only its own tiles, and an automated test proves it; the hints it gives you follow the same rule',
              },
            },
          ],
        },
        {
          title: { zh: '在软件里能看到什么', en: 'What you can see in the software' },
          intro: {
            zh: 'AI 不是一个黑箱：它每一步怎么想、各个版本谁强谁弱，都画在界面上。',
            en: 'The AI is not a black box: its thinking at each step and the ranking of its versions are drawn on screen.',
          },
          rows: [
            {
              name: { zh: '概率条', en: 'Probability bars' },
              text: { zh: '打开提示，手牌上方的蓝条是模型打每一张牌的把握', en: 'With hints on, a bar above each tile shows how likely the model is to discard it' },
            },
            {
              name: { zh: '估值曲线', en: 'Value curves' },
              text: { zh: '模型预计四家各自这一局能得多少分，随牌局进行怎么变', en: 'The score the model expects for each of the four players, as the game goes on' },
            },
            {
              name: { zh: '观战', en: 'Watch mode' },
              text: {
                zh: '四个座位各放一种电脑，牌全部摊开，自动一局接一局地打，可以暂停、调速、换视角',
                en: 'Four computer players with all tiles face up, game after game; pause, change speed or switch seat',
              },
            },
            {
              name: { zh: '段位梯', en: 'Ladder' },
              text: { zh: '各个版本两两同桌对打的成绩表，加上训练过程的成绩曲线', en: 'Head-to-head results between versions, plus the training curve' },
            },
            {
              name: { zh: '听牌提示和进张', en: 'Tile efficiency' },
              text: {
                zh: '现在几向听、进哪些牌、各剩几张；听牌时列出能胡的牌和番数。这部分是规则算的，不靠模型',
                en: 'Distance from a ready hand, useful tiles and how many remain, winning tiles and their value. Computed by rules, not by the model',
              },
            },
            {
              name: { zh: '报牌', en: 'Voice calls' },
              text: { zh: '四个座位各有一个音色，打出什么牌就报什么', en: 'Each of the four seats has its own voice and calls the tiles it plays' },
            },
          ],
        },
        {
          title: { zh: '还做不到的', en: 'What it cannot do yet' },
          rows: [
            {
              name: { zh: '不会防守', en: 'No defence' },
              text: {
                zh: '它的分数全靠进攻。别人听牌时它照样打危险牌，点炮率有 50%。',
                en: 'Its score comes entirely from attack. It keeps discarding dangerous tiles when others are ready, and its deal-in rate is 50%.',
              },
            },
            {
              name: { zh: '只有一种玩法', en: 'One variant' },
              text: { zh: '四川麻将的血战到底，其他玩法和地方规则没有做。', en: 'Sichuan Bloody Battle only; other variants and local rules are not implemented.' },
            },
            {
              name: { zh: '单机', en: 'Single player' },
              text: { zh: '一个人对三个电脑，没有联机。', en: 'One person against three computers; no online play.' },
            },
            {
              name: { zh: '没有在线试玩', en: 'No online demo' },
              text: { zh: '只能把仓库克隆下来，在自己的电脑上运行。', en: 'You have to clone the repository and run it on your own computer.' },
            },
          ],
        },
      ],
      tech: {
        title: { zh: '技术细节：怎么做出来的', en: 'Technical details: how it was built' },
        intro: { zh: '下面这部分写给想看实现的人，按做的先后顺序排。', en: 'For readers who want the implementation, in the order the work was done.' },
        steps: [
          {
            name: { zh: '规则引擎', en: 'Rules engine' },
            text: {
              zh: '纯 Python，没有界面，给定种子完全可复现。换三张、定缺、十几种番型、查花猪、查大叫、退税都有，逐条有测试。',
              en: 'Pure Python with no interface, fully reproducible from a seed. Covers the tile exchange, the voided suit, a dozen scoring patterns and the end-of-game checks, each with tests.',
            },
          },
          {
            name: { zh: '规则型程序', en: 'Rule-based program' },
            text: {
              zh: '算向听数和进张，作为第一个像样的对手，也是后面的老师和标尺。',
              en: 'Counts distance to a ready hand and useful tiles. The first decent opponent, and later the teacher and the yardstick.',
            },
          },
          {
            name: { zh: '训练环境', en: 'Training environment' },
            text: {
              zh: '把一个座位看到的局面编码成 71 × 27 的数组；12 个进程并行对局，每秒五万多个决定。',
              en: 'What one seat can see is encoded as a 71 × 27 array; 12 processes play in parallel at over 50,000 decisions per second.',
            },
          },
          {
            name: { zh: '模仿学习', en: 'Imitation learning' },
            text: {
              zh: '让一个 178 万参数的残差网络学规则型程序的选择，97.9% 的局面选得一样，实力持平。',
              en: 'A residual network with 1.78 million parameters learns the choices of the rule-based program: the same move in 97.9% of positions, and equal strength.',
            },
          },
          {
            name: { zh: '自我对弈', en: 'Self-play' },
            text: {
              zh: '用 PPO 让它和自己的历史版本对打。训练时价值网络可以看全场的牌，出牌的那一路看不到。',
              en: 'PPO against its own past versions. During training the value network may see every tile; the policy that chooses moves may not.',
            },
          },
          {
            name: { zh: '评估', en: 'Evaluation' },
            text: {
              zh: '同一副牌打四次，待测的一方轮流坐四个座位，抵消发牌的运气；用没见过的牌确认成绩。',
              en: 'Each deal is played four times with the tested player in each seat, which cancels the luck of the deal; results are confirmed on unseen deals.',
            },
          },
          {
            name: { zh: '入座', en: 'Deployment' },
            text: {
              zh: '模型导出成 6 MB 的 ONNX 文件，对局软件用 CPU 推理，不需要装深度学习框架。',
              en: 'The model is exported to a 6 MB ONNX file; the game runs it on a CPU with no deep-learning framework installed.',
            },
          },
        ],
        stack: ['Python', 'PyTorch', 'ONNX Runtime', 'FastAPI', 'React', 'TypeScript'],
        figure: {
          image: 'mahjong-about.png',
          caption: { zh: '软件里自带的项目介绍页，点开看大图。', en: 'The project page built into the software (in Chinese). Click to enlarge.' },
        },
      },
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
