import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: "Lemaiyan's Travels - Professional Tours & Travel Agency in Kenya",
    template: "%s | Lemaiyan's Travels"
  },
  description: "Professional tours and travel agency based in Eldoret, Kenya. Specializing in domestic and international travel solutions, visa services, and custom tour packages. Your trusted travel partner since 2015.",
  keywords: [
    "travel agency Kenya",
    "tours Kenya",
    "Eldoret travel",
    "domestic travel Kenya",
    "international flights",
    "visa services Kenya",
    "Maasai Mara tours",
    "Kenya safari",
    "travel packages",
    "car hire Kenya",
    "airport transfers"
  ],
  authors: [{ name: "Lemaiyan's Travels" }],
  creator: "Lemaiyan's Travels",
  publisher: "Lemaiyan's Travels",
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
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://lemaiyanstravels.com',
    title: "Lemaiyan's Travels - Professional Tours & Travel Agency",
    description: "Professional tours and travel agency based in Eldoret, Kenya. Specializing in domestic and international travel solutions, visa services, and custom tour packages.",
    siteName: "Lemaiyan's Travels",
    images: [
      {
        url: 'https://lemaiyanstravels.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Lemaiyan's Travels - Your Gateway to Kenyan Adventures",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lemaiyan's Travels - Professional Tours & Travel Agency",
    description: "Professional tours and travel agency based in Eldoret, Kenya. Your trusted travel partner since 2015.",
    images: ['https://lemaiyanstravels.com/images/twitter-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#c61217',
    'msapplication-config': '/browserconfig.xml',
  },
  category: 'travel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#c61217" />
        <meta name="msapplication-TileColor" content="#c61217" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com;" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
