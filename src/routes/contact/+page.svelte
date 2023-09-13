<svelte:head>
	<title>DEDAL: Contact</title>
</svelte:head>



<div class="container">
  <h1 style="margin-left: 700px;">Dedal Contact form</h1>
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
      <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" style="margin-left: 700px; background-color: ivory;" class="btn btn-lg btn-dark btn-block">Submit Form</button>
  </form>
</div>