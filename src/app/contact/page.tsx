'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import ContactForm from '@/components/sections/ContactForm'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Globe,
  Plane,
  Users
} from 'lucide-react'

const ContactHero = () => {
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

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 text-white/10"
        >
          <Plane size={60} />
        </motion.div>
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-10 text-white/10"
        >
          <Globe size={80} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          Get in Touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          We're Here to Help Plan Your Perfect Journey
        </motion.p>
      </div>
    </section>
  )
}

const ContactInfo = () => {
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

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Office Location',
      value: 'Eldoret, Kenya',
      description: 'Visit our office for personalized travel consultation'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 123 456 789',
      description: 'Call us for immediate assistance',
      action: 'tel:+254123456789'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@lemaiyanstravels.com',
      description: 'Send us an email anytime',
      action: 'mailto:info@lemaiyanstravels.com'
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM',
      description: 'We\'re here to serve you during business hours'
    }
  ]

  return (
    <section ref={sectionRef} className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                    whileHover={{ y: -4 }}
                    className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-primary-red" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 mb-1">{info.label}</h3>
                        {info.action ? (
                          <a
                            href={info.action}
                            className="text-lg text-primary-red hover:text-red-700 transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg text-slate-800">{info.value}</p>
                        )}
                        <p className="text-sm text-slate-600 mt-1">{info.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* WhatsApp Integration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              className="bg-green-50 border-2 border-green-200 rounded-xl p-6"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-green-900 mb-1">Chat on WhatsApp</h3>
                  <p className="text-green-700 text-sm mb-3">
                    Get instant responses and quick travel advice
                  </p>
                  <a
                    href="https://wa.me/254123456789?text=Hi! I'm interested in your travel services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300"
                  >
                    <MessageCircle className="mr-2" size={16} />
                    Start Chat
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="bg-slate-50 rounded-xl p-6 h-96 flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin className="text-primary-red mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Our Location</h3>
                <p className="text-slate-600 mb-4">Find us in Eldoret, Kenya</p>
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <div className="text-sm text-slate-500">
                    <p>Interactive map coming soon</p>
                    <p className="mt-1">Visit our office for personalized service</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const StatsSection = () => {
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

  const stats = [
    { number: '1000+', label: 'Happy Clients', icon: Users },
    { number: '50+', label: 'Destinations', icon: Globe },
    { number: '5★', label: 'Average Rating', icon: '⭐' },
    { number: '24/7', label: 'Support Available', icon: Phone }
  ]

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Why Travelers Trust Us
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our commitment to excellence has made us one of the most trusted travel agencies in Kenya.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">
                {typeof stat.icon === 'string' ? stat.icon : null}
                {typeof stat.icon !== 'string' && <stat.icon className="text-primary-red mx-auto" size={40} />}
              </div>
              <div className="text-3xl font-bold text-primary-red mb-2">{stat.number}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <StatsSection />
    </>
  )
}