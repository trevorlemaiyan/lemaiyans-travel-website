'use client'

import Image from 'next/image'

interface ServiceIconProps {
  src: string
  alt: string
  size?: number
  className?: string
}

const ServiceIcon = ({ src, alt, size = 64, className = "" }: ServiceIconProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-contain"
        priority={size <= 64}
      />
    </div>
  )
}

export default ServiceIcon
