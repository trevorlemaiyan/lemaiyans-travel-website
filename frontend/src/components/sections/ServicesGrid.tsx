'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Plane, Building, FileCheck2, Car, Check } from 'lucide-react'

const activeServices = [
  {
    id: 'air-ticketing',
    title: 'Air Ticketing & Reservations',
    headline: 'Seamless domestic and international flight bookings across all major scheduled airlines worldwide.',
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=2000&q=90',
    icon: Plane,
    details: [
      'Direct confirmed bookings on all IATA-member carriers worldwide',
      'Flexible ticket alterations, date rescheduling, and quick rerouting',
      'Domestic flights across Kenya (Nairobi, Mombasa, Kisumu, Eldoret, Malindi, Diani)',
      'Transparent fare rules, baggage policies, and immediate e-ticket delivery'
    ],
    href: '/services#air-ticketing',
  },
  {
    id: 'hotel-bookings',
    title: 'Worldwide Hotel & Accommodation',
    headline: 'Curated corporate and leisure accommodations from boutique hotels to five-star international resorts.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2000&q=90',
    icon: Building,
    details: [
      'Competitive negotiated rates across local and global hotel chains',
      'Corporate lodging with flexible check-in, breakfast, and executive workspaces',
      'Resort, safari lodge, and beachfront villa reservations in top destinations',
      'Instant booking confirmation vouchers compliant with visa applications'
    ],
    href: '/services#hotel-bookings',
  },
  {
    id: 'visa-assistance',
    title: 'Visa Advisory & Documentation',
    headline: 'Thorough pre-submission auditing and guidance for tourist, business, and transit visas.',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=2000&q=90',
    icon: FileCheck2,
    details: [
      'Pre-audit of supporting documentation against strict embassy criteria',
      'Assistance with Schengen Area, United Kingdom, United States, and UAE/Dubai visas',
      'East Africa Tourist Visas and regional transit permit advisory',
      'Appointment scheduling and certified travel insurance packaging'
    ],
    href: '/services#visa-assistance',
  },
  {
    id: 'car-hire',
    title: 'Car Hire & Airport Transfers (Any Airport)',
    headline: 'Dependable executive ground transit and airport transfers at any airport in Kenya and beyond.',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=2000&q=90',
    icon: Car,
    details: [
      'Punctual airport pickups and drop-offs at any commercial airport',
      'Chauffeur-driven executive sedans, passenger vans, and 4x4 Land Cruisers',
      'Professional, courteous local drivers with deep route knowledge',
      'Available for corporate delegations, VIP guests, and inter-city travel'
    ],
    href: '/services#car-hire',
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-crimson/10 text-primary-crimson text-xs font-semibold tracking-wide">
            <span>What We Do</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Our Travel &amp; Accommodation Services
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            From single flight bookings to complex corporate itineraries, Lemaiyans Travels Limited delivers tailored solutions engineered for quality, efficiency, and budget.
          </p>
        </div>

        {/* 2x2 Rich Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {activeServices.map((svc) => {
            const Icon = svc.icon
            return (
              <div
                key={svc.id}
                className="executive-card overflow-hidden flex flex-col justify-between group"
              >
                {/* Image Container */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    quality={90}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/95 backdrop-blur-md shadow-md text-primary-crimson">
                    <Icon size={20} />
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">
                      {svc.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <p className="text-sm text-slate-600 font-medium mb-5 leading-relaxed">
                      {svc.headline}
                    </p>

                    <ul className="space-y-2.5">
                      {svc.details.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-normal">
                          <Check size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={svc.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-crimson hover:text-primary-burgundy transition-colors group-hover:underline underline-offset-4"
                    >
                      <span>Explore service details</span>
                      <ArrowUpRight size={14} />
                    </Link>

                    <Link
                      href={`/contact?service=${svc.id}`}
                      className="text-xs text-slate-500 hover:text-slate-900 font-medium transition-colors"
                    >
                      Request quote →
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
