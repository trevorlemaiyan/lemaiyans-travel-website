import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { contactFormSchema } from '@/lib/validations'
import { siteConfig } from '@/lib/site-config'

const sanitizeString = (value: unknown): string => {
  if (typeof value !== 'string') return ''
  return value
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim()
}

const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return null
  }

  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })
}

export async function POST(request: NextRequest) {
  try {
    const rawData = await request.json()

    // Bot detection via honeypot fields
    if (
      rawData.website ||
      rawData.subject ||
      rawData.honeypot ||
      rawData.organization_stamp
    ) {
      return NextResponse.json({ success: true, message: 'Inquiry received' })
    }

    // Sanitize input strings
    const sanitizedData = {
      fullName: sanitizeString(rawData.fullName || rawData.name),
      email: sanitizeString(rawData.email),
      phone: sanitizeString(rawData.phone),
      service: sanitizeString(rawData.service),
      message: sanitizeString(rawData.message),
    }

    // Validate using Zod schema
    const validation = contactFormSchema.safeParse(sanitizedData)
    if (!validation.success) {
      const fieldErrors = validation.error.issues.map((issue) => issue.message)
      return NextResponse.json(
        {
          success: false,
          errors: fieldErrors,
          message: fieldErrors[0] || 'Please correct the highlighted form errors.',
        },
        { status: 400 }
      )
    }

    const { fullName, email, phone, service, message } = validation.data
    const contactEmail = process.env.CONTACT_EMAIL || siteConfig.email
    const transporter = createTransporter()

    if (transporter) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: contactEmail,
        replyTo: email,
        subject: `[Desk Inquiry] ${service.toUpperCase()} - ${fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E2E2DC;">
            <div style="background: #111215; color: #FFFFFF; padding: 24px; border-bottom: 3px solid #9B1D20;">
              <h1 style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em;">LEMAIYAN'S TRAVELS</h1>
              <p style="margin: 6px 0 0; font-size: 12px; color: #A0A09A; text-transform: uppercase; letter-spacing: 0.08em;">
                Inquiry Received via Web Portal (Eldoret Desk)
              </p>
            </div>
            <div style="padding: 24px; background: #FAF9F7; font-size: 14px; color: #121316; line-height: 1.6;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #525666;">Client Name:</td>
                  <td style="padding: 8px 0;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #525666;">Email Address:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #9B1D20;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #525666;">Phone Number:</td>
                  <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #121316; text-decoration: none;">${phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #525666;">Service Requested:</td>
                  <td style="padding: 8px 0; font-weight: 600; color: #9B1D20;">${service}</td>
                </tr>
              </table>
              <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #E5E5E1;">
                <p style="font-weight: bold; margin-bottom: 8px; color: #525666;">Itinerary / Message Details:</p>
                <div style="background: #FFFFFF; border: 1px solid #E2E2DC; padding: 14px; white-space: pre-wrap; font-size: 13px;">${message}</div>
              </div>
            </div>
            <div style="background: #111215; color: #73736C; padding: 14px 24px; font-size: 11px; text-align: center;">
              Lemaiyan's Travels · Nandi Arcade Building, 1st Floor, Eldoret, Kenya
            </div>
          </div>
        `,
      })
    } else {
      console.log('Contact form submission (email credentials not configured):', {
        fullName,
        email,
        phone,
        service,
        message,
        receivedAt: new Date().toISOString(),
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been received. Our travel desk will contact you within 60 minutes.',
    })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'A server error occurred. Please contact our desk directly by telephone.',
      },
      { status: 500 }
    )
  }
}
