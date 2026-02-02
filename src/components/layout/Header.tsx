'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Tours', href: '/tours' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact', isButton: true },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white shadow-lg backdrop-blur-lg bg-opacity-95'
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-primary-red rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
              Lemaiyan's Travels
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              item.isButton ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="bg-primary-red text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-primary-red ${
                    isScrolled ? 'text-slate-700' : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? 'text-slate-700 hover:bg-slate-100'
                  : 'text-white hover:bg-white hover:bg-opacity-10'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}>
          <div className="py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors duration-300 ${
                  item.isButton 
                    ? 'bg-primary-red text-white mx-4 mt-4 hover:bg-red-700 text-center'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header