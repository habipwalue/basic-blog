import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DfMQN3g5.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BvLtgAmG.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Sayfa6 = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Sayfa 6";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>Sayfa 6 Başlığı</h2> <p>Bu sayfa 6'nın içeriğidir. Consectetur adipiscing elit...</p> <p>Diğer sayfalara linkler:</p> <ul> <li><a href="/sayfa1">Sayfa 1'e git</a></li> <li><a href="/sayfa2">Sayfa 2'ye git</a></li> <li><a href="/sayfa3">Sayfa 3'e git</a></li> <li><a href="/sayfa4">Sayfa 4'e git</a></li> <li><a href="/sayfa5">Sayfa 5'e git</a></li> <li><a href="/sayfa7">Sayfa 7'ye git</a></li> <li><a href="/sayfa8">Sayfa 8'e git</a></li> <li><a href="/sayfa9">Sayfa 9'a git</a></li> <li><a href="/sayfa10">Sayfa 10'a git</a></li> <li><a href="/sayfa11">Sayfa 11'e git</a></li> <li><a href="/sayfa12">Sayfa 12'ye git</a></li> <li><a href="/sayfa13">Sayfa 13'e git</a></li> <li><a href="/sayfa14">Sayfa 14'e git</a></li> <li><a href="/sayfa15">Sayfa 15'e git</a></li> <li><a href="/">Ana Sayfa'ya dön</a></li> </ul> ` })}`;
}, "/home/habip/work-lin/basic-blog/src/pages/sayfa6.astro", void 0);

const $$file = "/home/habip/work-lin/basic-blog/src/pages/sayfa6.astro";
const $$url = "/sayfa6";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sayfa6,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
