import { c as create_ssr_component } from "../../../chunks/index2.js";
/* empty css                   *//* empty css                        */import "../../../chunks/singletons.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="theme-container" class="bg-primary"><div><main>${slots.default ? slots.default({}) : ``}</main></div></div>`;
});
export {
  Layout as default
};
