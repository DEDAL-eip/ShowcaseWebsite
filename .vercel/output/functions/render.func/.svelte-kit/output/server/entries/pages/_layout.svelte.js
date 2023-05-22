import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
/* empty css                *//* empty css                     */import { H as Header, F as Footer } from "../../chunks/Footer.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div id="theme-container" class="bg-primary"><div>${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
		<main>${slots.default ? slots.default({}) : ``}</main>
		${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Layout as default
};
