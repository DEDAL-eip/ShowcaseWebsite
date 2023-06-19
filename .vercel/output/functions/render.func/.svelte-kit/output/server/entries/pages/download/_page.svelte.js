import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { versions = [] } = $$props;
  let { selected = void 0 } = $$props;
  if ($$props.versions === void 0 && $$bindings.versions && versions !== void 0)
    $$bindings.versions(versions);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  return `${$$result.head += `<!-- HEAD_svelte-v95g2a_START -->${$$result.title = `<title>DEDAL: Download</title>`, ""}<!-- HEAD_svelte-v95g2a_END -->`, ""}

<div class="flex min-h-screen bg-primary bg-gradient-to-tl from-secondary"><div class="m-auto text-center space-y-10"><div><img src="Smartphone_logo.png" class="m-auto" alt="Smartphone_logo">
            <p class="text-6xl text-white font-bold">Download DEDAL</p></div>
        <p class="text-2xl text-white tracking-widest">Take your backpacker&#39;s guide 2.0 with you on your device.</p>
        <div class="flex justify-center"><select id="version_select" class="form-select text-center font-bold appearance-none block px-3 py-1.5 text-white bg-secondary rounded-lg shadow-lg transition ease-in-out m-0" aria-label="Default select example">${each(versions, (version, index) => {
    return `}
                    <option${add_attribute("value", version, 0)} ${(index == 0 ? true : false) ? "selected" : ""}>${escape(version)}</option>`;
  })}</select>
            <a${add_attribute("href", `http://localhost:8080/download_apk?version=` + selected, 0)} download><button class="btn font-bold text-white py-5 px-12 rounded-lg shadow-lg bg-secondary" type="button" data-modal-toggle="defaultModal">Download
                </button></a>
            
            <div id="defaultModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed z-50 w-full md:inset-0 h-modal md:h-full"><div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"><h3 class="text-xl font-semibold text-gray-900 dark:text-white">Thanks you for download DEDAL
                            </h3>
                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></div>
                        
                        <div class="p-6 space-y-6"><p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">It really does mean a lot for us
                            </p>
                            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">You will be redirected to the homepage soon
                            </p></div></div></div></div></div></div></div>`;
});
export {
  Page as default
};
