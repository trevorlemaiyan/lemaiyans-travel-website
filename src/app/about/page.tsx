'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Users, Target, Heart, MapPin } from 'lucide-react'

const AboutHero = () => {
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
          About Lemaiyan's Travels
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Connecting Kenya to the World Since 2015
        </motion.p>
      </div>
    </section>
  )
}

const CompanyStory = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Our Journey in Travel Excellence
            </h2>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Lemaiyan's Travels is a professional tours and travel agency based in Eldoret, Kenya, specializing
                in domestic and international travel solutions. We provide seamless end-to-end travel support for
                individuals, families, corporate clients, and groups looking for reliable, affordable, and
                stress-free travel planning.
              </p>

              <p>
                Inspired by the iconic Kenyan heritage represented in our Maasai-themed logo, Lemaiyan's Travels
                blends cultural identity with modern global travel services, offering both regional and international
                solutions with a personal touch. Our name reflects the deep-rooted Maasai tradition of travel and
                exploration, embodying our commitment to connecting people across Kenya and beyond.
              </p>

              <p>
                What started as a vision to provide exceptional travel services has grown into one of Eldoret's most
                trusted travel agencies, serving thousands of clients across domestic and international destinations.
                We've built our reputation on professionalism, trust, and an unwavering focus on customer satisfaction.
              </p>

              <p>
                Today, we continue to expand our services and partnerships while maintaining the personal touch
                that makes us special. Our team of experienced travel consultants combines local expertise with
                global knowledge to deliver tailored travel solutions for every client.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center bg-primary-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
              >
                Meet Our Team
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-red/10 to-red-600/10 rounded-2xl p-8 lg:p-12">
              <div className="aspect-square bg-gradient-to-br from-primary-red to-red-600 rounded-xl flex items-center justify-center text-white">
                <div className="text-center">
                  <MapPin size={64} className="mx-auto mb-4" />
                  <div className="text-4xl font-bold">Eldoret</div>
                  <div className="text-xl">Kenya</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Timeline = () => {
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

  const milestones = [
    {
      year: '2015',
      title: 'Company Founded',
      description: 'Established in Eldoret with a vision to provide exceptional travel services.'
    },
    {
      year: '2017',
      title: 'First International Partnership',
      description: 'Expanded services to include international flight bookings and hotel reservations.'
    },
    {
      year: '2019',
      title: 'Visa Services Launched',
      description: 'Added comprehensive visa processing and travel documentation services.'
    },
    {
      year: '2021',
      title: 'Digital Transformation',
      description: 'Enhanced online presence and implemented digital booking systems.'
    },
    {
      year: '2023',
      title: 'Expanded Fleet Services',
      description: 'Launched comprehensive car hire and airport transfer services.'
    },
    {
      year: '2024',
      title: 'Custom Tours Development',
      description: 'Began development of custom tour packages for domestic and international travelers.'
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
            Our Journey Through Time
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Key milestones that have shaped our growth and commitment to excellence in travel services.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-primary-red/20 transform lg:-translate-x-0.5"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 lg:left-1/2 w-4 h-4 bg-primary-red rounded-full border-4 border-white transform -translate-x-1/2 shadow-lg"></div>

                {/* Content */}
                <div className={`ml-20 lg:ml-0 lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-primary-red font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{milestone.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>

                {/* Spacer for alternate layout */}
                <div className="hidden lg:block lg:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const MissionValues = () => {
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

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide reliable, affordable, and stress-free travel solutions that connect people to destinations across Kenya and the world.'
    },
    {
      icon: Heart,
      title: 'Core Values',
      description: 'Professionalism: Accurate, timely, and dependable service delivery. Trust: Honest support with no hidden fees. Customer Care: Personalized attention for each traveler. Efficiency: Fast response times and seamless communication. Heritage: Celebrating Kenyan culture in a modern travel context.'
    },
    {
      icon: Users,
      title: 'Our Vision',
      description: 'To become Kenya\'s most trusted travel partner—combining world-class service, cultural identity, and exceptional client care to elevate every traveler\'s journey.'
    }
  ]

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Mission & Values
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            The principles that guide our operations and define our commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className="bg-slate-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-red/10 rounded-xl mb-6">
                  <Icon className="text-primary-red" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <Timeline />
      <MissionValues />
    </>
  )
}