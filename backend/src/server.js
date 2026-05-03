const express = require('express')
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express()
const PORT = process.env.PORT || 5000

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://www.googletagmanager.com"],
      connectSrc: ["'self'", "https://www.google-analytics.com"],
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}))

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
}))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.',
    resetTime: new Date(Date.now() + 15 * 60 * 1000).toISOString()
  },
  standardHeaders: true,
  legacyHeaders: false,
})

app.use('/api/', limiter)

// Body parsing with size limit
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Input validation and sanitization
const validateAndSanitize = (data) => {
  const sanitized = {}
  const allowedFields = ['name', 'email', 'phone', 'service', 'message', 'consent']
  
  for (const [key, value] of Object.entries(data)) {
    if (!allowedFields.includes(key)) {
      continue // Skip unexpected fields
    }
    
    if (typeof value === 'string') {
      // Basic XSS prevention
      sanitized[key] = value
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
        .replace(/javascript:/gi, '')
        .replace(/on\w+\s*=/gi, '')
        .trim()
    } else {
      sanitized[key] = value
    }
  }
  
  return sanitized
}

// Form validation
const validateForm = (data) => {
  const errors = []
  
  // Name validation
  if (!data.name || data.name.length < 2 || data.name.length > 100) {
    errors.push('Name must be between 2 and 100 characters')
  } else if (!/^[a-zA-Z\s'-]+$/.test(data.name)) {
    errors.push('Name can only contain letters, spaces, hyphens, and apostrophes')
  }
  
  // Email validation
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email address is required')
  }
  
  // Phone validation
  if (!data.phone || !/^[\+]?[0-9\s\-\(\)]{10,20}$/.test(data.phone)) {
    errors.push('Valid phone number is required')
  }
  
  // Service validation
  if (!data.service) {
    errors.push('Service selection is required')
  }
  
  // Message validation
  if (!data.message || data.message.length < 10 || data.message.length > 1000) {
    errors.push('Message must be between 10 and 1000 characters')
  }
  
  // Consent validation
  if (!data.consent) {
    errors.push('Consent to be contacted is required')
  }
  
  return errors
}

// Email configuration
const transporter = nodemailer.createTransporter({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

// Bot detection via honeypot
const isBot = (req) => {
  const body = req.body
  return body.website || body.subject || body.honeypot
}

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    // Bot detection
    if (isBot(req)) {
      // Silently fail for bots
      return res.status(200).json({ success: true, message: 'Message received' })
    }
    
    // Validate and sanitize input
    const sanitizedData = validateAndSanitize(req.body)
    const validationErrors = validateForm(sanitizedData)
    
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        errors: validationErrors,
        message: 'Please correct the errors and try again.'
      })
    }
    
    // Prepare email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@lemaiyanstravels.com',
      subject: `New Contact Form Submission: ${sanitizedData.service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #c61217, #dc2626); color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Lemaiyan's Travels</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">New Contact Form Submission</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px 20px;">
            <h2 style="color: #333; margin: 0 0 20px 0;">Contact Details</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${sanitizedData.name}</p>
              <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${sanitizedData.email}</p>
              <p style="margin: 0 0 10px 0;"><strong>Phone:</strong> ${sanitizedData.phone}</p>
              <p style="margin: 0 0 10px 0;"><strong>Service:</strong> ${sanitizedData.service}</p>
              <p style="margin: 0 0 10px 0;"><strong>Consent:</strong> ${sanitizedData.consent ? 'Yes' : 'No'}</p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px;">
              <h3 style="color: #333; margin: 0 0 15px 0;">Message:</h3>
              <p style="color: #666; line-height: 1.6; margin: 0; white-space: pre-wrap;">${sanitizedData.message}</p>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e9ecef;">
              <p style="color: #666; font-size: 12px; margin: 0;">
                This message was sent from the contact form on lemaiyanstravels.com<br>
                IP Address: ${req.ip || 'Unknown'}<br>
                Timestamp: ${new Date().toISOString()}
              </p>
            </div>
          </div>
        </div>
      `
    }
    
    // Send email
    await transporter.sendMail(mailOptions)
    
    // Log the submission (in production, use a proper logging system)
    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      ip: req.ip,
      data: sanitizedData
    })
    
    res.status(200).json({
      success: true,
      message: 'Message sent successfully! We will contact you within 24 hours.'
    })
    
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err)
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  })
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
  console.log(`📧 Email service configured`)
  console.log(`🔒 Security middleware active`)
})
