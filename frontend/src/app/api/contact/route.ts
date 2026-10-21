import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { contactFormSchema } from '@/lib/validations'
import { siteConfig } from '@/lib/site-config'

const readString = (value: unknown): string =>
  typeof value === 'string' ? value.trim() : ''

const escapeHtml = (value: string): string => {
  const entities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }
  return value.replace(/[&<>"']/g, (character) => entities[character])
}

const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return null

  const port = Number(process.env.EMAIL_PORT) || 587
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port,
    secure: port === 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })
}

const emailTemplate = (data: {
  fullName: string
  email: string
  phone: string
  service: string
  message: string
}) => `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E2E2DC;">
    <div style="background: #111215; color: #FFFFFF; padding: 24px; border-bottom: 3px solid #9B1D20;">
      <h1 style="margin: 0; font-size: 20px; font-weight: 700;">LEMAIYAN'S TRAVELS</h1>
      <p style="margin: 6px 0 0; font-size: 12px; color: #A0A09A; text-transform: uppercase; letter-spacing: 0.08em;">Inquiry received via the Eldoret travel desk</p>
    </div>
    <div style="padding: 24px; background: #FAF9F7; font-size: 14px; color: #121316; line-height: 1.6;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; font-weight: bold; width: 140px; color: #525666;">Client Name:</td><td style="padding: 8px 0;">${escapeHtml(data.fullName)}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold; color: #525666;">Email Address:</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(data.email)}" style="color: #9B1D20;">${escapeHtml(data.email)}</a></td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold; color: #525666;">Phone Number:</td><td style="padding: 8px 0;"><a href="tel:${data.phone.replace(/[^+\d]/g, '')}" style="color: #121316; text-decoration: none;">${escapeHtml(data.phone)}</a></td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold; color: #525666;">Service Requested:</td><td style="padding: 8px 0; font-weight: 600; color: #9B1D20;">${escapeHtml(data.service)}</td></tr>
      </table>
      <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #E5E5E1;">
        <p style="font-weight: bold; margin-bottom: 8px; color: #525666;">Itinerary / Message Details:</p>
        <div style="background: #FFFFFF; border: 1px solid #E2E2DC; padding: 14px; white-space: pre-wrap; font-size: 13px;">${escapeHtml(data.message)}</div>
      </div>
    </div>
    <div style="background: #111215; color: #A0A09A; padding: 14px 24px; font-size: 11px; text-align: center;">Lemaiyan's Travels · Nandi Arcade Building, First Floor, Eldoret, Kenya</div>
  </div>
`

const mailUnavailable = () => NextResponse.json(
  {
    success: false,
    message: 'The online inquiry service is temporarily unavailable. Please call or email our travel desk directly.',
  },
  { status: 503 }
)

export async function POST(request: NextRequest) {
  try {
    let rawData: unknown
    try {
      rawData = await request.json()
    } catch {
      return NextResponse.json({ success: false, message: 'Please send a valid inquiry.' }, { status: 400 })
    }

    if (typeof rawData !== 'object' || rawData === null || Array.isArray(rawData)) {
      return NextResponse.json({ success: false, message: 'Please send a valid inquiry.' }, { status: 400 })
    }
    const body = rawData as Record<string, unknown>

    if (body.website || body.subject || body.honeypot || body.organization_stamp) {
      return NextResponse.json({ success: true, message: 'Inquiry received' })
    }

    const validation = contactFormSchema.safeParse({
      fullName: readString(body.fullName || body.name),
      email: readString(body.email),
      phone: readString(body.phone),
      service: readString(body.service),
      message: readString(body.message),
    })

    if (!validation.success) {
      const errors = validation.error.issues.map((issue) => issue.message)
      return NextResponse.json(
        { success: false, errors, message: errors[0] || 'Please check your inquiry and try again.' },
        { status: 400 }
      )
    }

    const transporter = createTransporter()
    if (!transporter) return mailUnavailable()

    const { fullName, email, phone, service, message } = validation.data
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL || siteConfig.email,
      replyTo: email,
      subject: `[Desk Inquiry] ${service.toUpperCase()} - ${fullName}`,
      html: emailTemplate({ fullName, email, phone, service, message }),
    })

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been sent to our travel desk. We will reply during desk hours.',
    })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'We could not send your inquiry. Please call or email our travel desk directly.',
      },
      { status: 500 }
    )
  }
}
