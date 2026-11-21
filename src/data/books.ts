// Book list shown on /books/ and /en/books/.
// To add a book: add an entry here. `en` and `author` are optional; `note` is a line you want to keep from it.

type Text = { zh: string; en: string };

export interface Book {
  slug: string;
  title: string;
  /** English or original title. Leave out if unsure. */
  en?: string;
  author?: Text;
  note?: Text;
}

export const books: Book[] = [
  {
    slug: 'moments-we-shared',
    title: '云边有个小卖部',
    en: 'Moments We Shared',
    author: { zh: '张嘉佳', en: 'Zhang Jiajia' },
  },
  {
    slug: 'three-body',
    title: '三体',
    en: 'The Three-Body Problem',
    author: { zh: '刘慈欣', en: 'Liu Cixin' },
    note: {
      zh: '给岁月以文明，而不是给文明以岁月。',
      en: 'Give civilization to time, instead of giving time to civilization.',
    },
  },
  {
    slug: 'flowers-for-algernon',
    title: '献给阿尔吉侬的花束',
    en: 'Flowers for Algernon',
    author: { zh: '丹尼尔·凯斯', en: 'Daniel Keyes' },
  },
  {
    slug: 'zhua-luo-ye',
    title: '抓落叶',
  },
  {
    slug: 'history-of-china',
    title: '华夏通史',
    en: 'A General History of China',
  },
  {
    slug: 'brave-new-world',
    title: '美丽新世界',
    en: 'Brave New World',
    author: { zh: '阿道司·赫胥黎', en: 'Aldous Huxley' },
  },
  {
    slug: 'excellent-sheep',
    title: '优秀的绵羊',
    en: 'Excellent Sheep',
    author: { zh: '威廉·德雷谢维奇', en: 'William Deresiewicz' },
  },
  {
    slug: 'netochka-nezvanova',
    title: '涅朵奇卡',
    en: 'Netochka Nezvanova',
    author: { zh: '陀思妥耶夫斯基', en: 'Fyodor Dostoevsky' },
  },
  {
    slug: 'crime-and-punishment',
    title: '罪与罚',
    en: 'Crime and Punishment',
    author: { zh: '陀思妥耶夫斯基', en: 'Fyodor Dostoevsky' },
  },
  {
    slug: 'the-idiot',
    title: '白痴',
    en: 'The Idiot',
    author: { zh: '陀思妥耶夫斯基', en: 'Fyodor Dostoevsky' },
  },
];
