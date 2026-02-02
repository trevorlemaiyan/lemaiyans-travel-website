'use client'

import { motion } from 'framer-motion'
import { useState, ReactNode } from 'react'

interface HoverCardProps {
  children: ReactNode
  className?: string
  hoverScale?: number
  hoverY?: number
  shadowIntensity?: number
  duration?: number
}

export const HoverCard: React.FC<HoverCardProps> = ({
  children,
  className = '',
  hoverScale = 1.05,
  hoverY = -8,
  shadowIntensity = 24,
  duration = 0.3
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={className}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        scale: hoverScale,
        y: hoverY,
        boxShadow: `0 ${shadowIntensity}px ${shadowIntensity * 2}px rgba(0, 0, 0, 0.15)`
      }}
      transition={{
        duration,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  )
}

export default HoverCard
