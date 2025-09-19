const sgMail = require("@sendgrid/mail");

let fetch;
if (!globalThis.fetch) {
  fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
} else {
  fetch = globalThis.fetch;
}

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers, body: "" };
  if (event.httpMethod !== "POST")
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };

  try {
    const { name, email, phone, company, subject, message, recaptchaToken } = JSON.parse(event.body);
    if (!name || !email || !message || !recaptchaToken)
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Missing required fields" }) };

    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) throw new Error("RECAPTCHA_SECRET_KEY not set");

    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(recaptchaToken)}`,
    });

    const verifyJson = await verifyRes.json();
    if (!verifyJson.success)
      return { statusCode: 400, headers, body: JSON.stringify({ error: "reCAPTCHA verification failed" }) };

    const emailTo = process.env.EMAIL_TO;
    const sendGridKey = process.env.SENDGRID_API_KEY;
    const emailFrom = process.env.EMAIL_FROM || emailTo;
    if (!emailTo || !sendGridKey)
      return { statusCode: 500, headers, body: JSON.stringify({ error: "Server email configuration missing" }) };

    sgMail.setApiKey(sendGridKey);

    const msg = {
      to: emailTo,
      from: { email: emailFrom, name: "GOODMAN & GOLDSMITH Website" },
      replyTo: email,
      subject: `[Website Contact] ${subject || "New Contact Form Submission"}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\nPhone: ${phone || "Not provided"}\nSubject: ${subject || "Not provided"}\n\nMessage:\n${message}`.trim(),
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
<h2 style="color: #0b5ed7;">New Contact Form Submission</h2>
<ul>
<li><strong>Name:</strong> ${name}</li>
<li><strong>Email:</strong> ${email}</li>
<li><strong>Company:</strong> ${company || "Not provided"}</li>
<li><strong>Phone:</strong> ${phone || "Not provided"}</li>
<li><strong>Subject:</strong> ${subject || "Not provided"}</li>
</ul>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, "<br>")}</p>
</div>`,
    };

    await sgMail.send(msg);
    return { statusCode: 200, headers, body: JSON.stringify({ ok: true, message: "Message sent successfully" }) };
  } catch (error) {
    console.error("Error sending email:", error);
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Failed to send message", details: error.message }) };
  }
};
