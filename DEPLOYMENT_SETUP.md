# Deployment Setup Guide

## Environment Variables Required

To deploy this website on Netlify with full functionality, you need to set up the following environment variables in your Netlify dashboard:

### 1. reCAPTCHA Configuration ✅ COMPLETED
- `REACT_APP_RECAPTCHA_SITE_KEY`: 6Lf2nsorAAAAAJPs6DcDQw60JmKj7d_HXO_jDhsH
- `REACT_APP_RECAPTCHA_SECRET_KEY`: 6Lf2nsorAAAAABgG1lxGcd1EDg_m-ySk_EPrlRyb-

### 2. EmailJS Configuration
- `REACT_APP_EMAILJS_PUBLIC_KEY`: rRA_wmPsqw0tN3MUT
- `REACT_APP_EMAILJS_SERVICE_ID`: service_8ajtiw1
- `REACT_APP_EMAILJS_TEMPLATE_ID`: template_4j1dbfs

## Setup Instructions

### Step 1: Configure reCAPTCHA
1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Create a new site or edit existing one
3. Add your Netlify domain (e.g., `https://helpful-gaufre-d1f4aa.netlify.app/`) to the domain list
4. Copy the Site Key and Secret Key
5. Add them to Netlify environment variables

### Step 2: Configure EmailJS ✅ COMPLETED
Your EmailJS is already configured with:
- **Service ID**: service_8ajtiw1
- **Template ID**: template_4j1dbfs  
- **Public Key**: rRA_wmPsqw0tN3MUT

**Important**: Make sure your EmailJS template includes these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{company}}` - Company name
   - `{{phone}}` - Phone number
   - `{{subject}}` - Subject line
   - `{{message}}` - Message content
   - `{{to_email}}` - Recipient email (goodmangoldsmithltd@gmail.com)

### Step 3: Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set the build command to: `npm run build`
3. Set the publish directory to: `build`
4. Add all environment variables in Netlify dashboard
5. Deploy!

## 🚀 YOUR EXACT NEXT STEPS

### 1. Set Environment Variables in Netlify
Go to your Netlify dashboard → Site settings → Environment variables and add:

```
REACT_APP_EMAILJS_PUBLIC_KEY = rRA_wmPsqw0tN3MUT
REACT_APP_EMAILJS_SERVICE_ID = service_8ajtiw1
REACT_APP_EMAILJS_TEMPLATE_ID = template_4j1dbfs
REACT_APP_RECAPTCHA_SITE_KEY = 6Lf2nsorAAAAAJPs6DcDQw60JmKj7d_HXO_jDhsH
REACT_APP_RECAPTCHA_SECRET_KEY = 6Lf2nsorAAAAABgG1lxGcd1EDg_m-ySk_EPrlRyb-
```

### 2. Configure reCAPTCHA ✅ COMPLETED
Your reCAPTCHA is already configured with:
- **Site Key**: 6Lf2nsorAAAAAJPs6DcDQw60JmKj7d_HXO_jDhsH
- **Secret Key**: 6Lf2nsorAAAAABgG1lxGcd1EDg_m-ySk_EPrlRyb-

**Important**: Make sure your reCAPTCHA site includes your Netlify domain: `https://helpful-gaufre-d1f4aa.netlify.app/`

### 3. Verify EmailJS Template
Make sure your EmailJS template (template_4j1dbfs) includes all the required variables listed above.

### 4. Deploy and Test
1. Trigger a new deployment in Netlify
2. Test the contact form on your live site
3. Check that emails arrive at goodmangoldsmithltd@gmail.com

## Features Implemented

✅ **reCAPTCHA**: Fixed to work on Netlify with proper domain configuration
✅ **Contact Form**: Fully functional using EmailJS (no backend required)
✅ **LinkedIn Logo**: Updated to official LinkedIn logo
✅ **Email Sending**: Users can send messages directly to your email
✅ **Form Validation**: All existing validation and UI preserved
✅ **Toast Notifications**: Success/error messages maintained

## Testing

After deployment:
1. Test the contact form with a real submission
2. Verify reCAPTCHA works on your domain
3. Check that emails are received in your inbox
4. Confirm LinkedIn logo displays correctly

## Troubleshooting

- If reCAPTCHA doesn't work: Check that your domain is added to reCAPTCHA settings
- If emails don't send: Verify EmailJS configuration and template variables
- If build fails: Check that all environment variables are set correctly
