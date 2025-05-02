import { c as createComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro, d as addAttribute, e as renderHead, r as renderComponent, f as renderSlot } from './astro/server_DfMQN3g5.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <h1>Basit Blog Sitesi</h1> <nav> <ul> <li><a href="/">Ana Sayfa</a></li> <li><a href="/hakkinda">Hakkında</a></li> <li><a href="/sayfa1">Sayfa 1</a></li> <li><a href="/sayfa5">Sayfa 5</a></li> <li><a href="/sayfa10">Sayfa 10</a></li> <li><a href="/sayfa15">Sayfa 15</a></li> </ul> </nav> </header>`;
}, "/home/habip/work-lin/basic-blog/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer> <p>© ${currentYear} Basit Blog Sitesi. Tüm hakları saklıdır.</p> </footer>`;
}, "/home/habip/work-lin/basic-blog/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="tr"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])}  </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/habip/work-lin/basic-blog/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
