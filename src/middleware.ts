// src/middleware.ts
import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async ({ request }, next) => {
  // Gerçek IP’yi X-Forwarded-For header’ından alıyoruz
  const forwarded = request.headers.get('x-forwarded-for') || '';
  const ip = forwarded.split(',')[0].trim();

  // Engellemek istediğiniz IP’ler
  const blocked = ['178.247.145.24'];

  if (blocked.includes(ip)) {
    return new Response('Erişim Engellendi', { status: 403 });
  }

  return next();
};
