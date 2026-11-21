import { getCollection } from 'astro:content';

// Drafts are visible in `npm run dev`, or in a build run with SHOW_DRAFTS=1 (for local review).
const showDrafts = import.meta.env.DEV || process.env.SHOW_DRAFTS === '1';

/** Published posts, newest first. */
export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => showDrafts || !data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatDate(date: Date): string {
  return `${date.getUTCFullYear()} 年 ${date.getUTCMonth() + 1} 月 ${date.getUTCDate()} 日`;
}
