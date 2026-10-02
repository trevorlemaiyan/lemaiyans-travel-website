'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Plane, Building, FileCheck2, Car, ArrowRight, Check, Phone, ShieldCheck, Globe } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import { siteConfig } from '@/lib/site-config'

const detailedServices = [
  {
    id: 'air-ticketing',
    title: 'Air Ticketing & Reservations',
    badge: 'IATA ACCREDITED TICKETING',
    tagline: 'Reliable domestic and international passenger flight bookings across all major scheduled carriers worldwide.',
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=2000&q=90',
    icon: Plane,
    overview: 'As an officially accredited IATA agent, Lemaiyans Travels Limited connects you directly to global airline reservation inventories. Whether booking business class flights to London, regional transit across Africa, or domestic flights within Kenya, our consultants guarantee verified PNRs, transparent fare breakdowns, and proactive itinerary management.',
    scope: [
      'Scheduled domestic flights: Kenya Airways, Jambojet, Fly540, Skyward Express, and regional charter flights',
      'Global international routes: Emirates, Qatar Airways, Ethiopian Airlines, Lufthansa, KLM, Turkish Airlines, British Airways, and partner alliances',
      'Full-service ticketing: advanced seat selection, special meal requests, frequent flyer accruals, and extra baggage coordination',
      'Flight rebooking, schedule alterations, fast-track routing adjustments, and cancellation refunds'
    ],
    workflow: [
      'Requirement Review: Provide destination, travel dates, passenger passport particulars, and preferred airline class.',
      'Custom Itinerary Options: Our experts formulate 2–3 optimal schedules balancing convenience, connection times, and fare economy.',
      'Confirmation & Direct Issuance: Instant e-ticket delivery with verifiable airline PNR codes and tax-compliant eTIMS invoices.'
    ]
  },
  {
    id: 'hotel-bookings',
    title: 'Worldwide Hotel & Accommodation',
    badge: 'GLOBAL HOSPITALITY NETWORK',
    tagline: 'Strategic accommodation solutions spanning corporate hotels, luxury beachfront resorts, and premier safari lodges.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2000&q=90',
    icon: Building,
    overview: 'From city-center corporate business suites to secluded wilderness retreats, we secure vetted accommodations that meet your exact standards of safety, comfort, and financial efficiency. We liaise directly with property managers to secure value-added perks like airport shuttles, complimentary breakfast, and flexible cancellation policies.',
    scope: [
      'Corporate travel stays: business amenities, high-speed connectivity, conference hall facilities, and flexible check-in',
      'International hotel bookings across Europe, Asia, the Americas, Middle East, and Africa',
      'Resorts and lodge reservations for vacationers and organizational retreats',
      'Official booking confirmation vouchers tailored to embassy visa requirements'
    ],
    workflow: [
      'Preferences Gathering: Specify your destination city, budget tier, room configurations, and required amenities.',
      'Vetted Selection: We present verified lodging options with negotiated corporate and agent rates.',
      'Voucher Delivery: Immediate issuance of confirmed accommodation vouchers with check-in instructions.'
    ]
  },
  {
    id: 'visa-assistance',
    title: 'Visa Application & Advisory',
    badge: 'CONSULAR DOCUMENTATION',
    tagline: 'Comprehensive document auditing and guidance to maximize approval confidence for international travel.',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=2000&q=90',
    icon: FileCheck2,
    overview: 'Navigating evolving consular requirements demands precision. Our visa advisory team performs exhaustive pre-submission audits of your financial statements, invitation letters, travel health insurance policies, and flight itineraries to avoid avoidable processing delays or refusals.',
    scope: [
      'Schengen Area visas (France, Germany, Netherlands, Italy, Spain, etc.) for business and tourism',
      'United Kingdom Standard Visitor, business conference, and academic travel visas',
      'United States B1/B2 tourist and business visa application filing and DS-160 processing',
      'Dubai & UAE tourist and transit e-visas with swift turnaround times',
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
    title: 'Car Hire & Airport Transfers (Any Airport)',
    badge: 'GLOBAL GROUND TRANSIT',
    tagline: 'Punctual, professional meet-and-greet airport transfers and executive vehicle hire at any airport worldwide.',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=2000&q=90',
    icon: Car,
    overview: 'Whether arriving in Nairobi (JKIA), Eldoret (EDL), Mombasa (MIA), Kisumu (KIA), or any international gateway airport abroad, our airport transfer service ensures a seamless transition to your final destination. We manage a fleet of meticulously maintained, fully insured vehicles operated by courteous professional chauffeurs.',
    scope: [
      'Meet-and-greet airport pickups and drop-offs at ANY commercial airport locally or internationally',
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
  /* NOTE: Tour Packages kept dormant / hidden in codebase as requested
  {
    id: 'tour-packages',
    title: 'Curated Tour Packages',
    badge: 'EXPEDITIONS & LEISURE',
    tagline: 'Unforgettable wildlife safaris, coastal holidays, and bespoke holiday experiences.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1000&q=80',
    ...
  }
  */
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Travel & Aviation Services"
        subtitle="Provider of reliable, superior strategic travel and accommodation services to local and international clientele worldwide."
        align="left"
      />

      {/* Navigation Quick Strip */}
      <div className="bg-white border-b border-slate-200/80 sticky top-18 lg:top-22 z-30 shadow-sm overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-6 py-3.5 text-xs font-semibold text-slate-700 whitespace-nowrap">
          <span className="text-slate-400 font-mono text-[11px] uppercase tracking-wider">Services:</span>
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
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        quality={90}
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 45vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/95 backdrop-blur-md shadow-md text-primary-crimson">
                        <Icon size={22} />
                      </div>

                      <div className="absolute bottom-4 left-5 right-5 text-white">
                        <span className="text-[11px] font-mono tracking-wider uppercase text-rose-300">
                          {svc.badge}
                        </span>
                        <h3 className="font-display text-xl font-bold mt-0.5">
                          {svc.title}
                        </h3>
                      </div>
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
                            <Check size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action */}
                    <div className="pt-2">
                      <Link
                        href={`/contact?service=${svc.id}`}
                        className="inline-flex items-center gap-2 bg-slate-900 hover:bg-primary-crimson text-white px-6 py-3 rounded-xl text-xs font-semibold shadow-sm transition-colors"
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
              Speak directly with our consultants for tailored travel solutions that meet your exact timeline and budget.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-800 text-slate-800 px-5 py-3 rounded-xl text-xs font-semibold transition-colors"
            >
              <Phone size={14} className="text-primary-crimson" />
              <span>{siteConfig.phone}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary-crimson hover:bg-primary-burgundy text-white px-6 py-3 rounded-xl text-xs font-semibold shadow-sm transition-colors"
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