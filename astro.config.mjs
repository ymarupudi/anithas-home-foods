import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// IMPORTANT: update `site` and `base` after you create the GitHub repo.
// - If repo name is `<user>.github.io`  -> site: 'https://<user>.github.io', base: '/'
// - If repo name is anything else       -> site: 'https://<user>.github.io', base: '/<repo>/'
export default defineConfig({
  site: 'https://ymarupudi.github.io',
  base: '/anithas-home-foods/',
  integrations: [tailwind()],
});
