// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  console.log("Middleware çalıştı, IP kontrolü devredışı."); // Log ekleyelim
  console.log("Middleware yeniden çalıştı, build testi.");
  return next(); // Sadece sonraki adıma geç
});