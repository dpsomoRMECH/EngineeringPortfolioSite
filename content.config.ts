import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    // Shown as the card/page title
    title: z.string(),
    // One or two sentences, shown on the card and as the page intro
    summary: z.string(),
    // Technologies used, shown as a spec list
    stack: z.array(z.string()),
    // Optional: "Solo project", "Team of 4", "Freelance", etc.
    role: z.string().optional(),
    status: z.enum(['shipped', 'in-progress', 'archived']).default('shipped'),
    repoUrl: z.string().url().or(z.literal('')).optional(),
    demoUrl: z.string().url().or(z.literal('')).optional(),
    date: z.date(),
    // Featured projects surface first on the homepage
    featured: z.boolean().default(false),
    // Lower numbers sort first among featured projects
    order: z.number().default(99),
  }),
});

export const collections = { projects };
