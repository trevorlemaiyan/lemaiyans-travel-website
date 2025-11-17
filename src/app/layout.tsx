import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/ui/Footer'
import CookieConsent from '@/components/ui/CookieConsent'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Lemaiyan\'s Travels - Your Trusted Travel Partner in Kenya',
    template: '%s | Lemaiyan\'s Travels'
  },
  description: 'Professional travel agency in Eldoret, Kenya offering flights, hotels, visa processing, car hire, and custom tour packages. Your trusted partner for international and regional travel solutions.',
  keywords: ['travel agency Kenya', 'flights Kenya', 'hotels Kenya', 'visa processing', 'car hire', 'tours Kenya', 'Eldoret travel'],
  authors: [{ name: 'Lemaiyan\'s Travels' }],
  creator: 'Lemaiyan\'s Travels',
  publisher: 'Lemaiyan\'s Travels',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://lemaiyanstravels.co.ke',
    title: 'Lemaiyan\'s Travels - Your Trusted Travel Partner in Kenya',
    description: 'Professional travel agency in Eldoret, Kenya offering comprehensive travel solutions including flights, hotels, visas, and tours.',
    siteName: 'Lemaiyan\'s Travels',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lemaiyan\'s Travels - Your Trusted Travel Partner in Kenya',
    description: 'Professional travel agency in Eldoret, Kenya offering flights, hotels, visa processing, and custom tour packages.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}