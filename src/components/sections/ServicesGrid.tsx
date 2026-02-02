'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  Plane,
  Hotel,
  FileText,
  Car,
  Map,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    id: 'air-ticketing',
    icon: Plane,
    title: 'Air Ticketing',
    description: 'Domestic & International Flights',
    color: 'from-blue-500 to-blue-600',
    href: '/services#air-ticketing'
  },
  {
    id: 'hotel-bookings',
    icon: Hotel,
    title: 'Hotel Bookings',
    description: 'Worldwide Reservations',
    color: 'from-purple-500 to-purple-600',
    href: '/services#hotel-bookings'
  },
  {
    id: 'visa-processing',
    icon: FileText,
    title: 'Visa Processing',
    description: 'Travel Documentation',
    color: 'from-green-500 to-green-600',
    href: '/services#visa-processing'
  },
  {
    id: 'car-hire',
    icon: Car,
    title: 'Car Hire',
    description: 'Airport Transfers & Rentals',
    color: 'from-orange-500 to-orange-600',
    href: '/services#car-hire'
  },
  {
    id: 'tours',
    icon: Map,
    title: 'Tours & Packages',
    description: 'Custom Packages (Coming Soon)',
    color: 'from-red-500 to-red-600',
    href: '/tours',
    comingSoon: true
  }
]

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const Icon = service.icon

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 50
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

      {/* Coming Soon Badge */}
      {service.comingSoon && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-primary-red text-white text-xs px-3 py-1 rounded-full font-semibold">
            Coming Soon
          </span>
        </div>
      )}

      <div className="relative p-6 lg:p-8">
        {/* Icon */}
        <div className={`inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${service.color} rounded-xl mb-6 transform transition-transform duration-300 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
          <Icon className="text-white" size={32} />
        </div>

        {/* Content */}
        <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">
          {service.title}
        </h3>

        <p className="text-slate-600 mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Link */}
        <Link
          href={service.href}
          className={`inline-flex items-center justify-center group/link bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg ${service.comingSoon ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105'}`}
          onClick={(e) => service.comingSoon && e.preventDefault()}
        >
          {service.comingSoon ? 'Learn More' : 'Inquire Now'}
          {!service.comingSoon && (
            <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300" size={16} />
          )}
        </Link>
      </div>

      {/* Decorative Element */}
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} transform transition-transform duration-300 ${isHovered ? 'scale-x-100' : 'scale-x-0'}`}></div>
    </motion.div>
  )
}

const ServicesGrid = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false)
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isTitleVisible ? 1 : 0, y: isTitleVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
          >
            Our Travel Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isTitleVisible ? 1 : 0, y: isTitleVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive travel services designed to make your journey seamless and memorable.
            From flights to accommodations, we handle every detail with professional care.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid