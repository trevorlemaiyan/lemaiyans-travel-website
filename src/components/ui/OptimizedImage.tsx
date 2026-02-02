'use client'

import Image, { ImageProps } from 'next/image'
import { useState, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fallbackSrc?: string
  lazyBoundary?: string
  className?: string
  animationDuration?: number
  showPlaceholder?: boolean
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  fallbackSrc = '/images/placeholder.jpg',
  lazyBoundary = '200px',
  className = '',
  animationDuration = 0.6,
  showPlaceholder = true,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && showPlaceholder && (
        <motion.div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ 
          opacity: isLoading ? 0 : 1, 
          scale: isLoading ? 1.1 : 1 
        }}
        transition={{ 
          duration: animationDuration,
          ease: "easeOut"
        }}
        className="w-full h-full"
      >
        <Image
          src={hasError ? fallbackSrc : src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          {...props}
        />
      </motion.div>
    </div>
  )
}

export default OptimizedImage
