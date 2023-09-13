<svelte:head>
	<title>DEDAL: Contact</title>
</svelte:head>


<div class="h-screen bg-primary bg-gradient-to-tl from-secondary">
  <div class="py-10 px-72">
    <form action="/api/sendMail" method="POST" class="bg-white rounded space-y-2 p-6">
      <div>
        <form action="https://formsubmit.co/arthur.decovemacker@epitech.eu" method="POST">
          <label for="email" class="block font-bold text-Black">Name:</label>
          <input type="text" name="name" required>
          <label for="email" class="block font-bold text-Black">Message:</label>
          <input type="text" name="Message" required>
          <label for="email" class="block font-bold text-Black">Email:</label>
          <input type="email" name="email" required>
          <button type="submit" style="background-color: blue;" class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Send</button>
     </form>
      </div>

      <div class="text-center">
      </div>
    </form>
  </div>
</div>