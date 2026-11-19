import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    category: z.enum(['lxd', 'uxd', 'gd']),
    order: z.number(),
    listed: z.boolean().default(true),
    description: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    imageWidth: z.number().optional(),
    transparentBg: z.boolean().default(true),
    tags: z.array(z.string()),
    ctaLabel: z.string().default('View Case Study Details'),
    launchUrl: z.string().optional(),
    launchLabel: z.string().optional(),
    secondaryLaunchUrl: z.string().optional(),
    secondaryLaunchLabel: z.string().optional(),
    extraLaunchLinks: z
      .array(
        z.object({
          url: z.string(),
          label: z.string(),
        })
      )
      .optional(),
    figmaEmbedUrl: z.string().url().optional(),
    youtubeEmbedUrl: z.string().url().optional(),
    slidesEmbedUrl: z.string().url().optional(),
    slidesLabel: z.string().optional(),
    videoEmbeds: z
      .array(
        z.object({
          src: z.string().url(),
          title: z.string(),
          aspect: z.enum(['landscape', 'vertical']).default('landscape'),
          caption: z.string().optional(),
        })
      )
      .optional(),
    accentColor: z.string().optional(),
    meta: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        })
      )
      .optional(),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          label: z.string().optional(),
          caption: z.string().optional(),
        })
      )
      .optional(),
    takeaways: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };
