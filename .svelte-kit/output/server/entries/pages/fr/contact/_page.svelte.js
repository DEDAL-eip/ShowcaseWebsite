import { c as create_ssr_component } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-tmnkoe_START -->${$$result.title = `<title>DEDAL: Contact</title>`, ""}<!-- HEAD_svelte-tmnkoe_END -->`, ""}

<div class="h-screen bg-primary bg-gradient-to-tl from-secondary"><div class="py-10 px-72"><form action="/api/sendMail" method="POST" class="bg-white rounded space-y-2 p-6"><div class="text-secondary font-bold text-center text-4xl">Nous contacter</div>

      <div><label for="email" class="block">Email:</label>
        <input id="email" name="email" type="email" class="rounded border" required></div>
      <div><label for="object" class="block">Objet:</label>
        <input id="object" name="object" type="text" class="rounded border" required></div>
      <div><label for="message" class="block">Message:</label>
        <textarea id="message" name="message" type="text" class="rounded w-full h-60 border" required></textarea></div>

      <div class="text-center"><input class="btn font-bold text-white py-5 px-12 rounded-lg shadow-lg bg-secondary" type="submit" value="Envoyer" data-modal-toggle="defaultModal"></div></form></div></div>`;
});
export {
  Page as default
};
