'use client'

import { Building2, HeartHandshake, GraduationCap, Landmark, Store, Users } from 'lucide-react'

const sectors = [
  {
    icon: Building2,
    name: 'Corporate & Regional Enterprises',
    detail: 'Flight and accommodation booking support, with account billing or ticket changes arranged where available.',
  },
  {
    icon: HeartHandshake,
    name: 'NGOs & Development Agencies',
    detail: 'Field travel support across East Africa, with fare options and invoicing confirmed for each booking.',
  },
  {
    icon: GraduationCap,
    name: 'Academic & Medical Institutions',
    detail: 'Overseas study documentation, faculty conference itineraries, group student travel, and clinical fellowship visa support.',
  },
  {
    icon: Landmark,
    name: 'Government Entities & Parastatals',
    detail: 'Official delegation travel booking support and procurement documents supplied on request.',
  },
  {
    icon: Store,
    name: 'SMEs & Commercial Traders',
    detail: 'International flight options for trade exhibitions, with transit and business visa application guidance.',
  },
  {
    icon: Users,
    name: 'Individual & Leisure Travelers',
    detail: 'Holiday flight and accommodation booking support, with trip details confirmed before departure.',
  },
]

export default function Industries() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-primary-crimson text-xs font-bold uppercase tracking-wider">
            Client Sectors
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Trusted Across Diverse Sectors
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We adapt quickly to the unique governance, budgetary, and scheduling requirements of every organization we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sectors.map((sector) => {
            const Icon = sector.icon
            return (
              <div
                key={sector.name}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors"
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-lg bg-rose-50 flex items-center justify-center text-primary-crimson">
                    <Icon size={20} />
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
