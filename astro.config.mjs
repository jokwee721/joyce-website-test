import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Note: Do NOT hardcode `site` or `base` here.
// When deployed via `.github/workflows/deploy.yml`, `withastro/action@v3`
// automatically detects your GitHub Pages URL and repository path.
export default defineConfig({
  integrations: [mdx()],
  build: {
    format: 'directory',
  },
});
