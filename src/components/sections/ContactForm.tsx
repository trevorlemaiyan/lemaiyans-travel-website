'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { contactFormSchema, type ContactFormData, services } from '@/lib/validations'
import {
  Mail,
  Phone,
  User,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // Simulate form submission - replace with actual form handling
      await new Promise(resolve => setTimeout(resolve, 2000))

      // In a real implementation, you would send this data to your backend
      // For now, we'll simulate a successful submission
      console.log('Form submitted:', data)

      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Something went wrong. Please try again or contact us directly.')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-green-600" size={32} />
        </div>
        <h3 className="text-2xl font-bold text-green-900 mb-4">
          Thank You for Your Inquiry!
        </h3>
        <p className="text-green-700 mb-6 max-w-md mx-auto">
          We've received your message and will get back to you within 24 hours. Our travel experts are excited to help you plan your perfect journey!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              setSubmitStatus('idle')
              reset()
            }}
            className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
          >
            Send Another Message
          </button>
          <a
            href="tel:+254123456789"
            className="inline-flex items-center justify-center bg-white text-green-600 border-2 border-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300"
          >
            <Phone className="mr-2" size={16} />
            Call Us Now
          </a>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
      <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8">
        Get in Touch
      </h2>

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3"
        >
          <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <h4 className="font-semibold text-red-900">Submission Error</h4>
            <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
            Full Name *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="text-slate-400" size={20} />
            </div>
            <input
              {...register('fullName')}
              type="text"
              id="fullName"
              className={`block w-full pl-10 pr-3 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary-red focus:border-primary-red transition-colors duration-200 ${
                errors.fullName
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                  : 'border-slate-300'
              }`}
              placeholder="John Doe"
              disabled={isSubmitting}
            />
          </div>
          {errors.fullName && (
            <p className="mt-2 text-sm text-red-600">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            Email Address *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="text-slate-400" size={20} />
            </div>
            <input
              {...register('email')}
              type="email"
              id="email"
              className={`block w-full pl-10 pr-3 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary-red focus:border-primary-red transition-colors duration-200 ${
                errors.email
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                  : 'border-slate-300'
              }`}
              placeholder="john@example.com"
              disabled={isSubmitting}
            />
          </div>
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
            Phone Number *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="text-slate-400" size={20} />
            </div>
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              className={`block w-full pl-10 pr-3 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary-red focus:border-primary-red transition-colors duration-200 ${
                errors.phone
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                  : 'border-slate-300'
              }`}
              placeholder="+254 123 456 789"
              disabled={isSubmitting}
            />
          </div>
          {errors.phone && (
            <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
            Service Interested In *
          </label>
          <select
            {...register('service')}
            id="service"
            className={`block w-full px-3 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary-red focus:border-primary-red transition-colors duration-200 ${
              errors.service
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                : 'border-slate-300'
            }`}
            disabled={isSubmitting}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-2 text-sm text-red-600">{errors.service.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
            Message *
          </label>
          <div className="relative">
            <div className="absolute top-3 left-3 pointer-events-none">
              <MessageSquare className="text-slate-400" size={20} />
            </div>
            <textarea
              {...register('message')}
              id="message"
              rows={5}
              className={`block w-full pl-10 pr-3 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-primary-red focus:border-primary-red transition-colors duration-200 resize-none ${
                errors.message
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                  : 'border-slate-300'
              }`}
              placeholder="Tell us about your travel plans..."
              disabled={isSubmitting}
            />
          </div>
          <div className="mt-2 text-sm text-slate-500 text-right">
            {typeof document !== 'undefined' &&
              document.querySelector('textarea[name="message"]')?.value?.length || 0
            }/500 characters
          </div>
          {errors.message && (
            <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center bg-primary-red text-white px-6 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Sending Message...
            </>
          ) : (
            <>
              <Send className="mr-2" size={20} />
              Send Message
            </>
          )}
        </button>

        <p className="text-sm text-slate-500 text-center">
          We'll respond to your inquiry within 24 hours.
        </p>
      </form>
    </div>
  )
}

export default ContactForm