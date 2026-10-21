'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Compass } from 'lucide-react'

interface LogoProps {
  variant?: 'full' | 'icon'
  className?: string
  showText?: boolean
  dark?: boolean
}

const Logo = ({ variant = 'full', className = '', showText = true, dark = false }: LogoProps) => {
  const [imageError, setImageError] = useState(false)
  const iconSize = variant === 'icon' ? 40 : 44

  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      {!imageError ? (
        <Image
          src="/images/brand/logo-icon.png"
          alt="Lemaiyan's Travels"
          width={iconSize}
          height={iconSize}
          className="transition-transform duration-300 group-hover:scale-105"
          onError={() => setImageError(true)}
          priority
        />
      ) : (
        <div
          className={`flex items-center justify-center rounded-xl bg-primary-crimson text-white shadow-sm transition-transform duration-300 group-hover:scale-105`}
          style={{ width: iconSize, height: iconSize }}
          aria-label="Lemaiyan's Travels Crest"
        >
          <Compass size={iconSize * 0.55} strokeWidth={2.2} />
        </div>
      )}
      {showText && variant === 'full' && (
        <div className="hidden sm:block leading-tight">
          <span
            className={`block font-display text-sm font-bold tracking-wide uppercase ${
              dark ? 'text-graphite-black' : 'text-white'
            }`}
          >
            Lemaiyan&apos;s
          </span>
          <span className="block font-display text-[10px] font-medium tracking-[0.35em] uppercase text-primary-crimson">
            Travels
          </span>
        </div>
      )}
    </Link>
  )
}

export default Logo
