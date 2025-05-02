import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DfMQN3g5.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BvLtgAmG.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageTitle = "Ana Sayfa";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>Hoş Geldiniz!</h2> <p>Bu Astro ile oluşturulmuş basit bir test blog sitesidir.</p> <p>Aşağıdaki linklerden diğer sayfalara gidebilirsiniz:</p> <ul> <li><a href="/hakkinda">Hakkında</a></li> <li><a href="/sayfa1">Sayfa 1</a></li> <li><a href="/sayfa2">Sayfa 2</a></li> <li><a href="/sayfa3">Sayfa 3</a></li> <li><a href="/sayfa4">Sayfa 4</a></li> <li><a href="/sayfa5">Sayfa 5</a></li> <li><a href="/sayfa6">Sayfa 6</a></li> <li><a href="/sayfa7">Sayfa 7</a></li> <li><a href="/sayfa8">Sayfa 8</a></li> <li><a href="/sayfa9">Sayfa 9</a></li> <li><a href="/sayfa10">Sayfa 10</a></li> <li><a href="/sayfa11">Sayfa 11</a></li> <li><a href="/sayfa12">Sayfa 12</a></li> <li><a href="/sayfa13">Sayfa 13</a></li> <li><a href="/sayfa14">Sayfa 14</a></li> <li><a href="/sayfa15">Sayfa 15</a></li> </ul> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> ` })}`;
}, "/home/habip/work-lin/basic-blog/src/pages/index.astro", void 0);

const $$file = "/home/habip/work-lin/basic-blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
