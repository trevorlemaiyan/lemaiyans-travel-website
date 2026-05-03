'use client'

import Image from 'next/image'

interface CustomerPhotoProps {
  src: string
  alt: string
  name: string
  size?: number
  className?: string
}

const CustomerPhoto = ({ src, alt, name, size = 80, className = "" }: CustomerPhotoProps) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="rounded-full object-cover"
        priority={size <= 80}
      />
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-red/20 to-transparent pointer-events-none"></div>
    </div>
  )
}

export default CustomerPhoto
