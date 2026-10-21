import Image from 'next/image'
import React from 'react'
import { LucideIcon, Camera } from 'lucide-react'

type VisualVariant = 'flight' | 'stay' | 'visa' | 'ground' | 'default'

interface TravelVisualProps {
  label: string
  imageSrc?: string
  icon?: LucideIcon
  aspectRatio?: string
  className?: string
  variant?: VisualVariant
  priority?: boolean
  children?: React.ReactNode
}

const variants: Record<VisualVariant, { background: string; accent: string; route: string }> = {
  flight: { background: 'from-[#26394b] via-[#1c2937] to-[#121923]', accent: 'text-sky-200', route: '#8ec5dc' },
  stay: { background: 'from-[#41534b] via-[#283a34] to-[#17221f]', accent: 'text-amber-200', route: '#d8bd85' },
  visa: { background: 'from-[#4d4540] via-[#302b2b] to-[#191a20]', accent: 'text-orange-200', route: '#dcae8d' },
  ground: { background: 'from-[#343b4b] via-[#242b38] to-[#171b25]', accent: 'text-rose-200', route: '#d59ba2' },
  default: { background: 'from-[#26394b] via-[#1c2937] to-[#121923]', accent: 'text-rose-200', route: '#c8878b' },
}

export default function TravelVisual({
  label,
  imageSrc,
  icon: Icon = Camera,
  aspectRatio = 'aspect-[4/3]',
  className = '',
  variant = 'default',
  priority = false,
  children,
}: TravelVisualProps) {
  const palette = variants[variant]

  return (
    <figure className={`relative w-full overflow-hidden flex flex-col justify-between ${aspectRatio} ${className}`}>
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={label}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
          className="object-cover object-[100%_20%]"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${palette.background}`} aria-hidden="true">
          <div className="absolute -right-14 -top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -right-1 -top-7 h-48 w-48 rounded-full border border-white/10" />
          <div className="absolute left-0 top-1/2 h-px w-full -rotate-[18deg] bg-white/10" />
          <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 640 400" preserveAspectRatio="none">
            <path d="M-20 310 C 130 160, 270 390, 390 205 S 560 85, 680 120" fill="none" stroke={palette.route} strokeWidth="1.5" strokeDasharray="5 9" />
            <circle cx="390" cy="205" r="5" fill={palette.route} />
            <circle cx="390" cy="205" r="14" fill="none" stroke={palette.route} strokeOpacity=".45" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className={`flex h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] shadow-2xl backdrop-blur-sm ${palette.accent}`}>
              <Icon size={42} strokeWidth={1.35} />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/65">Lemaiyan&apos;s Travels</span>
            <p className="mt-1 max-w-md font-display text-xl font-semibold leading-tight sm:text-2xl">{label}</p>
          </div>
        </div>
      )}
      {children && <div className="relative z-10 mt-auto w-full">{children}</div>}
    </figure>
  )
}
