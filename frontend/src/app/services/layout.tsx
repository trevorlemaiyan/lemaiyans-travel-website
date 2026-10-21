import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travel Services',
  description: 'Air ticketing, hotel reservations, visa guidance, and airport transfers for travelers across Kenya and internationally.',
  openGraph: {
    title: "Travel Services | Lemaiyan's Travels",
    description: 'Explore air ticketing, accommodation, visa guidance, and airport transfer services.',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
