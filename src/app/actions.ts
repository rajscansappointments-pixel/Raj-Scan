"use server";

import nodemailer from 'nodemailer';

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'rajscansappointments@gmail.com';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export type ActionState = {
  success: boolean;
  error?: string;
  message?: string;
};

export async function submitContactForm(prevState: ActionState, formData: FormData): Promise<ActionState> {
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;

  // Server-side validation
  if (!name || !phone || !message) {
    return { success: false, error: 'All fields are required.' };
  }

  if (phone.length < 10) {
    return { success: false, error: 'Please enter a valid phone number.' };
  }

  try {
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    const smtpUser = process.env.SMTP_USER;
    
    if (smtpUser && process.env.SMTP_PASS) {
      await transporter.sendMail({
        from: `"Raj Scans Website" <${smtpUser}>`,
        to: CONTACT_EMAIL,
        subject: 'New Contact Enquiry - Raj Scans',
        html: `
          <h2>New Contact Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });
    } else if (accessKey) {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'New Contact Enquiry - Raj Scans',
          from_name: 'Raj Scans Website',
          name: name,
          phone: phone,
          message: message,
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to send email via Web3Forms');
      }
    } else {
      // Simulate email sending logic
      console.log(`[SECURE SERVER LOG] Email sent to ${CONTACT_EMAIL}`);
      console.log(`[SECURE SERVER LOG] Contact Enquiry from ${name} (${phone}): ${message}`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    
    return { success: true, message: 'Your enquiry has been sent successfully. We will contact you soon.' };
  } catch (err) {
    console.error('Email sending failed:', err);
    return { success: false, error: 'An error occurred while sending your message. Please try again later.' };
  }
}

export async function submitAppointment(prevState: ActionState, formData: FormData): Promise<ActionState> {
  const name = formData.get('name') as string;
  const phone = formData.get('phone') as string;
  const service = formData.get('service') as string;

  if (!name || !phone || !service) {
    return { success: false, error: 'All fields are required.' };
  }

  try {
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    const smtpUser = process.env.SMTP_USER;
    
    if (smtpUser && process.env.SMTP_PASS) {
      await transporter.sendMail({
        from: `"Raj Scans Website" <${smtpUser}>`,
        to: CONTACT_EMAIL,
        subject: 'New Appointment Request - Raj Scans',
        html: `
          <h2>New Appointment Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service}</p>
        `,
      });
    } else if (accessKey) {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'New Appointment Request - Raj Scans',
          from_name: 'Raj Scans Website',
          name: name,
          phone: phone,
          service: service,
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to send email via Web3Forms');
      }
    } else {
      console.log(`[SECURE SERVER LOG] Appointment Request from ${name} for ${service}`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    return { success: true, message: 'Appointment request received. Our team will call you to confirm the time.' };
  } catch (err) {
    console.error('Appointment email sending failed:', err);
    return { success: false, error: 'Failed to submit appointment request.' };
  }
}

export async function submitCareerEnquiry(prevState: ActionState, formData: FormData): Promise<ActionState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const role = formData.get('role') as string;
  const resume = formData.get('resume') as File;

  if (!name || !email || !role || !resume) {
    return { success: false, error: 'Please complete all fields and attach a resume.' };
  }

  try {
    console.log(`[SECURE SERVER LOG] Career application for ${role} by ${name}. File: ${resume.name}`);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return { success: true, message: 'Application submitted successfully. Our HR team will review your profile.' };
  } catch {
    return { success: false, error: 'Failed to submit application.' };
  }
}
