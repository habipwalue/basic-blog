import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // '/serverless' YOK!

// https://astro.build/config
export default defineConfig({
  output: 'server', // veya 'hybrid'
  adapter: vercel({ // Adapter çağrılıyor
    webAnalytics: { enabled: true }, // isteğe bağlı
    // imageService: true // isteğe bağlı
  }),
});