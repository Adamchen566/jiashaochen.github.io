import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts: one Markdown file per post in src/content/blog/.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    /** Drafts are built by `npm run dev` only, never published. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
