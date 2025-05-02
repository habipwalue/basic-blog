// src/middleware.ts
import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async ({ request }, next) => {
  // X-Forwarded-For başlığından IP adresini al
  const forwardedFor = request.headers.get('x-forwarded-for');
  const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '';

  // Engellenmek istenen IP listesi
  const blocked = ['178.247.145.24'];

  if (blocked.includes(ip)) {
    return new Response('Erişim Engellendi', { status: 403 });
  }

  return next();
};
