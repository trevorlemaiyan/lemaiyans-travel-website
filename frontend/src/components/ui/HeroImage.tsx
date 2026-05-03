'use client'

import Image from 'next/image'

interface HeroImageProps {
  src: string
  alt: string
  priority?: boolean
  className?: string
  children?: React.ReactNode
}

const HeroImage = ({ src, alt, priority = true, className = "", children }: HeroImageProps) => {
  return (
    <div className={`relative inset-0 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-red/90 via-slate-900/80 to-slate-900 z-10"></div>
      {children && (
        <div className="relative z-20">
          {children}
        </div>
      )}
    </div>
  )
}

export default HeroImage
