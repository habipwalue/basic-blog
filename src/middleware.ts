import { defineMiddleware } from 'astro:middleware';

const blockedIPs: string[] = [
    '178.247.145.24', // !!! KENDİ IP LİSTENİZİ GİRİN !!!
];

export const onRequest = defineMiddleware((context, next) => {
    const ip = context.request.headers.get('x-nf-client-connection-ip');
    console.log(`[Netlify] Gelen istek IP: ${ip}`);

    if (ip && blockedIPs.includes(ip)) {
        console.log(`[Netlify] Engellenen IP (${ip}) erişimi engellendi.`);
        return new Response('Erişim Engellendi (Access Denied from Netlify)', {
            status: 403
        });
    }
    return next();
});