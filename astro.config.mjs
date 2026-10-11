// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Set SITE_URL in Cloudflare Pages (or here) once the custom domain is live.
const site = process.env.SITE_URL ?? 'https://spooki-web.pages.dev';

export default defineConfig({
  site,
  output: 'static',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
