// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';

// Engellenmesi gereken IP adresleri listesi
const blockedIPs: string[] = [
    '188.58.71.17', // Engellemek istediğiniz IP adres(ler)i
    // 'BURAYA_KENDI_IP_ADRESINIZI_EKLEYIN_TEST_ICIN' // Test etmek için geçici olarak kendi IP'nizi ekleyebilirsiniz
];

// Middleware fonksiyonu - Astro'da genellikle onRequest olarak adlandırılır
export const onRequest = defineMiddleware((context, next) => {
    // Kullanıcının IP adresini al (Astro bunu context üzerinden sağlar)
    const ip = context.clientAddress;

    console.log(`Gelen istek IP: ${ip}`); // Geliştirme sırasında IP'yi görmek için loglama

    // Eğer IP adresi alınabildiyse ve engellenenler listesindeyse
    if (ip && blockedIPs.includes(ip)) {
        console.log(`Engellenen IP erişmeye çalıştı: ${ip}`);
        // 403 Forbidden (Yasak) yanıtı döndürerek erişimi engelle
        return new Response('Erişim Engellendi (Access Denied)', {
            status: 403
        });
    }

    // Eğer IP engellenmemişse veya IP alınamadıysa, isteğin devam etmesine izin ver
    // `next()` fonksiyonunu çağırıp sonucunu döndürmek önemlidir.
    return next();
});