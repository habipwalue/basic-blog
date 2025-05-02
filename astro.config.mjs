// astro.config.mjs
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server',          // ⚠️ Tam sunucu modu
  adapter: vercel({
    edgeMiddleware: true,
    // (isteğe bağlı) isr: true
  }),
});
