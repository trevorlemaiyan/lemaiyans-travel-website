'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import {
  Award,
  DollarSign,
  HeadphonesIcon,
  Globe,
  Clock,
  ShieldCheck
} from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Professionalism & Experience',
    description: 'Years of industry expertise with certified travel professionals dedicated to excellence.'
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Best value guaranteed with transparent pricing and no hidden fees.'
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Customer Support',
    description: 'Round-the-clock assistance whenever you need us, wherever you are in the world.'
  },
  {
    icon: Globe,
    title: 'Local Kenyan Knowledge',
    description: 'Deep understanding of East African travel complemented by global connections.'
  },
  {
    icon: Clock,
    title: 'Time-Efficient Service',
    description: 'Quick processing and booking to save you time and reduce travel stress.'
  },
  {
    icon: ShieldCheck,
    title: 'Trusted & Secure',
    description: 'Fully licensed and insured travel agency with your safety as our priority.'
  }
]

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
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

  const Icon = feature.icon

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
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <div className={`bg-white rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full ${isHovered ? 'transform -translate-y-2' : ''}`}>
        {/* Icon Container */}
        <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-red/10 rounded-xl mb-6 group-hover:bg-primary-red/20 transition-colors duration-300">
          <Icon className="text-primary-red" size={28} />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-slate-900 mb-4">
          {feature.title}
        </h3>

        <p className="text-slate-600 leading-relaxed">
          {feature.description}
        </p>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-red/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </motion.div>
  )
}

const WhyChooseUs = () => {
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
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isTitleVisible ? 1 : 0, y: isTitleVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
          >
            Why Choose Lemaiyan's Travels
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isTitleVisible ? 1 : 0, y: isTitleVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            We combine local expertise with global standards to deliver exceptional travel experiences.
            Your journey is our priority, and your satisfaction is our commitment.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isTitleVisible ? 1 : 0, y: isTitleVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-red to-red-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-lg mb-8 text-red-50 max-w-2xl mx-auto">
              Join thousands of satisfied travelers who have chosen Lemaiyan's Travels for their journeys.
              Let us make your next travel experience unforgettable.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-primary-red px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Get Started Today
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs