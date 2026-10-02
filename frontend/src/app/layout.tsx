import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Syne, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/ui/Footer'

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const display = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "Lemaiyan's Travels | Aviation & Travel Management - Eldoret, Kenya",
    template: "%s | Lemaiyan's Travels"
  },
  description: 'Physical travel desk at Nandi Arcade, Eldoret. Direct domestic and international air ticketing, corporate travel management, visa documentation assistance, and executive car hire.',
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
    title: "Lemaiyan's Travels | Travel Management - Eldoret, Kenya",
    description: 'Air ticketing, corporate flight logistics, visa documentation, and airport transfers based at Nandi Arcade, Eldoret.',
    siteName: "Lemaiyan's Travels",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lemaiyan's Travels | Travel Management - Eldoret, Kenya",
    description: 'Aviation ticketing, corporate travel accounts, visa processing, and airport transfers in Eldoret, Kenya.',
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
      <body className={`${sans.variable} ${display.variable} ${mono.variable} font-sans antialiased bg-[#F9F9F8] text-[#121316] selection:bg-primary-crimson selection:text-white`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}