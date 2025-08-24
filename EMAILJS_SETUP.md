# EmailJS Setup Guide

## What is EmailJS?
EmailJS is a free service that allows you to send emails directly from your frontend without needing a backend server. It's perfect for portfolio contact forms!

## Setup Steps:

### 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account
- Verify your email

### 2. Create Email Service
- In your EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose "Gmail" (or your preferred email provider)
- Connect your Gmail account (tafita.ramananjatovo@gmail.com)
- Note down the **Service ID**

### 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template:

```html
Subject: New Contact Form Message from {{from_email}}

Hello Tafita,

You have received a new message from your portfolio contact form:

From: {{from_email}}
Message: {{message}}

Best regards,
Your Portfolio Contact Form
```

- Save the template and note down the **Template ID**

### 4. Get Your Public Key
- Go to "Account" → "API Keys"
- Copy your **Public Key**

### 5. Update Configuration
Update the `lib/emailService.ts` file with your actual values:

```typescript
const EMAILJS_SERVICE_ID = 'your_actual_service_id';
const EMAILJS_TEMPLATE_ID = 'your_actual_template_id';
const EMAILJS_PUBLIC_KEY = 'your_actual_public_key';
```

### 6. Test Your Form
- Fill out the contact form on your portfolio
- Submit and check if you receive the email
- Check the browser console for any errors

## Free Tier Limits:
- **100 emails per month** (perfect for a portfolio!)
- No credit card required
- Reliable delivery

## Alternative Free Options:

### Option 2: Formspree
- Go to [formspree.io](https://formspree.io)
- Create account and form
- Get 50 submissions/month free
- Update form action to your Formspree endpoint

### Option 3: Netlify Forms
- Deploy to Netlify
- Forms are automatically handled
- 100 submissions/month free
- No configuration needed

## Benefits of EmailJS:
✅ **Completely free** for portfolio use  
✅ **No backend required**  
✅ **Reliable delivery**  
✅ **Easy to set up**  
✅ **Professional templates**  

## Troubleshooting:
- Check browser console for errors
- Verify all IDs are correct
- Ensure Gmail account is properly connected
- Check spam folder for test emails

Your contact form will now work without any paid services! 