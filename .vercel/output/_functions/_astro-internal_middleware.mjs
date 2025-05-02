import { d as defineMiddleware, s as sequence } from './chunks/index_gDy3bych.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_0MlEh8aE.mjs';
import 'kleur/colors';
import './chunks/astro/server_DfMQN3g5.mjs';
import 'clsx';
import 'cookie';

const blockedIPs = [
  "188.58.71.17"
  // Engellemek istediğiniz IP adres(ler)i
];
const onRequest$1 = defineMiddleware((context, next) => {
  const ip = context.clientAddress;
  if (ip && blockedIPs.includes(ip)) {
    console.log(`[Server] Engellenen IP (${ip}) erişimi engellendi.`);
    return new Response("Erişim Engellendi (Access Denied)", {
      status: 403
    });
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
