'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState, ReactNode } from 'react'
import Link from 'next/link'
import { Star, MapPin, Clock, Users, ArrowRight, Heart } from 'lucide-react'
import { TourPackage, getFeaturedTours, getActiveTours } from '@/data/tours'

interface TourCardProps {
  tour: TourPackage
  index: number
}

const TourCard: React.FC<TourCardProps> = ({ tour, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
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

  const getDifficultyColor = (difficulty: TourPackage['difficulty']) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800'
      case 'moderate': return 'bg-yellow-100 text-yellow-800'
      case 'challenging': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryColor = (category: TourPackage['category']) => {
    switch (category) {
      case 'domestic': return 'from-blue-500 to-blue-600'
      case 'international': return 'from-purple-500 to-purple-600'
      case 'adventure': return 'from-green-500 to-green-600'
      case 'luxury': return 'from-yellow-500 to-yellow-600'
      case 'budget': return 'from-orange-500 to-orange-600'
      default: return 'from-gray-500 to-gray-600'
    }
  }

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
      {/* Featured Badge */}
      {tour.featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-primary-red text-white text-xs px-3 py-1 rounded-full font-semibold">
            Featured
          </span>
        </div>
      )}

      {/* Favorite Button */}
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
      >
        <Heart
          className={`w-4 h-4 transition-colors duration-300 ${
            isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
          }`}
        />
      </button>

      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(tour.category)} opacity-20`}></div>
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="text-6xl opacity-50">
            {tour.category === 'domestic' && '🌍'}
            {tour.category === 'international' && '✈️'}
            {tour.category === 'adventure' && '🏔️'}
            {tour.category === 'luxury' && '💎'}
            {tour.category === 'budget' && '💰'}
          </div>
        </div>
        
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary-red transition-colors duration-300">
              {tour.title}
            </h3>
            <div className="flex items-center text-sm text-slate-600 mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              {tour.destination}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {tour.description}
        </p>

        {/* Tour Details */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-slate-600">
              <Clock className="w-4 h-4 mr-1" />
              {tour.duration}
            </div>
            <div className="flex items-center text-slate-600">
              <Users className="w-4 h-4 mr-1" />
              {tour.availability.seats} seats
            </div>
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tour.difficulty)}`}>
            {tour.difficulty}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(tour.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-slate-600">
              {tour.rating} ({tour.reviews} reviews)
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-primary-red">
                {tour.price}
              </span>
              {tour.originalPrice && (
                <span className="text-sm text-slate-400 line-through">
                  {tour.originalPrice}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Link
          href={`/tours/${tour.id}`}
          className={`w-full inline-flex items-center justify-center bg-gradient-to-r ${getCategoryColor(tour.category)} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg group-hover:scale-105`}
        >
          View Details
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
        </Link>
      </div>

      {/* Decorative Element */}
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${getCategoryColor(tour.category)} transform transition-transform duration-300 ${isHovered ? 'scale-x-100' : 'scale-x-0'} origin-left`}></div>
    </motion.div>
  )
}

interface TourGridProps {
  tours?: TourPackage[]
  showFeaturedOnly?: boolean
  title?: string
  subtitle?: string
}

export const TourGrid: React.FC<TourGridProps> = ({
  tours,
  showFeaturedOnly = false,
  title = "Our Tour Packages",
  subtitle = "Discover amazing destinations and create unforgettable memories"
}) => {
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

  const displayTours = tours || (showFeaturedOnly ? getFeaturedTours() : getActiveTours())

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
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isTitleVisible ? 1 : 0, y: isTitleVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Tours Grid */}
        {displayTours.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayTours.map((tour, index) => (
              <TourCard key={tour.id} tour={tour} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-6">🌍</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              No Tours Available
            </h3>
            <p className="text-slate-600 mb-8">
              We're working on amazing tour packages. Check back soon!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300"
            >
              Get Notified
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default TourGrid
