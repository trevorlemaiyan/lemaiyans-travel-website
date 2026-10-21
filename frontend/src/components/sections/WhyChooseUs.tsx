'use client'

import { ShieldCheck, Compass, Headphones, SlidersHorizontal, Building2, Car } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const values = [
  {
    icon: Compass,
    title: 'Aviation at the Core',
    detail: 'Our airline booking channels let our consultants compare scheduled flight options, explain fare rules, and share ticket and airline reference details after booking confirmation.',
  },
  {
    icon: ShieldCheck,
    title: 'Client Safety & Property Priority',
    detail: 'We share booking details and provider terms before confirmation, and can help coordinate transport with local providers where available.',
  },
  {
    icon: Headphones,
    title: 'Proactive Schedule Protection',
    detail: 'When plans change, our consultants can review available alternatives and help coordinate a rebooking with the airline.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Tailor-Made Solutions & Budget Norms',
    detail: 'Our consultants review corporate and individual requirements and help compare options for schedule and budget.',
  },
  {
    icon: Building2,
    title: 'Physical Walk-in & Virtual Desk',
    detail: 'Visit our office for an in-person consultation, or work remotely with our travel desk from anywhere in the world.',
  },
  {
    icon: Car,
    title: 'Airport Transfers by Arrangement',
    detail: 'We coordinate passenger meet-and-greet transfers at selected airports in Kenya, with international transfers arranged on request.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-primary-crimson text-xs font-bold uppercase tracking-wider">
            Our Commitments
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Why Travelers Choose Lemaiyans Travels
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We believe that excellence is achieved through systematic, persistent dedication. Our values define how we translate our mission and vision into reality for every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="md:col-span-2 lg:col-span-2 executive-card p-8 sm:p-10 flex flex-col justify-between bg-white border border-slate-200">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-crimson">
                <Compass size={18} />
                <span>Foundational Commitment</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                {values[0].title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                {values[0].detail}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3 text-xs font-semibold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Scheduled airline booking options</span>
            </div>
          </div>

          <div className="executive-card p-7 sm:p-8 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary-crimson/10 flex items-center justify-center text-primary-crimson">
                <ShieldCheck size={22} />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                {values[1].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {values[1].detail}
              </p>
            </div>
          </div>

          {values.slice(2).map((item) => {
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
