import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DfMQN3g5.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BvLtgAmG.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$SayfaX = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Sayfa 1";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>Sayfa 1 Başlığı</h2> <p>Bu sayfa 1'in içeriğidir. Lorem ipsum dolor sit amet...</p> <p>Diğer sayfalara linkler:</p> <ul> <li><a href="/sayfa2">Sayfa 2'ye git</a></li> <li><a href="/sayfa5">Sayfa 5'e git</a></li> <li><a href="/">Ana Sayfa'ya dön</a></li> </ul> ` })}`;
}, "/home/habip/work-lin/basic-blog/src/pages/sayfaX.astro", void 0);

const $$file = "/home/habip/work-lin/basic-blog/src/pages/sayfaX.astro";
const $$url = "/sayfaX";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SayfaX,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
