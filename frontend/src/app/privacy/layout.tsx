import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Notice',
  description: 'How the Lemaiyans Travels website handles information submitted through its travel inquiry form.',
  openGraph: {
    title: "Privacy Notice | Lemaiyan's Travels",
    description: 'How our website handles information submitted through its travel inquiry form.',
  },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}
