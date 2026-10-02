import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  variant?: 'full' | 'icon'
  className?: string
  showText?: boolean
  dark?: boolean
}

const Logo = ({ variant = 'full', className = '', showText = true, dark = false }: LogoProps) => {
  const iconSize = variant === 'icon' ? 40 : 44

  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      <Image
        src="/images/brand/logo-icon.png"
        alt="Lemaiyan's Travels"
        width={iconSize}
        height={iconSize}
        className="transition-transform duration-300 group-hover:scale-105"
        priority
      />
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
