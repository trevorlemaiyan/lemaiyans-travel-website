'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData, services } from '@/lib/validations'
import { siteConfig } from '@/lib/site-config'
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    if (honeypot) {
      setSubmitStatus('success')
      reset()
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch(`${siteConfig.apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Submission failed')
      }

      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'Unable to dispatch your message. Please telephone our desk directly.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl p-7 sm:p-10 shadow-lg border border-slate-200/80">
      <div className="border-b border-slate-100 pb-5 mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-primary-crimson">
          Online Travel Desk
        </span>
        <h3 className="font-display text-2xl font-bold text-slate-900 mt-1">
          Request a Quotation or Consultation
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Fill in your journey details below. Our travel consultants will respond promptly with optimal solutions and rates.
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs sm:text-sm flex items-start gap-3">
          <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="block font-semibold">Inquiry Received Successfully!</strong>
            <span>Your request has been logged. Our travel consultants will contact you shortly with the best options.</span>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-300 text-rose-900 text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle size={18} className="text-rose-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="block font-semibold">Dispatch Notice</strong>
            <span>{errorMessage}</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Hidden Honeypot */}
        <input
          type="text"
          name="organization_stamp"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Full Name <span className="text-primary-crimson">*</span>
          </label>
          <input
            {...register('fullName')}
            type="text"
            placeholder="e.g. John Kamau"
            className="w-full px-4 py-3 text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:border-primary-crimson focus:bg-white focus:outline-none transition-colors"
          />
          {errors.fullName && (
            <p className="text-xs text-primary-crimson mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Email Address <span className="text-primary-crimson">*</span>
            </label>
            <input
              {...register('email')}
              type="email"
              placeholder="e.g. client@example.com"
              className="w-full px-4 py-3 text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:border-primary-crimson focus:bg-white focus:outline-none transition-colors"
            />
            {errors.email && (
              <p className="text-xs text-primary-crimson mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Phone Number <span className="text-primary-crimson">*</span>
            </label>
            <input
              {...register('phone')}
              type="tel"
              placeholder="e.g. +254 700 000 000"
              className="w-full px-4 py-3 text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:border-primary-crimson focus:bg-white focus:outline-none transition-colors"
            />
            {errors.phone && (
              <p className="text-xs text-primary-crimson mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Service Requested */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Service Required <span className="text-primary-crimson">*</span>
          </label>
          <select
            {...register('service')}
            className="w-full px-4 py-3 text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:border-primary-crimson focus:bg-white focus:outline-none transition-colors"
          >
            <option value="">Select a travel service...</option>
            {services.map((svc) => (
              <option key={svc.value} value={svc.value}>
                {svc.label}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-xs text-primary-crimson mt-1">{errors.service.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Travel Itinerary or Specific Requirements <span className="text-primary-crimson">*</span>
          </label>
          <textarea
            {...register('message')}
            rows={4}
            placeholder="Please share your travel dates, departure & destination cities, passenger count, or specific hotel and visa requirements..."
            className="w-full px-4 py-3 text-sm bg-slate-50/70 border border-slate-200 rounded-xl focus:border-primary-crimson focus:bg-white focus:outline-none transition-colors resize-y"
          />
          {errors.message && (
            <p className="text-xs text-primary-crimson mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 bg-primary-crimson hover:bg-primary-burgundy text-white py-3.5 px-6 rounded-xl text-sm font-semibold shadow-md shadow-primary-crimson/25 transition-all disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Sending Your Request...</span>
              </>
            ) : (
              <>
                <span>Submit Travel Request</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}