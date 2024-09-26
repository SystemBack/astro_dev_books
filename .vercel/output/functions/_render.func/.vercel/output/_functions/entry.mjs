import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CTn9EXYu.mjs';
import { manifest } from './manifest_uhl2qACo.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_DCDQzDZb.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_D4qBXP3t.mjs')],
]);;

const _page0 = () => import('./pages/book/_id_.astro.mjs');
const _page1 = () => import('./pages/index.astro.mjs');
const _page2 = () => import('./pages/_image.astro.mjs');
const pageMap = new Map([
    ["src/pages/book/[id].astro", _page0],
    ["src/pages/index.astro", _page1],
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "f40824be-a8ba-4223-a20d-dbef10df46fa",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
