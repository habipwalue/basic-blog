// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';

const blockedIPs: string[] = [
    '188.58.71.17', // Engellemek istediğiniz IP adres(ler)i
];

// 'server' modunda bu her zaman sunucu/edge'de çalışacak
export const onRequest = defineMiddleware((context, next) => {
    const ip = context.clientAddress;
    // console.log(`[Server] Gelen istek IP: ${ip}`);

    if (ip && blockedIPs.includes(ip)) {
        console.log(`[Server] Engellenen IP (${ip}) erişimi engellendi.`);
        return new Response('Erişim Engellendi (Access Denied)', {
            status: 403
        });
    }

    return next();
});