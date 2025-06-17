// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()],

  site: 'https://peps778.github.io', // your GitHub Pages URL
  base: '/MFBBC-Website/', // must match your repo name
});
