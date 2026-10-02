'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface PageHeroProps {
  title: string
  subtitle: string
  align?: 'left' | 'center'
}

export default function PageHero({ title, subtitle, align = 'left' }: PageHeroProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left max-w-3xl'

  return (
    <section className="relative min-h-[340px] lg:min-h-[400px] flex items-center overflow-hidden bg-[#131722] text-white pt-24 border-b border-slate-800">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(155,29,32,0.15),transparent)]" />
      
      {/* Subtle geometric pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-medium mb-4 backdrop-blur-sm">
          <span>Lemaiyans Travels Limited · Est. 2014</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight ${alignClass}`}
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 14 }}
          transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
          className={`text-base md:text-lg text-slate-300 leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  )
}
