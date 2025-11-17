import { z } from 'zod'

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be less than 100 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Full name can only contain letters and spaces'),

  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),

  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^(\+?\d{1,4}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
      'Please enter a valid phone number'),

  service: z
    .string()
    .min(1, 'Please select a service'),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be less than 500 characters')
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const services = [
  { value: 'air-ticketing', label: 'Air Ticketing' },
  { value: 'hotel-bookings', label: 'Hotel Bookings' },
  { value: 'visa-processing', label: 'Visa Processing' },
  { value: 'car-hire', label: 'Car Hire' },
  { value: 'tours', label: 'Tours & Packages' },
  { value: 'general', label: 'General Inquiry' },
  { value: 'other', label: 'Other' }
]