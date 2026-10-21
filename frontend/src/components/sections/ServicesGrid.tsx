'use client'

import Link from 'next/link'
import TravelVisual from '@/components/ui/TravelVisual'
import { ArrowUpRight, Plane, Building, FileCheck2, Car, Check } from 'lucide-react'

const activeServices = [
  {
    id: 'air-ticketing',
    title: 'Air Ticketing & Reservations',
    headline: 'Compare and book domestic and international flights across available scheduled airlines.',
    variant: 'flight' as const,
    icon: Plane,
    details: [
      'Flight options across scheduled domestic and international airlines',
      'Assistance with ticket changes, subject to airline rules, availability, and any applicable fees',
      'Domestic flights across Kenya (Nairobi, Mombasa, Kisumu, Eldoret, Malindi, Diani)',
      'Clear fare rules and baggage details, with e-ticket delivery after booking confirmation'
    ],
    href: '/services#air-ticketing',
  },
  {
    id: 'hotel-bookings',
    title: 'Worldwide Hotel & Accommodation',
    headline: 'Curated corporate and leisure accommodations from boutique hotels to five-star international resorts.',
    variant: 'stay' as const,
    icon: Building,
    details: [
      'Accommodation options with rates and booking terms confirmed before reservation',
      'Corporate lodging with flexible check-in, breakfast, and executive workspaces',
      'Resort, safari lodge, and beachfront villa reservations in top destinations',
      'Booking confirmation vouchers for use with visa applications'
    ],
    href: '/services#hotel-bookings',
  },
  {
    id: 'visa-assistance',
    title: 'Visa Advisory & Documentation',
    headline: 'Document review and guidance for tourist, business, and transit visa applications.',
    variant: 'visa' as const,
    icon: FileCheck2,
    details: [
      'Review of supporting documents against published consular guidance',
      'Assistance with Schengen Area, United Kingdom, United States, and UAE/Dubai visas',
      'East Africa Tourist Visas and regional transit permit advisory',
      'Appointment scheduling and certified travel insurance packaging'
    ],
    href: '/services#visa-assistance',
  },
  {
    id: 'car-hire',
    title: 'Car Hire & Airport Transfers',
    headline: 'Executive ground transport and airport transfers in Kenya, with international arrangements on request.',
    variant: 'ground' as const,
    icon: Car,
    details: [
      'Airport pickups and drop-offs at selected airports in Kenya',
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
        
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-primary-crimson text-xs font-bold uppercase tracking-wider">
            What We Do
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Our Travel &amp; Accommodation Services
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            From single flight bookings to complex corporate itineraries, Lemaiyans Travels Limited delivers tailored solutions engineered for quality, efficiency, and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {activeServices.map((svc) => {
            const Icon = svc.icon
            return (
              <div
                key={svc.id}
                className="executive-card overflow-hidden flex flex-col justify-between group"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <TravelVisual
                    label={svc.title}
                    icon={Icon}
                    variant={svc.variant}
                    aspectRatio="h-60 w-full"
                  >
                  </TravelVisual>
                </div>

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
                      className="inline-flex items-center min-h-[44px] py-2 text-xs font-semibold text-primary-crimson hover:text-primary-burgundy transition-colors group-hover:underline underline-offset-4"
                    >
                      <span>View booking details &amp; scope</span>
                    </Link>

                    <Link
                      href={`/contact?service=${svc.id}`}
                      className="inline-flex items-center min-h-[44px] py-2 px-2 text-xs text-slate-600 hover:text-slate-900 font-medium transition-colors"
                    >
                      Request quotation
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
