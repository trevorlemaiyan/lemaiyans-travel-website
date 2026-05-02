'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState, ReactNode } from 'react'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowRight, Heart, MessageCircle, Share2 } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar: string
    bio: string
  }
  category: string
  tags: string[]
  image: string
  publishedAt: string
  readTime: number
  likes: number
  comments: number
  featured: boolean
  active: boolean
}

const blogPosts: BlogPost[] = [
  {
    id: 'maasai-mara-travel-guide',
    title: 'Complete Guide to Maasai Mara Safari',
    excerpt: 'Everything you need to know about planning the perfect Maasai Mara safari, from best times to visit to what to pack.',
    content: '',
    author: {
      name: 'Sarah Lemaiyan',
      avatar: '/images/team/sarah.jpg',
      bio: 'Travel expert with 10+ years experience in African safaris'
    },
    category: 'Safari',
    tags: ['Maasai Mara', 'Safari', 'Wildlife', 'Travel Tips'],
    image: '/images/blog/maasai-mara-guide.jpg',
    publishedAt: '2024-01-15',
    readTime: 8,
    likes: 245,
    comments: 32,
    featured: true,
    active: true
  },
  {
    id: 'diani-beach-essentials',
    title: 'Diani Beach: Paradise on Kenya\'s Coast',
    excerpt: 'Discover why Diani Beach is one of Africa\'s most beautiful coastal destinations and how to make the most of your visit.',
    content: '',
    author: {
      name: 'Michael Kiprop',
      avatar: '/images/team/michael.jpg',
      bio: 'Coastal tourism specialist and water sports enthusiast'
    },
    category: 'Beach',
    tags: ['Diani', 'Beach', 'Coast', 'Kenya'],
    image: '/images/blog/diani-beach.jpg',
    publishedAt: '2024-01-10',
    readTime: 6,
    likes: 189,
    comments: 24,
    featured: true,
    active: true
  },
  {
    id: 'visa-free-kenya',
    title: 'Kenya Introduces Visa-Free Travel',
    excerpt: 'Breaking: Kenya announces visa-free travel for several countries. Here\'s what you need to know about the new policy.',
    content: '',
    author: {
      name: 'Grace Wanjiru',
      avatar: '/images/team/grace.jpg',
      bio: 'Immigration and travel documentation expert'
    },
    category: 'Travel News',
    tags: ['Visa', 'Kenya', 'Travel Policy', 'Immigration'],
    image: '/images/blog/visa-kenya.jpg',
    publishedAt: '2024-01-08',
    readTime: 4,
    likes: 156,
    comments: 18,
    featured: false,
    active: true
  }
]

const BlogCard: React.FC<{ post: BlogPost; index: number }> = ({ post, index }) => {
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

  return (
    <motion.article
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
      className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* Featured Badge */}
      {post.featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-primary-red text-white text-xs px-3 py-1 rounded-full font-semibold">
            Featured
          </span>
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-red/20 to-blue-600/20"></div>
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="text-6xl opacity-50">
            {post.category === 'Safari' && '🦁'}
            {post.category === 'Beach' && '🏖️'}
            {post.category === 'Travel News' && '📰'}
          </div>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6">
        {/* Category and Date */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-primary-red uppercase tracking-wide">
            {post.category}
          </span>
          <div className="flex items-center text-xs text-slate-500">
            <Calendar className="w-3 h-3 mr-1" />
            {new Date(post.publishedAt).toLocaleDateString()}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-red transition-colors duration-300">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-slate-600 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime} min read
            </div>
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-1" />
              {post.likes}
            </div>
            <div className="flex items-center">
              <MessageCircle className="w-4 h-4 mr-1" />
              {post.comments}
            </div>
          </div>
        </div>

        {/* Author */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-primary-red rounded-full flex items-center justify-center text-white text-sm font-bold mr-2">
              {post.author.name.charAt(0)}
            </div>
            <span className="text-sm text-slate-600">{post.author.name}</span>
          </div>

          <Link
            href={`/blog/${post.id}`}
            className="inline-flex items-center text-primary-red hover:text-red-700 font-medium text-sm transition-colors duration-300"
          >
            Read More
            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

export default function BlogPage() {
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

  const featuredPosts = blogPosts.filter(post => post.featured)
  const recentPosts = blogPosts.filter(post => !post.featured)

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 lg:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-red/90 via-slate-900/80 to-slate-900 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 600\"%3E%3Cdefs%3E%3ClinearGradient id=\"grad1\" x1=\"0%25\" y1=\"0%25\" x2=\"100%25\" y2=\"100%25\"%3E%3Cstop offset=\"0%25\" style=\"stop-color:rgb(198,18,23);stop-opacity:0.8\" /%3E%3Cstop offset=\"100%25\" style=\"stop-color:rgb(15,23,42);stop-opacity:0.9\" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=\"1440\" height=\"600\" fill=\"url(%23grad1)\" /%3E%3Cpath d=\"M0,400 Q360,300 720,400 T1440,400 L1440,600 L0,600 Z\" fill=\"rgba(255,255,255,0.05)\" /%3E%3C/svg%3E')",
            }}
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Travel Blog
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Tips, Stories, and Insights from Our Travel Experts
          </motion.p>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={titleRef} className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isTitleVisible ? 1 : 0, y: isTitleVisible ? 0 : 30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4"
              >
                Featured Stories
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isTitleVisible ? 1 : 0, y: isTitleVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
              >
                Hand-picked travel experiences and insider tips from our experts
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Recent Articles
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest travel trends and destination guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index + featuredPosts.length} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 lg:py-24 bg-primary-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
          >
            Stay Updated with Travel Tips
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-red-50 mb-8 leading-relaxed"
          >
            Get our latest articles and exclusive travel deals delivered to your inbox
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
