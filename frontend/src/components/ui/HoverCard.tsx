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
  hoverScale = 1.01,
  hoverY = -2,
  shadowIntensity = 8,
  duration = 0.25
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
        boxShadow: `0 ${shadowIntensity}px ${shadowIntensity * 2}px rgba(21, 25, 34, 0.08)`
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
