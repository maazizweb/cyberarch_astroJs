// src/utils/email.ts

import emailjs from 'emailjs-com';

export async function sendEmail(formData: Record<string, string>) {
  emailjs.init('GC651imGW-EZCLx62'); // ✅ Your PUBLIC KEY here

  try {
    const result = await emailjs.send(
      'service_3emapbm',       // ✅ Your service ID
      'template_wyg4bop',      // ✅ Your template ID
      formData                 // ✅ Plain object matching template variables
    );
    return result;
  } catch (err) {
    throw err;
  }
}
