'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappNumber = '+254123456789'
  const message = encodeURIComponent('Hi! I\'m interested in your travel services.')

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}?text=${message}`, '_blank')
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 lg:bottom-8 lg:right-8">
      {/* Expanded Options */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute bottom-16 right-0 bg-white rounded-lg shadow-2xl p-4 mb-2 min-w-[200px]"
        >
          <div className="text-sm text-slate-600 mb-3">How can we help you?</div>
          <div className="space-y-2">
            <button
              onClick={handleWhatsAppClick}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-green-50 text-slate-700 hover:text-green-600 transition-colors duration-200"
            >
              💬 Travel Planning
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-green-50 text-slate-700 hover:text-green-600 transition-colors duration-200"
            >
              ✈️ Flight Booking
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-green-50 text-slate-700 hover:text-green-600 transition-colors duration-200"
            >
              🏨 Hotel Reservations
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-green-50 text-slate-700 hover:text-green-600 transition-colors duration-200"
            >
              📝 General Inquiry
            </button>
          </div>
        </motion.div>
      )}

      {/* Tooltip */}
      {showTooltip && !isExpanded && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-16 right-0 bg-slate-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap"
        >
          Chat with us on WhatsApp!
          <div className="absolute -bottom-1 right-4 w-2 h-2 bg-slate-800 transform rotate-45"></div>
        </motion.div>
      )}

      {/* Main Button */}
      <div className="relative">
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25"></div>

        {/* WhatsApp Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (isExpanded) {
              setIsExpanded(false)
            } else {
              handleWhatsAppClick()
            }
          }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onDoubleClick={() => setIsExpanded(!isExpanded)}
          className="relative bg-green-500 hover:bg-green-600 text-white w-14 h-14 lg:w-16 lg:h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        >
          {isExpanded ? (
            <X size={24} className="lg:w-8 lg:h-8" />
          ) : (
            <MessageCircle size={24} className="lg:w-8 lg:h-8" />
          )}

          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">
            1
          </div>
        </motion.button>

        {/* Double Click Hint */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            Double-click for options
          </div>
        </div>
      </div>

      {/* Close Expanded Mode on Outside Click */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </div>
  )
}

export default WhatsAppButton