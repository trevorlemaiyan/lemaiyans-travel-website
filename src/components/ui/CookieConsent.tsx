'use client'

import { useState, useEffect } from 'react'

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent')

    if (!consent) {
      // Show banner after 2 seconds if no consent exists
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)

      return () => clearTimeout(timer)
    } else {
      setHasConsent(consent === 'accepted')
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setHasConsent(true)
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible || hasConsent) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-white z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex-1">
            <p className="text-sm leading-relaxed pr-4">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
              <a
                href="/privacy"
                className="text-primary-red hover:underline ml-1"
              >
                Learn more
              </a>
            </p>
          </div>
          <div className="flex items-center space-x-3 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm border border-slate-600 rounded-lg hover:bg-slate-800 transition-colors duration-300"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm bg-primary-red hover:bg-red-700 rounded-lg transition-colors duration-300"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent