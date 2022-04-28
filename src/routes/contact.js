export const post = async ({ request }) => {
  //get this using prefill link
  const formID = "1FAIpQLScXiuL1jvIJ78Qt6q7Cl3S4gYUpD1b6nBvnpz-y6llO5KJ1sQ"
  const req = await request.formData();
  const name = await req.get("name");
  const email = await req.get("email");

  const res = await fetch(`https://docs.google.com/forms/d/e/${formID}/formResponse?usp=pp_url&entry.2015997712=${name}&entry.1886489237=${email}&submit=Submit`);
  if (res.status === 200) {
    return {
      status: 200,
      body: {
        message: "success",
      },
    };
  } else {
    return {
      status: 404,
      body: {
        message: "failed",
      },
    };
  }
};