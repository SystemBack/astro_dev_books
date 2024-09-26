import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_C0JoQuUH.mjs';
import 'kleur/colors';
import 'clsx';
import { S as SCORE_API_ENDPOINT } from './server_DeHU3RnB.mjs';

const $$BookScore = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch(SCORE_API_ENDPOINT);
  const score = await res.text();
  return renderTemplate`${maybeRenderHead()}<span class="text-sm">Score: ${score}/5</span>`;
}, "/home/sabre/dev/dev-books/src/components/BookScore.astro", void 0);

const $$file = "/home/sabre/dev/dev-books/src/components/BookScore.astro";
const $$url = undefined;

export { $$BookScore as default, $$file as file, $$url as url };
