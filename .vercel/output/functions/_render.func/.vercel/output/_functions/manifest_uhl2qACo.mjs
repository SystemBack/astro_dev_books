import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CMiwuzw0.mjs';
import 'es-module-lexer';
import { f as decodeKey } from './chunks/astro/server_C0JoQuUH.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/sabre/dev/dev-books/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/sabre/dev/dev-books/src/pages/book/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/book/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/sabre/dev/dev-books/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/book/[id]@_@astro":"pages/book/_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/sabre/dev/dev-books/src/components/BookScore.astro":"chunks/BookScore_DCDQzDZb.mjs","/home/sabre/dev/dev-books/src/content/books/aprendiendo-git.md?astroContentCollectionEntry=true":"chunks/aprendiendo-git_MDrOpuKY.mjs","/home/sabre/dev/dev-books/src/content/books/learning-typescript.md?astroContentCollectionEntry=true":"chunks/learning-typescript_DWDo0KqB.mjs","/home/sabre/dev/dev-books/src/content/books/programador-pragmatico.md?astroContentCollectionEntry=true":"chunks/programador-pragmatico_CZIPCEam.mjs","/home/sabre/dev/dev-books/src/content/books/refactoring.md?astroContentCollectionEntry=true":"chunks/refactoring_CJWjpSRa.mjs","/home/sabre/dev/dev-books/src/content/books/aprendiendo-git.md?astroPropagatedAssets":"chunks/aprendiendo-git_C9cZVSye.mjs","/home/sabre/dev/dev-books/src/content/books/learning-typescript.md?astroPropagatedAssets":"chunks/learning-typescript_RQXlBtvA.mjs","/home/sabre/dev/dev-books/src/content/books/programador-pragmatico.md?astroPropagatedAssets":"chunks/programador-pragmatico_DakYgjh-.mjs","/home/sabre/dev/dev-books/src/content/books/refactoring.md?astroPropagatedAssets":"chunks/refactoring_AI_xOq5Q.mjs","/home/sabre/dev/dev-books/.astro/assets.mjs":"chunks/assets_BwNa1IAe.mjs","/home/sabre/dev/dev-books/.astro/modules.mjs":"chunks/modules_DKjajEJ1.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_SCd2WJ8G.mjs","/home/sabre/dev/dev-books/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DxHLEual.mjs","/home/sabre/dev/dev-books/src/content/books/aprendiendo-git.md":"chunks/aprendiendo-git_BeIrJIRF.mjs","/home/sabre/dev/dev-books/src/content/books/learning-typescript.md":"chunks/learning-typescript_CmwcoEKN.mjs","/home/sabre/dev/dev-books/src/content/books/programador-pragmatico.md":"chunks/programador-pragmatico_BQQfyxhd.mjs","/home/sabre/dev/dev-books/src/content/books/refactoring.md":"chunks/refactoring_BJ-XU1H3.mjs","/home/sabre/dev/dev-books/src/components/BuyButton.astro":"chunks/BuyButton_D4qBXP3t.mjs","\u0000@astrojs-manifest":"manifest_uhl2qACo.mjs","/home/sabre/dev/dev-books/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.BB6uRyKX.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_id_.C0m-BOZo.css","/aprendiendo-git.jpg","/favicon.svg","/learning-typescript.jpg","/programador-pragmatico.jpg","/refactoring.jpg","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.BB6uRyKX.js","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[["/home/sabre/dev/dev-books/src/components/BookScore.astro","BookScore"],["/home/sabre/dev/dev-books/src/components/BuyButton.astro","BuyButton"]],"key":"xs4IzkwfzVDkBjZZuyWBLGBBknJ4ymudA3Xj+7lElRo=","envGetSecretEnabled":true});

export { manifest };
