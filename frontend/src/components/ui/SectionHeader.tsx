'use client'

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  dark?: boolean
  isVisible?: boolean
}

const SectionHeader = ({
  label,
  title,
  description,
  align = 'center',
  dark = false,
  isVisible = true,
}: SectionHeaderProps) => {
  const alignClass = align === 'left' ? 'text-left' : 'text-center mx-auto'
  const descClass = align === 'left' ? 'max-w-2xl' : 'max-w-3xl mx-auto'

  return (
    <div className={`mb-14 lg:mb-20 ${alignClass}`}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 12 }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] mb-4 ${
            dark ? 'text-primary-crimson' : 'text-primary-crimson'
          }`}
        >
          <span className="w-8 h-px bg-primary-crimson" />
          {label}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ type: 'spring', stiffness: 100, damping: 16, delay: 0.05 }}
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5 ${
          dark ? 'text-white' : 'text-graphite-black'
        }`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 16 }}
          transition={{ type: 'spring', stiffness: 100, damping: 18, delay: 0.1 }}
          className={`text-lg lg:text-xl leading-relaxed ${descClass} ${
            dark ? 'text-graphite-light' : 'text-graphite-light'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}

export default SectionHeader
