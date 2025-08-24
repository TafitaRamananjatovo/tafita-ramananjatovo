import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_7gcls5l'; // You'll get this from EmailJS dashboard
const EMAILJS_TEMPLATE_ID = 'template_9crx3rd'; // You'll get this from EmailJS dashboard
const EMAILJS_PUBLIC_KEY = 'QBgbWyYOcg2CiaA23'; // You'll get this from EmailJS dashboard

export interface EmailData {
  senderEmail: string;
  message: string;
}

export const sendEmailWithEmailJS = async (data: EmailData): Promise<{ success: boolean; error?: string }> => {
  try {
    const templateParams = {
      from_email: data.senderEmail,
      message: data.message,
      to_email: 'tafita.ramananjatovo@gmail.com',
    };

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    if (result.status === 200) {
      return { success: true };
    } else {
      return { success: false, error: 'Failed to send email' };
    }
  } catch (error) {
    console.error('EmailJS error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    };
  }
}; 