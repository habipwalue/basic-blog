import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static', // Geçici olarak 'static' yapın
  adapter: vercel(),
});