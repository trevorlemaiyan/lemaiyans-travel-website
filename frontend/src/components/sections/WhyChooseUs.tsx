'use client'

import { ShieldCheck, Compass, Headphones, Sparkles, Building2, Car } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const values = [
  {
    icon: Compass,
    title: 'Aviation at the Core',
    detail: 'Aviation is our core existence. Direct access to all IATA scheduled airlines guarantees immediate e-ticket issuance, accurate fare classes, and instant PNR generation.',
  },
  {
    icon: ShieldCheck,
    title: 'Client Safety & Property Priority',
    detail: 'We give utmost priority to the safety of our clients and their property in every area of our business, from vetted ground transit to secure booking protocols.',
  },
  {
    icon: Headphones,
    title: 'Proactive Schedule Protection',
    detail: 'We relentlessly monitor changing flight situations and proactively manage re-bookings so that our clients’ schedules are never negatively impacted.',
  },
  {
    icon: Sparkles,
    title: 'Tailor-Made Solutions & Budget Norms',
    detail: 'Our consultants analyze each unique corporate or individual requirement to recommend solutions meeting your exact expectations of efficiency and cost.',
  },
  {
    icon: Building2,
    title: 'Physical Walk-in & Virtual Desk',
    detail: 'Visit our office at Nandi Arcade (First Floor, Oloo Street, Eldoret) for in-person consultations, or work remotely with our digital travel desk from anywhere in the world.',
  },
  {
    icon: Car,
    title: 'Airport Transfers at Any Airport',
    detail: 'Seamless passenger meet-and-greet transfers at any airport in Kenya or internationally, utilizing clean, vetted vehicles with professional chauffeurs.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/70 text-slate-800 text-xs font-semibold tracking-wide">
            <span>Our Commitments</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Why Travelers Choose Lemaiyans Travels
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We believe that excellence is achieved through systematic, persistent dedication. Our values define how we translate our mission and vision into reality for every client.
          </p>
        </div>

        {/* 6 Clean Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="executive-card p-7 sm:p-8 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-crimson/10 flex items-center justify-center text-primary-crimson">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
