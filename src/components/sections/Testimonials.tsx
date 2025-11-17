'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Wanjiru',
    role: 'Business Traveler',
    content: 'Lemaiyan\'s Travels made my international business trip seamless. From flight bookings to hotel arrangements, everything was perfect. Their attention to detail is exceptional.',
    rating: 5,
    avatar: 'SW'
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Tourist',
    content: 'As a first-time visitor to Kenya, I was amazed by the professionalism and local knowledge. They helped me discover hidden gems I would have never found on my own.',
    rating: 5,
    avatar: 'DC'
  },
  {
    id: 3,
    name: 'Grace Achieng',
    role: 'Family Vacation',
    content: 'Our family vacation was perfectly organized. The team handled all the visa processing and travel documentation with such care. Highly recommended for families!',
    rating: 5,
    avatar: 'GA'
  }
]

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
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
        delay: index * 0.2,
        ease: "easeOut"
      }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Quote Icon */}
      <div className="flex justify-between items-start mb-6">
        <Quote className="text-primary-red opacity-20" size={32} />
        <div className="flex space-x-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="text-yellow-400 fill-current" size={16} />
          ))}
        </div>
      </div>

      {/* Content */}
      <p className="text-slate-700 leading-relaxed mb-6 italic">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-red to-red-600 rounded-full flex items-center justify-center text-white font-bold">
          {testimonial.avatar}
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
          <p className="text-sm text-slate-600">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  )
}

const Testimonials = () => {
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
            What Our Clients Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isTitleVisible ? 1 : 0, y: isTitleVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Don't just take our word for it. Here's what our valued customers have to say about their experiences with Lemaiyan's Travels.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isTitleVisible ? 1 : 0, y: isTitleVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary-red mb-2">
                  1000+
                </div>
                <div className="text-slate-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary-red mb-2">
                  50+
                </div>
                <div className="text-slate-600">Destinations</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary-red mb-2">
                  5★
                </div>
                <div className="text-slate-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary-red mb-2">
                  24/7
                </div>
                <div className="text-slate-600">Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials