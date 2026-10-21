import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Lemaiyans Travels Limited and how we support travelers and organizations across Kenya and internationally.',
  openGraph: {
    title: "About Lemaiyan's Travels",
    description: 'Learn about our travel services for clients across Kenya and internationally.',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
