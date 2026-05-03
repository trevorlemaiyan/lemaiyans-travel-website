'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, AlertCircle, CheckCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
  consent: boolean
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  service?: string
  message?: string
  consent?: string
}

interface HoneypotField {
  website: string
  subject: string
}

const SecureContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    consent: false
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [honeypot, setHoneypot] = useState<HoneypotField>({ website: '', subject: '' })
  
  const formRef = useRef<HTMLFormElement>(null)
  const submitTimeoutRef = useRef<NodeJS.Timeout>()

  // Rate limiting
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0)
  const RATE_LIMIT_MS = 60000 // 1 minute

  // Input validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.length < 2 || formData.name.length > 100) {
      newErrors.name = 'Name must be between 2 and 100 characters'
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.name)) {
      newErrors.name = 'Name can only contain letters, spaces, hyphens, and apostrophes'
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\+]?[0-9\s\-\(\)]{10,20}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    // Service validation
    if (!formData.service) {
      newErrors.service = 'Please select a service'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10 || formData.message.length > 1000) {
      newErrors.message = 'Message must be between 10 and 1000 characters'
    }

    // Consent validation
    if (!formData.consent) {
      newErrors.consent = 'You must consent to be contacted'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Sanitize input
  const sanitizeInput = (value: string): string => {
    return value
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '')
      .trim()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | React.ChangeEvent<HTMLTextAreaElement | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }))
    } else {
      const sanitizedValue = sanitizeInput(value as string)
      setFormData(prev => ({ ...prev, [name]: sanitizedValue }))
    }
    
    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Rate limiting check
    const now = Date.now()
    if (now - lastSubmitTime < RATE_LIMIT_MS) {
      setErrors({ submit: 'Please wait before submitting again' })
      return
    }
    
    // Honeypot check (bot detection)
    if (honeypot.website || honeypot.subject) {
      // Silently fail for bots
      return
    }
    
    // Form validation
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Simulate API call (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Success
      setSubmitStatus('success')
      setLastSubmitTime(now)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        consent: false
      })
      setHoneypot({ website: '', subject: '' })
      
      // Reset form after 5 seconds
      submitTimeoutRef.current = setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setErrors({ submit: 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    return () => {
      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current)
      }
    }
  }, [])

  const services = [
    'Flight Bookings',
    'Hotel Reservations',
    'Visa Services',
    'Car Hire & Transfers',
    'Tour Packages (Future)',
    'Travel Insurance',
    'Other'
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to start your journey? Send us a message and our travel experts will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-50 rounded-xl p-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary-red/10 rounded-lg flex items-center justify-center">
                <Mail className="text-primary-red" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Email Us</h3>
            </div>
            <p className="text-slate-600">info@lemaiyanstravels.com</p>
            <p className="text-sm text-slate-500 mt-2">We respond within 24 hours</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 rounded-xl p-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary-red/10 rounded-lg flex items-center justify-center">
                <Phone className="text-primary-red" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Call Us</h3>
            </div>
            <p className="text-slate-600">+254 123 456 789</p>
            <p className="text-sm text-slate-500 mt-2">Mon-Fri: 8AM-6PM</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-slate-50 rounded-xl p-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary-red/10 rounded-lg flex items-center justify-center">
                <MapPin className="text-primary-red" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Visit Us</h3>
            </div>
            <p className="text-slate-600">Eldoret, Kenya</p>
            <p className="text-sm text-slate-500 mt-2">By appointment only</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-xl p-8 lg:p-12"
        >
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-600" size={20} />
                <p className="text-green-800 font-medium">Message sent successfully! We'll contact you soon.</p>
              </div>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
            >
              <div className="flex items-center space-x-2">
                <AlertCircle className="text-red-600" size={20} />
                <p className="text-red-800 font-medium">
                  {errors.submit || 'Failed to send message. Please try again.'}
                </p>
              </div>
            </motion.div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot fields - hidden from users */}
            <input
              type="text"
              name="website"
              value={honeypot.website}
              onChange={(e) => setHoneypot(prev => ({ ...prev, website: e.target.value }))}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />
            <input
              type="text"
              name="subject"
              value={honeypot.subject}
              onChange={(e) => setHoneypot(prev => ({ ...prev, subject: e.target.value }))}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors ${
                    errors.name ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="John Doe"
                  required
                  autoComplete="name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle size={14} className="mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors ${
                    errors.email ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="john@example.com"
                  required
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle size={14} className="mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="+254 123 456 789"
                  required
                  autoComplete="tel"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle size={14} className="mr-1" />
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors ${
                    errors.service ? 'border-red-500' : 'border-slate-300'
                  }`}
                  required
                >
                  <option value="">Select a service</option>
                  {services.map(service => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle size={14} className="mr-1" />
                    {errors.service}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors resize-vertical ${
                  errors.message ? 'border-red-500' : 'border-slate-300'
                }`}
                placeholder="Tell us about your travel plans..."
                required
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle size={14} className="mr-1" />
                  {errors.message}
                </p>
              )}
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleInputChange}
                className={`mt-1 w-4 h-4 text-primary-red border-slate-300 rounded focus:ring-primary-red ${
                  errors.consent ? 'border-red-500' : ''
                }`}
                required
              />
              <label htmlFor="consent" className="text-sm text-slate-600 leading-5">
                I agree to be contacted by Lemaiyan's Travels regarding my inquiry and understand that my information will be processed in accordance with the privacy policy. *
              </label>
            </div>
            {errors.consent && (
              <p className="text-sm text-red-600 flex items-center">
                <AlertCircle size={14} className="mr-1" />
                {errors.consent}
              </p>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-slate-500">
                <Clock size={16} />
                <span>We respond within 24 hours</span>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center bg-primary-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default SecureContactForm
