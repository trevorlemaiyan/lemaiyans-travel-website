import { z } from 'zod'

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Full name can only contain letters, spaces, hyphens, and apostrophes'),

  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),

  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^[+]?[0-9\s\-()]{9,20}$/, 'Please enter a valid phone number'),

  service: z.enum(
    ['air-ticketing', 'corporate-travel', 'visa-assistance', 'hotel-bookings', 'car-hire', 'tour-planning', 'general'],
    { errorMap: () => ({ message: 'Please select a valid service' }) }
  ),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const services = [
  { value: 'air-ticketing', label: 'Air Ticketing (Domestic & International Flights)' },
  { value: 'corporate-travel', label: 'Corporate Travel Management' },
  { value: 'visa-assistance', label: 'Visa Advisory & Documentation Assistance' },
  { value: 'hotel-bookings', label: 'Hotel & Lodge Bookings' },
  { value: 'car-hire', label: 'Executive Car Hire & Airport Transfers' },
  { value: 'tour-planning', label: 'Tailor-made Tour Planning' },
  { value: 'general', label: 'General Inquiries & Travel Advice' },
]
