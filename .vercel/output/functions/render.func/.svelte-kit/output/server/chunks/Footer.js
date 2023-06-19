import { c as create_ssr_component } from "./index2.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="p-4 bg-white md:px-6 md:py-8"><div class="sm:flex sm:items-center sm:justify-between"><a href="/" class="flex items-center mb-4 sm:mb-0"><img src="/Dedal_logo.png" class="mr-3 h-8" alt="Dedal_logo">
            <span class="self-center text-2xl font-semibold whitespace-nowrap">DEDAL</span></a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"><li><a href="/" class="mr-4 hover:underline md:mr-6 ">About</a></li>
            <li><a href="/contact" class="hover:underline">Contact</a></li></ul></div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="/" class="hover:underline">DEDAL™</a> All Rights Reserved.
    </span></footer>`;
});
export {
  Footer as F
};
