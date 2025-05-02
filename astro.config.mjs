import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // Vercel adapter'ını import et

// https://astro.build/config
export default defineConfig({
  output: 'server', // Output modunu 'server' olarak ayarla
  adapter: vercel({ // Vercel adapter'ını yapılandır
    webAnalytics: { enabled: true }, // İsteğe bağlı: Vercel Analytics'i etkinleştir
    // imageService: true // İsteğe bağlı: Astro Assets ile Vercel Image Optimization kullan
  }),
  // Diğer Astro yapılandırmalarınız varsa burada kalabilir
});