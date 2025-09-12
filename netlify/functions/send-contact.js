const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  const { name, email, phone, company, subject, message, token } = JSON.parse(event.body);

  // Validate required fields
  if (!name || !email || !message || !token) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ error: "Missing required fields" })
    };
  }

  try {
    // Verify reCAPTCHA
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
      console.error("RECAPTCHA_SECRET_KEY not configured");
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "Server configuration error" })
      };
    }

    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`
    });

    const verifyJson = await verifyRes.json();
    if (!verifyJson.success) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "reCAPTCHA verification failed" })
      };
    }

    // Check if email should be sent (only if EMAIL_TO is configured)
    const emailTo = process.env.EMAIL_TO;
    if (!emailTo) {
      console.log("EMAIL_TO not configured, skipping email send");
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ ok: true, message: "Form submitted successfully (email not configured)" })
      };
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // Email content
    const mailOptions = {
      from: `"GOODMAN & GOLDSMITH Website" <${process.env.SMTP_USER}>`,
      to: emailTo,
      subject: `[Website Contact] ${subject || "New Contact Form Submission"}`,
      text: `
New contact form submission from GOODMAN & GOLDSMITH website:

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Phone: ${phone || 'Not provided'}
Subject: ${subject || 'Not provided'}

Message:
${message}

---
This message was sent from the contact form on the GOODMAN & GOLDSMITH website.
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0b5ed7;">New Contact Form Submission</h2>
          <p>New contact form submission from GOODMAN & GOLDSMITH website:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Name:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Email:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Company:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${company || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Phone:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Subject:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${subject || 'Not provided'}</td>
            </tr>
          </table>
          
          <h3 style="color: #0b5ed7;">Message:</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0b5ed7; margin: 20px 0;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">
            This message was sent from the contact form on the GOODMAN & GOLDSMITH website.
          </p>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true })
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to send message" })
    };
  }
};

