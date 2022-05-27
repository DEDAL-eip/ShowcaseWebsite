import sgMail from "@sendgrid/mail";
sgMail.setApiKey(import.meta.env.VITE_SENDGRID);

export async function get({ page }) {
    console.log("rock")
    const msg = {
        to: "seraphin.perrot@gmail.com",
        from: "test@example.com",
        subject: "Sending with SendGrid is Fun",
        text: "and easy to do anywhere, even with Node.js",
        html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    console.log("Form submitted");
    const output = await sgMail.send(msg);
    
    return {
        body: output,
    };
}