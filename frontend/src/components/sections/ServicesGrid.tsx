import Link from 'next/link'
import TravelVisual from '@/components/ui/TravelVisual'
import { Plane, Building, FileCheck2, Car, Check } from 'lucide-react'

const activeServices = [
  {
    id: 'air-ticketing',
    title: 'Air Ticketing & Reservations',
    headline: 'Compare and book domestic and international flights across available scheduled airlines.',
    variant: 'flight' as const,
    icon: Plane,
    details: [
      'Compare domestic and international flight options across scheduled airlines.',
      'Review fare rules, baggage allowances, and connection details before booking.',
      'Get help with ticket changes, subject to airline rules and availability.'
    ],
  },
  {
    id: 'hotel-bookings',
    title: 'Worldwide Hotel & Accommodation',
    headline: 'Curated corporate and leisure accommodations from boutique hotels to five-star international resorts.',
    variant: 'stay' as const,
    icon: Building,
    details: [
      'Find hotels, resorts, and safari lodges for work or leisure.',
      'Compare available rates, amenities, and cancellation terms before confirming.',
      'Receive booking confirmations for your trip or visa application.'
    ],
  },
  {
    id: 'visa-assistance',
    title: 'Visa Advisory & Documentation',
    headline: 'Document review and guidance for tourist, business, and transit visa applications.',
    variant: 'visa' as const,
    icon: FileCheck2,
    details: [
      'Get guidance on tourist, business, and transit visa requirements.',
      'Review application documents against the relevant consular guidance.',
      'Visa decisions and processing times remain with the issuing authorities.'
    ],
  },
  {
    id: 'car-hire',
    title: 'Car Hire & Airport Transfers',
    headline: 'Executive ground transport and airport transfers in Kenya, with international arrangements on request.',
    variant: 'ground' as const,
    icon: Car,
    details: [
      'Arrange airport pickups and drop-offs at selected airports in Kenya.',
      'Choose from executive cars, passenger vans, and 4x4 vehicles where available.',
      'Vehicle, provider, and transfer availability are confirmed for each request.'
    ],
  },
]

export default function ServicesGrid() {
  return (
    <section id="services" className="scroll-mt-28 py-20 lg:py-28 bg-[#FAF9F6]">
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
              <article
                key={svc.id}
                id={svc.id}
                className="scroll-mt-28 executive-card overflow-hidden flex flex-col justify-between group"
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
                          <Check size={14} className="text-primary-crimson flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                    <Link
                      href={`/contact?service=${svc.id}`}
                      className="inline-flex items-center min-h-[44px] py-2 px-2 text-xs font-semibold text-primary-crimson hover:text-primary-burgundy transition-colors"
                    >
                      Request quotation
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}
