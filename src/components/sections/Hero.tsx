'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-red/90 via-slate-900/80 to-slate-900 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 800\"%3E%3Cdefs%3E%3ClinearGradient id=\"grad1\" x1=\"0%25\" y1=\"0%25\" x2=\"100%25\" y2=\"100%25\"%3E%3Cstop offset=\"0%25\" style=\"stop-color:rgb(198,18,23);stop-opacity:0.8\" /%3E%3Cstop offset=\"100%25\" style=\"stop-color:rgb(15,23,42);stop-opacity:0.9\" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=\"1440\" height=\"800\" fill=\"url(%23grad1)\" /%3E%3Cpath d=\"M0,400 Q360,300 720,400 T1440,400 L1440,800 L0,800 Z\" fill=\"rgba(255,255,255,0.05)\" /%3E%3Cpath d=\"M0,500 Q360,400 720,500 T1440,500 L1440,800 L0,800 Z\" fill=\"rgba(255,255,255,0.03)\" /%3E%3C/svg%3E')",
          }}
        />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Your Trusted Partner in
          <span className="block text-primary-red">International & Regional</span>
          Travel Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Flights • Hotels • Visas • Car Hire • Tours (Coming Soon)
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex justify-center items-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center bg-primary-red hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Contact Us
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero