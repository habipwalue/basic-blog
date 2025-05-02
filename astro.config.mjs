import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercel({
    edgeMiddleware: true,      // ← Edge Middleware’i aktif ediyor
    skewProtection: false      // opsiyonel: Vercel Skew Koruması
  }),
});
