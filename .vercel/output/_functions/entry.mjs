import { r as renderers } from './chunks/internal_BsTt5pTQ.mjs';
import { c as createExports } from './chunks/entrypoint_BFA1k737.mjs';
import { manifest } from './manifest_BsF0XmIs.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/hakkinda.astro.mjs');
const _page2 = () => import('./pages/sayfa1.astro.mjs');
const _page3 = () => import('./pages/sayfa10.astro.mjs');
const _page4 = () => import('./pages/sayfa11.astro.mjs');
const _page5 = () => import('./pages/sayfa12.astro.mjs');
const _page6 = () => import('./pages/sayfa13.astro.mjs');
const _page7 = () => import('./pages/sayfa14.astro.mjs');
const _page8 = () => import('./pages/sayfa15.astro.mjs');
const _page9 = () => import('./pages/sayfa2.astro.mjs');
const _page10 = () => import('./pages/sayfa3.astro.mjs');
const _page11 = () => import('./pages/sayfa4.astro.mjs');
const _page12 = () => import('./pages/sayfa5.astro.mjs');
const _page13 = () => import('./pages/sayfa6.astro.mjs');
const _page14 = () => import('./pages/sayfa7.astro.mjs');
const _page15 = () => import('./pages/sayfa8.astro.mjs');
const _page16 = () => import('./pages/sayfa9.astro.mjs');
const _page17 = () => import('./pages/sayfax.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/hakkinda.astro", _page1],
    ["src/pages/sayfa1.astro", _page2],
    ["src/pages/sayfa10.astro", _page3],
    ["src/pages/sayfa11.astro", _page4],
    ["src/pages/sayfa12.astro", _page5],
    ["src/pages/sayfa13.astro", _page6],
    ["src/pages/sayfa14.astro", _page7],
    ["src/pages/sayfa15.astro", _page8],
    ["src/pages/sayfa2.astro", _page9],
    ["src/pages/sayfa3.astro", _page10],
    ["src/pages/sayfa4.astro", _page11],
    ["src/pages/sayfa5.astro", _page12],
    ["src/pages/sayfa6.astro", _page13],
    ["src/pages/sayfa7.astro", _page14],
    ["src/pages/sayfa8.astro", _page15],
    ["src/pages/sayfa9.astro", _page16],
    ["src/pages/sayfaX.astro", _page17],
    ["src/pages/index.astro", _page18]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "b2dfd63f-45cd-4d26-b960-ba97e2694500",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
