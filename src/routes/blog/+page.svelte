<svelte:head>
	<title>DEDAL: Contact</title>
</svelte:head>



<div class="container">
  <h1 style="margin-left: 600px;" class="font-bold text-white text-4xl">Dedal Contact form</h1>
  <form target="_blank" action="https://formsubmit.co/arthur.decovemacker@epitech.eu" method="POST">
    <div class="form-group">
      <div class="form-row">
        <div class="col" style="text-align: center;">
          <input type="text" name="name" class="form-control" placeholder="Full Name" required>
        </div>
        <div class="col" style="text-align: center;" >
          <input type="email" name="email" class="form-control" placeholder="Email Address" required>
        </div>
      </div>
    </div>
    <div class="form-group" style="text-align: center;">
      <textarea placeholder="Your Message" class="form-control" name="message" rows="15" cols="70" required></textarea>
    </div>
    <button type="submit" style="margin-left: 700px; background-color: white; border: 2px solid black; padding: 15px 32px; cursor: pointer;" class="font-bold btn-dark btn-block">Submit Form</button>
  </form>
</div>