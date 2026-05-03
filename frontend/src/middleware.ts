import { NextRequest, NextResponse } from 'next/server'
import { createMiddleware } from 'next-intl/middleware'

// Security middleware configuration
const securityConfig = {
  // Rate limiting
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
  },
  
  // Security headers
  headers: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  },
  
  // CSRF protection
  csrf: {
    enabled: true,
    cookieName: '_csrf',
    headerName: 'x-csrf-token',
  },
  
  // Bot protection
  botProtection: {
    enabled: true,
    suspiciousPatterns: [
      /bot/i,
      /crawler/i,
      /spider/i,
      /scraper/i,
    ],
  },
}

// Rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map()

function get_client_ip(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const real = request.headers.get('x-real-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  if (real) {
    return real.trim()
  }
  
  return request.ip || 'unknown'
}

function is_bot(request: NextRequest): boolean {
  const userAgent = request.headers.get('user-agent') || ''
  const suspiciousPatterns = securityConfig.botProtection.suspiciousPatterns
  
  return suspiciousPatterns.some(pattern => pattern.test(userAgent))
}

function check_rate_limit(ip: string): boolean {
  const now = Date.now()
  const windowStart = now - securityConfig.rateLimit.windowMs
  
  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + securityConfig.rateLimit.windowMs })
    return true
  }
  
  const clientData = rateLimitStore.get(ip)
  
  if (now > clientData.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + securityConfig.rateLimit.windowMs })
    return true
  }
  
  if (clientData.count >= securityConfig.rateLimit.max) {
    return false
  }
  
  clientData.count += 1
  rateLimitStore.set(ip, clientData)
  return true
}

function sanitize_input(data: any): any {
  if (typeof data !== 'object' || data === null) {
    return data
  }
  
  const sanitized: any = {}
  
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      // Basic XSS prevention
      sanitized[key] = value
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
        .replace(/javascript:/gi, '')
        .replace(/on\w+\s*=/gi, '')
        .trim()
    } else if (typeof value === 'object' && value !== null) {
      sanitized[key] = sanitize_input(value)
    } else {
      sanitized[key] = value
    }
  }
  
  return sanitized
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Add security headers
  Object.entries(securityConfig.headers).forEach(([key, value]) => {
    response.headers.set(key, value)
  })
  
  // Get client IP
  const ip = get_client_ip(request)
  
  // Bot protection
  if (securityConfig.botProtection.enabled && is_bot(request)) {
    return new NextResponse('Access denied', { 
      status: 403,
      headers: response.headers
    })
  }
  
  // Rate limiting
  if (!check_rate_limit(ip)) {
    return new NextResponse(JSON.stringify({
      error: 'Rate limit exceeded',
      message: securityConfig.rateLimit.message
    }), {
      status: 429,
      headers: {
        'Content-Type': 'application/json',
        ...Object.fromEntries(response.headers.entries())
      }
    })
  }
  
  // Add security headers to response
  response.headers.set('X-RateLimit-Limit', securityConfig.rateLimit.max.toString())
  response.headers.set('X-RateLimit-Remaining', Math.max(0, securityConfig.rateLimit.max - (rateLimitStore.get(ip)?.count || 0)).toString())
  
  return response
}

export const config = {
  matcher: [
    '/((?!api/health|_next/static|_next/image|favicon.ico).*)',
  ],
}
