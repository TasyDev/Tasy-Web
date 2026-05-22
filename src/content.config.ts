import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    category: z.string(),
    image: z.string(),
    author: z.object({
      name: z.string(),
      role: z.string(),
      image: z.string(),
    }),
  }),
});

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
  }),
});

export const collections = { blog, portfolio };
