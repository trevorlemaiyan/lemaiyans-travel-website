'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Plane, Hotel, Passports, Car, Map, ArrowRight, Clock, Shield, Globe, Users, Star, CheckCircle } from 'lucide-react'

const ServicesHero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-96 lg:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-red/90 via-slate-900/80 to-slate-900 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 600\"%3E%3Cdefs%3E%3ClinearGradient id=\"grad1\" x1=\"0%25\" y1=\"0%25\" x2=\"100%25\" y2=\"100%25\"%3E%3Cstop offset=\"0%25\" style=\"stop-color:rgb(198,18,23);stop-opacity:0.8\" /%3E%3Cstop offset=\"100%25\" style=\"stop-color:rgb(15,23,42);stop-opacity:0.9\" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=\"1440\" height=\"600\" fill=\"url(%23grad1)\" /%3E%3Cpath d=\"M0,400 Q360,300 720,400 T1440,400 L1440,600 L0,600 Z\" fill=\"rgba(255,255,255,0.05)\" /%3E%3C/svg%3E')",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          Our Travel Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Comprehensive Services for All Your Travel Needs
        </motion.p>
      </div>
    </section>
  )
}

const ServiceSection = ({
  icon,
  title,
  description,
  features,
  process,
  id
}: {
  icon: any
  title: string
  description: string
  features: string[]
  process: string[]
  id: string
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const Icon = icon

  return (
    <section ref={sectionRef} id={id} className="py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${id === 'car-hire' ? 'lg:grid-flow-row-dense' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: id === 'car-hire' ? 50 : -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : (id === 'car-hire' ? 50 : -50) }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={id === 'car-hire' ? 'lg:order-2' : ''}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-red to-red-600 rounded-xl flex items-center justify-center text-white">
                <Icon size={32} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">{title}</h2>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Features & Benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-primary-red flex-shrink-0" size={20} />
                    <span className="text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">How It Works</h3>
              <div className="space-y-3">
                {process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary-red text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      {index + 1}
                    </div>
                    <span className="text-slate-600">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center bg-primary-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
            >
              Inquire Now
              <ArrowRight className="ml-2" size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: id === 'car-hire' ? -50 : 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : (id === 'car-hire' ? -50 : 50) }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className={id === 'car-hire' ? 'lg:order-1' : ''}
          >
            <div className="bg-gradient-to-br from-primary-red/10 to-red-600/10 rounded-2xl p-8 lg:p-12">
              <div className="aspect-square bg-gradient-to-br from-primary-red to-red-600 rounded-xl flex items-center justify-center text-white">
                <Icon size={80} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    id: 'air-ticketing',
    icon: Plane,
    title: 'Air Ticketing',
    description: 'We handle flights for local and regional travel, global destinations, one-way, round-trip, and multi-city bookings. Clients enjoy professional guidance, best available fares, flexible itineraries, and 24/7 support for any issues.',
    features: [
      'Local and Regional Travel',
      'Global Destinations',
      'One-way, Round-trip, Multi-city Bookings',
      'Best Available Fares',
      'Flexible Itineraries',
      '24/7 Support for Any Issues'
    ],
    process: [
      'Share your travel details and preferences',
      'Receive multiple flight options within hours',
      'Select and confirm your preferred flights',
      'Receive e-tickets and travel documents',
      'Enjoy pre-flight support and assistance'
    ]
  },
  {
    id: 'hotel-bookings',
    icon: Hotel,
    title: 'Hotel Bookings & Reservations',
    description: 'We help clients book local lodgings and Airbnb stays, luxury hotels, and international accommodations. Our team ensures secure, reliable reservations at competitive rates.',
    features: [
      'Local Lodgings and Airbnb Stays',
      'Luxury Hotels',
      'International Accommodations',
      'Competitive Rates',
      'Secure Reservations',
      'Reliable Service'
    ],
    process: [
      'Specify destination, dates, and preferences',
      'Receive curated hotel recommendations',
      'Compare options and select accommodation',
      'Complete booking with secure payment',
      'Receive confirmation and booking details'
    ]
  },
  {
    id: 'visa-processing',
    icon: Passports,
    title: 'Visa Processing & Travel Documentation',
    description: 'We support travelers with visa application assistance, required documentation guidance, and travel advisory for different countries. Our goal is to simplify the visa process and minimize traveler stress.',
    features: [
      'Visa Application Assistance',
      'Required Documentation Guidance',
      'Travel Advisory for Different Countries',
      'Simplified Visa Process',
      'Stress-Free Experience',
      'Expert Support'
    ],
    process: [
      'Consultation on visa requirements',
      'Document collection and review',
      'Application preparation and submission',
      'Follow-up with embassy/consulate',
      'Collection and delivery of approved visa'
    ]
  },
  {
    id: 'car-hire',
    icon: Car,
    title: 'Car Hire & Airport Transfers',
    description: 'Available services include airport transfers, daily or weekly rentals, chauffeur-driven vehicle options, and tourist transport. We partner with trusted local providers to ensure safety and reliability.',
    features: [
      'Airport Transfers',
      'Daily or Weekly Rentals',
      'Chauffeur-Driven Vehicle Options',
      'Tourist Transport',
      'Trusted Local Providers',
      'Safety and Reliability Guaranteed'
    ],
    process: [
      'Select vehicle type and rental period',
      'Provide necessary documentation',
      'Confirm booking and payment',
      'Vehicle pickup or delivery arrangement',
      'Enjoy your journey with support available'
    ]
  }
]

const ToursSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="tours" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Tours & Custom Packages
          </h2>
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold mb-6">
            <Star className="mr-2" size={20} />
            Coming Soon
          </div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We will soon offer curated travel packages including Kenyan safari packages, weekend getaways,
            coast and beach holidays, and international tour packages. Until the dedicated booking system launches,
            clients can inquire via the Contact Us form for tailor-made tours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What's Coming</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Map className="text-primary-red flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Safari Adventures</h4>
                    <p className="text-slate-600">Experience Kenya's world-renowned wildlife reserves and national parks.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Globe className="text-primary-red flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Cultural Tours</h4>
                    <p className="text-slate-600">Immerse yourself in Kenya's rich cultural heritage and traditions.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Users className="text-primary-red flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Custom Itineraries</h4>
                    <p className="text-slate-600">Personalized travel experiences tailored to your preferences and schedule.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="/tours"
                  className="inline-flex items-center bg-primary-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">🦁</div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Exciting Adventures Await!</h4>
              <p className="text-slate-600">Be the first to know when our tour packages launch.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      {services.map((service, index) => (
        <ServiceSection key={service.id} {...service} />
      ))}
      <ToursSection />
    </>
  )
}