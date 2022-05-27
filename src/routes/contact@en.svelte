<script>
  const submitStatus = ""

  function submitForm() {
    console.log("reee")
    fetch("/api/sendmail");
    console.log("reeeeeee")
  }
</script>

<svelte:head>
	<title>DEDAL: Contact</title>
</svelte:head>

<div class="h-screen bg-primary bg-gradient-to-tl from-secondary">
  <div class="py-10 px-72">
    {#if submitStatus == "submitting"}
        <p>Submitting...</p>
    {:else if submitStatus == "failed"}
        <p>Form submission failed</p>
    {:else if submitStatus == "success"}
        <p>Form submission successful</p>
    {:else}
        <form on:submit|preventDefault={submitForm} class="bg-white rounded space-y-2 p-6">
          <div class="text-secondary font-bold text-center text-4xl">Contact us</div>

          <div>
            <label for="email" class="block">Email:</label>
            <input id="email" name="email" type="email" class="rounded border" required />
          </div>
          <div>
            <label for="object" class="block">Object:</label>
            <input id="object" name="object" type="text" class="rounded border" required />
          </div>
          <div>
            <label for="message" class="block">Message:</label>
            <textarea id="message" name="message" type="text" class="rounded w-full h-60 border" required />
          </div>

          <div class="text-center">
            <input class="btn font-bold text-white py-5 px-12 rounded-lg shadow-lg bg-secondary" type="submit" value="Envoyer" data-modal-toggle="defaultModal"/>
          </div>
        </form>
    {/if}
  </div>
</div>