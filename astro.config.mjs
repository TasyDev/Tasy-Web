// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tasy.work/',
  trailingSlash: 'always',
  integrations: [
    react(),
    mdx(),
    sitemap({
      serialize(item) {
        if (item.url === 'https://tasy.work/') {
          item.changefreq = 'daily';
          item.priority = 1.0;
        } else if (item.url.includes('/blog/') || item.url.includes('/portafolio/')) {
          item.changefreq = 'weekly';
          item.priority = 0.8;
        } else {
          item.changefreq = 'monthly';
          item.priority = 0.5;
        }
        return item;
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});