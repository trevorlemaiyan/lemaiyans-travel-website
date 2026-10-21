'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Logo from '@/components/ui/Logo'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Tours', href: '/tours' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    const handlePointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !navRef.current?.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4">
      <nav
        ref={navRef}
        aria-label="Main navigation"
        className="relative mx-auto flex h-[68px] max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#151922]/95 px-3 shadow-xl shadow-slate-950/10 backdrop-blur-xl sm:px-5"
      >
        <Logo showText className="shrink-0" />

        <div className="hidden flex-1 items-center justify-center gap-3 desktop:flex xl:gap-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`nav-link rounded-full px-3 py-2 text-sm text-white/75 hover:bg-white/10 hover:text-white xl:px-3.5 ${isActive(item.href) ? 'bg-white/10 !text-white' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 items-center desktop:flex">
          <Link href="/contact" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary-crimson px-5 text-sm font-semibold tracking-tight text-white transition-colors hover:bg-primary-burgundy focus-visible:outline-white">
            Plan a trip <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:outline-white desktop:hidden"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <div
          id="mobile-navigation"
          hidden={!isMenuOpen}
          className="absolute inset-x-2 top-[calc(100%+10px)] rounded-[1.5rem] border border-white/10 bg-[#151922] p-3 shadow-2xl shadow-slate-950/20 desktop:hidden"
        >
          <div className="grid gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`rounded-xl px-4 py-3 text-[15px] font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white ${isActive(item.href) ? 'bg-white/10 !text-white' : ''}`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary-crimson px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-burgundy">
              Plan a trip <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
