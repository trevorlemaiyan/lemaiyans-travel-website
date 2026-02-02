import Link from 'next/link'
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Clock,
  MessageCircle
} from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Tours', href: '/tours' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ]

  const services = [
    { name: 'Air Ticketing', href: '/services#air-ticketing' },
    { name: 'Hotel Bookings', href: '/services#hotel-bookings' },
    { name: 'Visa Processing', href: '/services#visa-processing' },
    { name: 'Car Hire', href: '/services#car-hire' },
    { name: 'Custom Tours', href: '/tours' },
  ]

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/lemaiyans_travels', icon: Instagram },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold">Lemaiyan's Travels</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted partner in international and regional travel solutions.
              Connecting Kenya to the world with professionalism and care.
            </p>
            <div className="flex items-center space-x-1 text-slate-400 text-sm">
              <MapPin size={16} className="flex-shrink-0" />
              <span>Eldoret, Kenya</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary-red transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-slate-400 hover:text-primary-red transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <Mail size={16} className="flex-shrink-0" />
                <a
                  href="mailto:info@lemaiyanstravels.com"
                  className="hover:text-primary-red transition-colors duration-300"
                >
                  info@lemaiyanstravels.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <Phone size={16} className="flex-shrink-0" />
                <a
                  href="tel:+254123456789"
                  className="hover:text-primary-red transition-colors duration-300"
                >
                  +254 123 456 789
                </a>
              </div>
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <Clock size={16} className="flex-shrink-0" />
                <span>Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</span>
              </div>
              <div className="pt-3">
                <a
                  href="https://wa.me/254123456789?text=Hi! I'm interested in your travel services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 text-sm"
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-slate-400 hover:text-primary-red transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
            <div className="text-slate-400 text-sm text-center">
              <p>&copy; {new Date().getFullYear()} Lemaiyan's Travels. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer