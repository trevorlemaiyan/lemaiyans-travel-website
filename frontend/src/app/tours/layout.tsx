import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tours',
  description: 'Explore tour inspiration in Kenya and around the world. Contact Lemaiyans Travels to plan a personal tour itinerary.',
  openGraph: {
    title: "Tours | Lemaiyan's Travels",
    description: 'Explore tour inspiration in Kenya and around the world, then contact our team to plan your personal itinerary.',
  },
}

export default function ToursLayout({ children }: { children: React.ReactNode }) {
  return children
}
