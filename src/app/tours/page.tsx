'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Map, Mountain, Waves, TreePine, Camera, Users, Clock, Star, ArrowRight, Calendar, Heart, Plane, Hotel, Car } from 'lucide-react'
import { getFeaturedTours, getActiveTours, getTourByCategory, TourPackage } from '@/data/tours'

const ToursHero = () => {
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
          Tours & Packages
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Unforgettable Kenyan Experiences
        </motion.p>
      </div>
    </section>
  )
}

const ComingSoon = () => {
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
    <section ref={sectionRef} className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full font-bold text-lg mb-6">
            <Star className="mr-2" size={24} />
            Exciting Tour Packages Launching Soon!
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            We're Crafting Something Special
          </h2>

          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We're working on unique travel experiences across Kenya and beyond. From safari adventures to beach getaways,
            cultural immersion to mountain treks - your perfect Kenyan adventure is just around the corner.
          </p>
        </motion.div>

        {/* Coming Soon Message Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 lg:p-16 text-center mb-16 border-2 border-yellow-200"
        >
          <div className="text-8xl mb-6"></div>
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Something Wild is Coming
          </h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Our team of travel experts is designing extraordinary tour packages that will showcase the very best of Kenya's wildlife,
            culture, and natural beauty. Stay tuned for an adventure of a lifetime!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary-red text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
            >
              Join Waitlist
              <ArrowRight className="ml-2" size={20} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-transparent border-2 border-primary-red text-primary-red px-8 py-4 rounded-lg font-semibold hover:bg-primary-red hover:text-white transition-all duration-300"
            >
              Request Custom Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const TeaserSection = () => {
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

  const teasers = [
    {
      icon: Map,
      title: 'Safari Adventures',
      description: 'Experience the Big Five in Kenya\'s world-renowned national parks.',
      features: ['Maasai Mara', 'Amboseli', 'Samburu', 'Lake Nakuru']
    },
    {
      icon: Waves,
      title: 'Coastal Experiences',
      description: 'Relax on pristine beaches and explore Swahili culture.',
      features: ['Diani Beach', 'Watamu', 'Lamu', 'Malindi']
    },
    {
      icon: Mountain,
      title: 'Mountain Adventures',
      description: 'Challenge yourself with hiking and climbing expeditions.',
      features: ['Mount Kenya', 'Aberdares', 'Chyulu Hills', 'Hells Gate']
    },
    {
      icon: Camera,
      title: 'Cultural Tours',
      description: 'Immerse yourself in Kenya\'s rich cultural heritage.',
      features: ['Maasai Villages', 'Karen Blixen', 'Bomas of Kenya', 'Local Markets']
    }
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
            What to Expect
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A glimpse into the unforgettable experiences we're preparing for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teasers.map((teaser, index) => {
            const Icon = teaser.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-red/10 rounded-xl">
                      <Icon className="text-primary-red" size={28} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {teaser.title}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {teaser.description}
                  </p>

                  <div className="space-y-2">
                    {teaser.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-600">
                        <div className="w-2 h-2 bg-primary-red rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-2 bg-gradient-to-r from-primary-red to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const ContactSection = () => {
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
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gradient-to-r from-primary-red to-red-600 rounded-2xl p-8 lg:p-16 text-center text-white"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Don't Miss Out!
          </h2>

          <p className="text-xl mb-8 text-red-50 max-w-3xl mx-auto leading-relaxed">
            Be the first to know when our tour packages launch. Get exclusive early bird discounts and priority access to our most popular destinations.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center bg-white text-primary-red px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <Heart className="mr-2" size={20} />
              Join Our Waitlist
            </Link>

            <div className="flex items-center space-x-6 text-red-50">
              <div className="flex items-center space-x-2">
                <Calendar size={20} />
                <span>Launch: Coming Soon</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={20} />
                <span>Limited Spots Available</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-red-50">Safari Packages</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8+</div>
              <div className="text-red-50">Beach Destinations</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-red-50">Cultural Experiences</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-red-50">Mountain Adventures</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function ToursPage() {
  return (
    <>
      <ToursHero />
      <ComingSoon />
      <TeaserSection />
      <ContactSection />
    </>
  )
}