import { c as create_ssr_component } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-tmnkoe_START -->${$$result.title = `<title>DEDAL: Contact</title>`, ""}<!-- HEAD_svelte-tmnkoe_END -->`, ""}

<div class="h-screen bg-primary bg-gradient-to-tl from-secondary"><div class="py-10 px-72"><form action="/api/sendMail" method="POST" class="bg-white rounded space-y-2 p-6"><div><form action="https://formsubmit.co/arthur.decovemacker@epitech.eu" method="POST"><label for="email" class="block">Name:</label>
          <input type="text" name="name" required>
          <label for="email" class="block">Message:</label>
          <input type="text" name="Message" required>
          <label for="email" class="block">Email:</label>
          <input type="email" name="email" required>
          <button type="submit">Send</button></form></div>

      <div class="text-center"></div></form></div></div>`;
});
export {
  Page as default
};
