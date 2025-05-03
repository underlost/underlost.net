// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
  schema: z.object({
    guid: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    color: z.string().optional(),
    image: z.string().optional(),
    type: z.string().optional(),
    tools_used: z.array(z.string()).optional(),
    frameworks_used: z.array(z.string()).optional(),
    timeline: z.string().optional(),
    role: z.string().optional(),
    client: z.string().optional(),
  }),
});

export const collections = {
  portfolio,
};
