'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowUpRight, Phone, Instagram, Facebook } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import { siteConfig } from '@/lib/site-config'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    if (isMenuOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Tours', href: '/tours' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const linkColor = isScrolled
    ? 'text-slate-800 hover:text-primary-crimson'
    : 'text-slate-100 hover:text-white'

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px] lg:h-[88px]">
          
          <div className="flex items-center gap-4 sm:gap-6">
            <Logo showText dark={isScrolled} />
            <div className="hidden xl:flex items-center gap-2 pl-4 border-l border-slate-300/40 text-xs">
              <span className={`font-medium ${isScrolled ? 'text-slate-600' : 'text-slate-300'}`}>
                IATA Accredited · KATA Member
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium text-sm tracking-normal transition-colors ${linkColor}`}
              >
                {item.name}
              </Link>
            ))}

            <div className="flex items-center gap-3 pl-4 border-l border-slate-300/30">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className={`hidden md:flex items-center gap-2 text-xs font-medium px-3 py-2 rounded-lg transition-colors ${
                  isScrolled ? 'text-slate-700 hover:text-primary-crimson' : 'text-slate-200 hover:text-white'
                }`}
              >
                <Phone size={14} className={isScrolled ? 'text-primary-crimson' : 'text-rose-400'} />
                <span>{siteConfig.phone}</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm bg-primary-crimson hover:bg-primary-burgundy text-white transition-all transform hover:-translate-y-0.5"
              >
                <span>Request Quotation</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed inset-0 top-[72px] bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
      <div
        id="mobile-navigation-drawer"
        aria-hidden={!isMenuOpen}
        hidden={!isMenuOpen}
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl transition-all duration-200 origin-top ${
          isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95 pointer-events-none'
        }`}
      >
        <div className="px-5 py-6 space-y-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-primary-crimson rounded-lg transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-200 space-y-2">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-slate-800 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
            >
              <Phone size={15} className="text-primary-crimson" />
              <span>Call Desk: {siteConfig.phone}</span>
            </a>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-primary-crimson text-white py-3 rounded-lg text-sm font-semibold hover:bg-primary-burgundy transition-colors shadow-sm"
            >
              Request a Travel Quotation
            </Link>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-3">
              <a
                href={siteConfig.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-50 hover:bg-rose-50 text-slate-700 hover:text-primary-crimson text-xs font-medium transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={14} className="text-primary-crimson" />
                <span>Instagram</span>
              </a>
              <a
                href={siteConfig.socials.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-xs font-medium transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={14} className="text-blue-600" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
