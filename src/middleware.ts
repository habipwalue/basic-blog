// src/middleware.ts
import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async ({ request }, next) => {
  // X-Forwarded-For en öndeki IP’yi içerir
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || '';
  
  // Engellenmek istenen IP listesi
  const blocked = ['188.58.71.17'];
  
  if (blocked.includes(ip)) {
    return new Response('Erişim Engellendi', { status: 403 });
  }
  
  return next();
};
