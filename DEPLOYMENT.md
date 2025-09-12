# GOODMAN & GOLDSMITH - Deployment Guide

## Environment Variables Setup

### 1. Copy Environment Variables
Copy `env.example` to `.env` and fill in your actual values:

```bash
cp env.example .env
```

### 2. Required Environment Variables

#### reCAPTCHA Configuration
1. Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Create a new site with reCAPTCHA v2 checkbox
3. Add your domain(s) to the site list
4. Copy the Site Key and Secret Key to your environment variables

```env
RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

#### SMTP Configuration
Choose one of the following email services:

**Option 1: Gmail**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

**Option 2: SendGrid**
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

**Option 3: Mailgun**
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-smtp-user
SMTP_PASS=your-mailgun-smtp-password
```

#### Email Configuration
```env
EMAIL_TO=contact@goodmangoldsmith.com
```

## Deployment Options

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Set Environment Variables:**
   - Go to your Vercel dashboard
   - Select your project
   - Go to Settings > Environment Variables
   - Add all the environment variables from your `.env` file

4. **Redeploy:**
   ```bash
   vercel --prod
   ```

### Option 2: Netlify

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `build`

3. **Set Environment Variables:**
   - Go to Site settings > Environment variables
   - Add all the environment variables from your `.env` file

4. **Configure Functions:**
   - The serverless function is already configured in `netlify/functions/send-contact.js`
   - No additional configuration needed

### Option 3: Static Hosting (Alternative)

If you can't use serverless functions, you can use a third-party service:

1. **Formspree:**
   - Sign up at [Formspree.io](https://formspree.io)
   - Create a new form
   - Replace the fetch URL in `Contact.tsx` with your Formspree endpoint

2. **Netlify Forms:**
   - Add `netlify` attribute to your form
   - No serverless function needed

## Testing the Contact Form

1. **Test with reCAPTCHA disabled (development):**
   - Set `RECAPTCHA_SITE_KEY=test` and `RECAPTCHA_SECRET_KEY=test`
   - The form will work without actual reCAPTCHA verification

2. **Test with real reCAPTCHA:**
   - Use your actual reCAPTCHA keys
   - Test the form submission
   - Check your email for the contact form submission

## Troubleshooting

### Common Issues

1. **reCAPTCHA not loading:**
   - Check that your domain is added to the reCAPTCHA site
   - Verify the site key is correct

2. **Email not sending:**
   - Check SMTP credentials
   - Verify EMAIL_TO is set
   - Check server logs for errors

3. **CORS errors:**
   - Ensure the API endpoint URL is correct
   - Check that CORS headers are set in the serverless function

### Development vs Production

- **Development:** Uses `src/api/send-contact.js`
- **Production (Vercel):** Uses `src/api/send-contact.js`
- **Production (Netlify):** Uses `netlify/functions/send-contact.js`

## Security Notes

1. **Never commit `.env` files to version control**
2. **Use strong, unique passwords for SMTP**
3. **Regularly rotate API keys and passwords**
4. **Monitor serverless function logs for suspicious activity**

## Support

For deployment issues, check:
1. Serverless function logs
2. Environment variable configuration
3. reCAPTCHA site configuration
4. SMTP service status

