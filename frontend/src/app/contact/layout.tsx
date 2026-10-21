import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact the Travel Desk',
  description: 'Contact Lemaiyans Travels or request a travel quotation for journeys in Kenya and abroad.',
  openGraph: {
    title: "Contact Lemaiyan's Travels",
    description: 'Contact our team or request a travel quotation. Our office address is listed on this page.',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
