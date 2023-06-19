import { c as create_ssr_component, a as subscribe, v as validate_component } from "./index2.js";
import { p as page } from "./stores.js";
const ApkDownloadButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { apkFileName: apkFileName2 } = $$props;
  if ($$props.apkFileName === void 0 && $$bindings.apkFileName && apkFileName2 !== void 0)
    $$bindings.apkFileName(apkFileName2);
  return `<button>Download APK</button>`;
});
let apkFileName = "test.txt";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_page();
  return `${validate_component(ApkDownloadButton, "ApkDownloadButton").$$render($$result, { apkFileName }, {}, {})}

<header class="w-full z-50 sticky top-0 flex items-center px-2 text-lg backdrop-blur-sm transition-transform ease-in md:px-6 bg-white"><nav class="flex flex-grow"><a href="/" class="mr-4 text-2xl font-thin md:mr-8"><img src="/Dedal_logo.png" class="mr-3 h-6 sm:h-9" alt="Dedal_logo">
            <div class="text-2xl font-semibold whitespace-nowrap">DEDAL
            </div></a>
        <ul class="mr-4 font-bold flex flex-grow items-center gap-4 md:gap-8"><li><a href="/">Home</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/roadmap">roadmap</a></li>
            <li><a href="/nouveauté">nouveauté</a></li>
            <li><a href="/Download">Download</a></li></ul></nav>
    <div class="flex items-center gap-4 md:gap-8"><button>🇫🇷</button>
        </div></header>`;
});
export {
  Header as H
};
