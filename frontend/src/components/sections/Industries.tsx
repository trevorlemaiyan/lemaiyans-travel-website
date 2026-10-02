'use client'

import { Building2, HeartHandshake, GraduationCap, Landmark, Store, Users } from 'lucide-react'

const sectors = [
  {
    icon: Building2,
    name: 'Corporate & Regional Enterprises',
    detail: 'Complete corporate travel management, consolidated billing accounts, and rapid ticket rerouting for busy business executives.',
  },
  {
    icon: HeartHandshake,
    name: 'NGOs & Development Agencies',
    detail: 'Field mission logistical support across East Africa, flexible fare classes, and direct invoice reconciliation for aid programs.',
  },
  {
    icon: GraduationCap,
    name: 'Academic & Medical Institutions',
    detail: 'Overseas study documentation, faculty conference itineraries, group student travel, and clinical fellowship visa support.',
  },
  {
    icon: Landmark,
    name: 'Government Entities & Parastatals',
    detail: 'Official delegation air ticketing, emergency flight modifications, and full AGPO procurement compliance.',
  },
  {
    icon: Store,
    name: 'SMEs & Commercial Traders',
    detail: 'Cost-optimized international flight options, trade exhibition travel, and fast-track transit and business visa advisory.',
  },
  {
    icon: Users,
    name: 'Individual & Leisure Travelers',
    detail: 'Personalized holiday flights, worldwide hotel reservations, and friendly, stress-free travel planning right up to the last mile.',
  },
]

export default function Industries() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/70 text-slate-800 text-xs font-semibold tracking-wide">
            <span>Client Sectors</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Trusted Across Diverse Sectors
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We adapt quickly to the unique governance, budgetary, and scheduling requirements of every organization we serve.
          </p>
        </div>

        {/* 6 Clean Executive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sectors.map((sector) => {
            const Icon = sector.icon
            return (
              <div
                key={sector.name}
                className="executive-card p-7 sm:p-8 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-primary-crimson">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    {sector.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sector.detail}
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
