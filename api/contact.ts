import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Email validation
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Message length validation
  if (message.trim().length < 10) {
    return res.status(400).json({ error: 'Message must be at least 10 characters' });
  }

  // Name length validation
  if (name.trim().length < 2) {
    return res.status(400).json({ error: 'Name must be at least 2 characters' });
  }

  try {
    // Send email using Resend
    const result = await resend.emails.send({
      from: 'website@massagebyjodie.com.au',
      to: 'jodie@massagebyjodie.com.au',
      replyTo: email,
      subject: 'New Contact Form Submission - Massage By Jodie',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #e8714f; border-bottom: 2px solid #e8714f; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="background-color: #fef7f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong style="color: #4d4049;">From:</strong> ${name}</p>
            <p><strong style="color: #4d4049;">Email:</strong> <a href="mailto:${email}" style="color: #e8714f;">${email}</a></p>
            <p><strong style="color: #4d4049;">Phone:</strong> ${phone || 'Not provided'}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #4d4049;">Message:</h3>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #e8714f; border-radius: 4px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>

          <hr style="border: none; border-top: 1px solid #e8e8e8; margin: 30px 0;">

          <p style="color: #666; font-size: 12px; font-style: italic;">
            This message was sent via the contact form at massagebyjodie.com.au<br>
            Sent at: ${new Date().toLocaleString('en-AU', {
              timeZone: 'Australia/Melbourne',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })} AEST
          </p>
        </div>
      `,
    });

    console.log('Email sent successfully:', result.data?.id);
    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      id: result.data?.id
    });

  } catch (error) {
    console.error('Email error:', error);

    // Check if it's a Resend API error
    if (error instanceof Error) {
      return res.status(500).json({
        error: 'Failed to send email',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }

    return res.status(500).json({ error: 'Failed to send email' });
  }
}