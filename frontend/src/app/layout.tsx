import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: {
    default: "Lemaiyan's Travels | Aviation & Travel Management",
    template: "%s | Lemaiyan's Travels"
  },
  description: 'Air ticketing, corporate travel support, visa application guidance, accommodation, and airport transfers for clients in Kenya and around the world.',
  keywords: ['travel agency Eldoret', 'flights Kenya', 'air ticketing Eldoret', 'visa assistance Kenya', 'car hire Eldoret', 'corporate travel Kenya'],
  authors: [{ name: "Lemaiyan's Travels" }],
  creator: "Lemaiyan's Travels",
  publisher: "Lemaiyan's Travels",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://lemaiyanstravels.co.ke',
    title: "Lemaiyan's Travels | Travel Management",
    description: 'Air ticketing, corporate travel support, visa application guidance, accommodation, and airport transfers for clients in Kenya and around the world.',
    siteName: "Lemaiyan's Travels",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lemaiyan's Travels | Travel Management",
    description: 'Air ticketing, corporate travel support, visa application guidance, accommodation, and airport transfers for clients in Kenya and around the world.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-[#FAF9F6] text-[#151922] selection:bg-primary-crimson selection:text-white">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
