import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, ArrowUpRight, ShieldCheck, Award } from 'lucide-react'
import Logo from '@/components/ui/Logo'
import { siteConfig } from '@/lib/site-config'

export default function Footer() {
  const quickLinks = [
    { name: 'Our Services', href: '/services' },
    { name: 'About Lemaiyans', href: '/about' },
    { name: 'Contact & Location', href: '/contact' },
    { name: 'Privacy Notice', href: '/privacy' },
  ]

  const services = [
    { name: 'Air Ticketing & Reservations', href: '/services#air-ticketing' },
    { name: 'Hotel & Accommodation Booking', href: '/services#hotel-bookings' },
    { name: 'Visa Application & Advisory', href: '/services#visa-assistance' },
    { name: 'Car Hire & Airport Transfers (Any Airport)', href: '/services#car-hire' },
    /* NOTE: Tour packages dormant until launch
    { name: 'Tour Packages', href: '/services#tour-packages' },
    */
  ]

  return (
    <footer className="bg-[#131722] text-slate-200 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-5">
            <Logo showText />
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              {siteConfig.name} is an IATA-accredited travel agency providing strategic, dependable flight ticketing, worldwide accommodations, visa applications, and airport transfers for local and international clientele.
            </p>

            <p className="text-xs text-rose-300/90 italic">
              &ldquo;{siteConfig.motto}&rdquo;
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-medium text-slate-300">
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                IATA Accredited
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                KATA Certified
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                TRA Licensed
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                AGPO Certified
              </span>
            </div>
          </div>

          {/* Active Services */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Travel Capabilities
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{service.name}</span>
                    <ArrowUpRight size={13} className="text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desk Contact & Location */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Registered Office
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-primary-crimson flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-medium text-slate-200">{siteConfig.address}</span>
                  <span className="text-slate-400">{siteConfig.poBox}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock size={16} className="text-primary-crimson flex-shrink-0" />
                <span>{siteConfig.officeHours}</span>
              </div>

              <div className="pt-2 space-y-1.5 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-primary-crimson" />
                  <a href={`tel:${siteConfig.phoneTel}`} className="font-semibold text-slate-100 hover:text-primary-crimson transition-colors">
                    {siteConfig.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-primary-crimson" />
                  <a href={`mailto:${siteConfig.email}`} className="text-slate-300 hover:text-white transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/services" className="hover:text-slate-200 transition-colors">Services</Link>
            <Link href="/about" className="hover:text-slate-200 transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-slate-200 transition-colors">Contact</Link>
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
