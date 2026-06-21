import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			// zh = 中文, en = English
			lang: z.enum(['zh', 'en']).default('zh'),
			// Set true to keep a post hidden / unpublished
			draft: z.boolean().default(false),
			heroImage: z.optional(image()),
		}),
});

export const collections = { blog };
