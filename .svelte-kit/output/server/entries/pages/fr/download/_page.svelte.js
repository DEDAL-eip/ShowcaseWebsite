import { c as create_ssr_component, d as each, f as add_attribute, v as validate_component, e as escape } from "../../../../chunks/index2.js";
const Modal_svelte_svelte_type_style_lang = "";
const css = {
  code: ".modal-wrapper.svelte-gfwgh5{background-color:rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0.6);position:fixed;width:100%;height:100%;top:0;left:0}.modal.svelte-gfwgh5{background-color:white;max-width:80vw;padding:1rem;margin:15% auto}.close.svelte-gfwgh5{float:right;cursor:pointer}.close.svelte-gfwgh5:hover{font-weight:bold}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let shown = false;
  function show() {
    shown = true;
  }
  function hide() {
    shown = false;
  }
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.hide === void 0 && $$bindings.hide && hide !== void 0)
    $$bindings.hide(hide);
  $$result.css.add(css);
  return `
  
  ${shown ? `<div class="modal-wrapper svelte-gfwgh5"><div class="modal svelte-gfwgh5"><span class="close svelte-gfwgh5">×</span>
        ${slots.default ? slots.default({}) : ``}</div></div>` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let modal;
  let { versions = [] } = $$props;
  let { selected = void 0 } = $$props;
  if ($$props.versions === void 0 && $$bindings.versions && versions !== void 0)
    $$bindings.versions(versions);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1higzrm_START -->${$$result.title = `<title>DEDAL: Téléchargement</title>`, ""}<!-- HEAD_svelte-1higzrm_END -->`, ""}

<div class="flex min-h-screen bg-primary bg-gradient-to-tl from-secondary"><div class="m-auto text-center space-y-10"><div><img src="/Smartphone_logo.png" class="m-auto" alt="Smartphone_logo">
            <p class="text-6xl text-white font-bold">Télécharger DEDAL</p></div>
        <p class="text-2xl text-white tracking-widest">Emmenez votre guide du routard 2.0 sur votre appareil.</p>
        <div class="flex justify-center"><select id="version_select" class="form-select text-center font-bold appearance-none block px-3 py-1.5 text-white bg-secondary rounded-lg shadow-lg transition ease-in-out m-0" aria-label="Default select example">${each(versions, (version, index) => {
      return `}
                    <option${add_attribute("value", version, 0)} ${(index == 0 ? true : false) ? "selected" : ""}>${escape(version)}</option>`;
    })}</select>
            <a${add_attribute("href", `http://localhost:8080/download_apk?version=` + selected, 0)} download><button class="btn font-bold text-white py-5 px-12 rounded-lg shadow-lg bg-secondary" type="button">Télécharger
                </button></a>
            
            ${validate_component(Modal, "Modal").$$render(
      $$result,
      { this: modal },
      {
        this: ($$value) => {
          modal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"><h3 class="text-xl font-semibold text-gray-900 dark:text-white">Merci d&#39;avoir téléchargé DEDAL
                        </h3>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></div>
                    
                    <div class="p-6 space-y-6"><p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">Ça veut vraiment dire beaucoup pour nous
                        </p>
                        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">Vous allez être redirigé à la page d&#39;accueil bientôt
                        </p></div></div>`;
        }
      }
    )}</div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
