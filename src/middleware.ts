import { defineMiddleware } from 'astro:middleware';

const blockedIPs = ['178.247.145.24'];

export const onRequest = defineMiddleware((context, next) => {
  // Vercel’in gerçek IP header’ları
  const ip = context.request.headers.get('x-real-ip')
          || context.request.headers.get('x-forwarded-for')?.split(',')[0]
          || context.request.headers.get('x-vercel-forwarded-for')
          || 'unknown';

  console.log(`Gelen IP: ${ip}`);

  if (blockedIPs.includes(ip)) {
    return new Response('Erişim Engellendi', { status: 403 });
  }
  return next();
});
