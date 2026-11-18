import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Note: Do NOT hardcode `site` or `base` here.
// `.github/workflows/deploy.yml` passes `--site` and `--base` automatically.
export default defineConfig({
  integrations: [mdx()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  build: {
    format: 'directory',
  },
});
