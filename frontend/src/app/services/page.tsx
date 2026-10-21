'use client'

import Link from 'next/link'
import TravelVisual from '@/components/ui/TravelVisual'
import { Plane, Building, FileCheck2, Car, ArrowRight, Check, Phone, ShieldCheck, Globe } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import { siteConfig } from '@/lib/site-config'

const detailedServices = [
  {
    id: 'air-ticketing',
    title: 'Air Ticketing & Reservations',
    badge: 'IATA ACCREDITED TICKETING',
    tagline: 'Domestic and international passenger flight bookings across scheduled airlines.',
    variant: 'flight' as const,
    icon: Plane,
    overview: 'As an IATA-accredited travel agent, Lemaiyans Travels Limited helps clients compare scheduled airline options and arrange domestic and international flights. Our consultants explain fare rules and provide ticket and airline reference details after booking confirmation.',
    scope: [
      'Scheduled domestic flights: Kenya Airways, Jambojet, Fly540, Skyward Express, and regional charter flights',
      'Global international routes: Emirates, Qatar Airways, Ethiopian Airlines, Lufthansa, KLM, Turkish Airlines, British Airways, and partner alliances',
      'Full-service ticketing: advanced seat selection, special meal requests, frequent flyer accruals, and extra baggage coordination',
      'Help with rebooking, schedule changes, and cancellation requests, subject to airline fare rules and availability'
    ],
    workflow: [
      'Requirement Review: Provide destination, travel dates, passenger passport particulars, and preferred airline class.',
      'Custom Itinerary Options: Our experts formulate 2–3 optimal schedules balancing convenience, connection times, and fare economy.',
      'Confirmation & Issuance: E-ticket and airline reference details are shared after the booking is confirmed.'
    ]
  },
  {
    id: 'hotel-bookings',
    title: 'Worldwide Hotel & Accommodation',
    badge: 'GLOBAL HOSPITALITY NETWORK',
    tagline: 'Strategic accommodation solutions spanning corporate hotels, luxury beachfront resorts, and premier safari lodges.',
    variant: 'stay' as const,
    icon: Building,
    overview: 'We help compare accommodation options, from city-center business hotels to resorts and safari lodges. Amenities, rates, and cancellation terms vary by property and are confirmed before booking.',
    scope: [
      'Corporate travel stays: business amenities, high-speed connectivity, conference hall facilities, and flexible check-in',
      'International hotel bookings across Europe, Asia, the Americas, Middle East, and Africa',
      'Resorts and lodge reservations for vacationers and organizational retreats',
      'Official booking confirmation vouchers tailored to embassy visa requirements'
    ],
    workflow: [
      'Preferences Gathering: Specify your destination city, budget tier, room configurations, and required amenities.',
      'Selection: We present available lodging options with rates and terms for review.',
      'Voucher Delivery: Confirmed accommodation vouchers and check-in instructions.'
    ]
  },
  {
    id: 'visa-assistance',
    title: 'Visa Application & Advisory',
    badge: 'CONSULAR DOCUMENTATION',
    tagline: 'Document review and guidance for international travel applications. Visa decisions remain with the relevant authorities.',
    variant: 'visa' as const,
    icon: FileCheck2,
    overview: 'Our visa advisory team reviews application documents for completeness against the relevant consular guidance. Visa decisions and processing times are set by the issuing authorities.',
    scope: [
      'Schengen Area visas (France, Germany, Netherlands, Italy, Spain, etc.) for business and tourism',
      'United Kingdom Standard Visitor, business conference, and academic travel visas',
      'United States B1/B2 tourist and business visa application filing and DS-160 processing',
      'Dubai and UAE tourist and transit e-visas',
      'Regional travel: East Africa Tourist Visas and cross-border transit permits'
    ],
    workflow: [
      'Document Audit: We cross-reference your documentation against current consular checklists.',
      'Form Submission: Precise online portal application filing and biometric appointment reservation.',
      'Dossier Preparation: Assembling certified flight reservations, hotel vouchers, and financial proofs into an embassy-ready pack.'
    ]
  },
  {
    id: 'car-hire',
    title: 'Car Hire & Airport Transfers',
    badge: 'GLOBAL GROUND TRANSIT',
    tagline: 'Meet-and-greet airport transfers and executive vehicle hire in Kenya, with international arrangements on request.',
    variant: 'ground' as const,
    icon: Car,
    overview: 'We can arrange airport transfers at selected airports in Kenya. International transfers can be coordinated on request through local providers, subject to destination and availability.',
    scope: [
      'Meet-and-greet airport pickups and drop-offs at selected airports in Kenya; international transfers arranged on request',
      'Chauffeur-driven executive sedans for corporate executives and VIP dignitaries',
      'Rugged 4x4 Toyota Land Cruisers and Prados suited for inter-county travel and rough terrain',
      'Executive passenger minivans (Toyota HiAce/Noah) for corporate delegations and group travel'
    ],
    workflow: [
      'Flight Tracking: Provide flight number; our dispatchers monitor real-time arrival to account for any flight delays.',
      'Meet & Greet: Dedicated chauffeur stations at the arrivals terminal with distinct passenger identification.',
      'Safe Transit: Direct, comfortable transportation to your hotel, office, or residence.'
    ]
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Travel & Aviation Services"
        subtitle="Travel booking and advisory support for local and international journeys. Service availability depends on destination and provider."
        align="left"
      />

      {/* Navigation Quick Strip */}
      <div className="sticky top-[88px] z-30 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md lg:top-[92px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-x-6 gap-y-2 py-3.5 text-xs font-semibold text-slate-700">
          <span className="text-slate-500 font-mono-tech text-[11px] uppercase tracking-wider">Services:</span>
          {detailedServices.map((svc) => (
            <a
              key={svc.id}
              href={`#${svc.id}`}
              className="hover:text-primary-crimson transition-colors"
            >
              {svc.title}
            </a>
          ))}
        </div>
      </div>

      {/* Main Service Sections */}
      <div className="divide-y divide-slate-100 bg-[#FAF9F6]">
        {detailedServices.map((svc, index) => {
          const isEven = index % 2 === 1
          const Icon = svc.icon

          return (
            <section key={svc.id} id={svc.id} className="py-20 lg:py-28 scroll-mt-36">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${isEven ? 'lg:grid-flow-dense' : ''}`}>
                  
                  {/* Visual Column */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:col-start-8' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] w-full">
                      <TravelVisual
                        label={svc.title}
                        icon={Icon}
                        variant={svc.variant}
                        aspectRatio="aspect-[4/3] w-full"
                      />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:col-start-1' : ''}`}>
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary-crimson">
                        {svc.badge}
                      </span>
                      <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                        {svc.title}
                      </h2>
                      <p className="text-base text-slate-700 font-medium leading-relaxed">
                        {svc.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {svc.overview}
                    </p>

                    {/* Scope Card */}
                    <div className="p-6 rounded-xl bg-white border border-slate-200/80 shadow-sm space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                        Scope of Capabilities
                      </h4>
                      <ul className="space-y-2.5">
                        {svc.scope.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            <Check size={16} className="text-primary-crimson flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action */}
                    <div className="pt-2">
                      <Link
                        href={`/contact?service=${svc.id}`}
                        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-primary-crimson"
                      >
                        <span>Inquire About {svc.title}</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>

                </div>

              </div>
            </section>
          )
        })}
      </div>

      {/* Consultation Bar */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
              Have a Custom Corporate or Individual Requirement?
            </h3>
            <p className="text-sm text-slate-600">
        Speak with our consultants about travel options that fit your schedule and budget.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-xs font-semibold text-slate-800 transition-colors hover:border-slate-800"
            >
              <Phone size={14} className="text-primary-crimson" />
              <span>{siteConfig.phone}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary-crimson px-6 py-3 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-primary-burgundy"
            >
              <span>Contact Us</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
