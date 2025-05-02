import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DfMQN3g5.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BvLtgAmG.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const $$Hakkinda = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Hakk\u0131nda";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>Hakkımızda</h2> <p>Bu sayfa, test sitesinin hakkında bölümüdür.</p> <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> ` })}`;
}, "/home/habip/work-lin/basic-blog/src/pages/hakkinda.astro", void 0);

const $$file = "/home/habip/work-lin/basic-blog/src/pages/hakkinda.astro";
const $$url = "/hakkinda";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Hakkinda,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
