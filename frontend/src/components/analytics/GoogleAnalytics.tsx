'use client'

import { useEffect } from 'react'

interface GoogleAnalyticsProps {
  measurementId: string
}

const GoogleAnalytics = ({ measurementId }: GoogleAnalyticsProps) => {
  useEffect(() => {
    // Only load GA in production
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Load gtag script
      const script1 = document.createElement('script')
      script1.async = true
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
      document.head.appendChild(script1)

      // Initialize gtag
      const script2 = document.createElement('script')
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${measurementId}', {
          page_location: window.location.href,
          cookie_flags: 'SameSite=Lax;Secure',
          send_page_view: true
        });
      `
      document.head.appendChild(script2)
    }
  }, [measurementId])

  return null
}

export default GoogleAnalytics
