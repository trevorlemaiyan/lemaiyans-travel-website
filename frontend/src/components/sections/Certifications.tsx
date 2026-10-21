'use client'

import {
  RiShieldCheckLine,
  RiAwardLine,
  RiBuilding4Line,
  RiFileTextLine,
  RiHeartLine,
  RiCheckboxCircleLine
} from 'react-icons/ri'
import { HiCheckBadge } from 'react-icons/hi2'
import { siteConfig } from '@/lib/site-config'

const accreditations = [
  {
    icon: RiAwardLine,
    title: 'IATA Accredited Travel Agent',
    badge: 'IATA',
    sub: 'International Air Transport Association',
    detail: 'Travel agent accreditation for scheduled air passenger ticketing. Ask the travel desk for current supporting documents.',
  },
  {
    icon: RiShieldCheckLine,
    title: 'KATA Member',
    badge: 'Member',
    sub: 'Kenya Association of Travel Agents',
    detail: 'Membership in the Kenya Association of Travel Agents. Ask the travel desk for current supporting documents.',
  },
  {
    icon: RiBuilding4Line,
    title: 'TRA Tourism Licence',
    badge: 'Class C Operator',
    sub: 'Tourism Regulatory Authority of Kenya',
    detail: 'Class C travel agency and ticketing licence. Ask the travel desk for current supporting documents.',
  },
  {
    icon: RiFileTextLine,
    title: 'KRA Tax Compliance',
    badge: 'KRA',
    sub: 'Kenya Revenue Authority',
    detail: 'Tax compliance documentation can be requested from the travel desk for procurement checks.',
  },
  {
    icon: RiHeartLine,
    title: 'AGPO Registration',
    badge: 'AGPO',
    sub: 'Access to Government Procurement Opportunities',
    detail: 'Women-owned enterprise registration recorded by the agency. Ask the travel desk for current supporting documents.',
  },
  {
    icon: RiCheckboxCircleLine,
    title: 'County Business Permit',
    badge: 'County permit',
    sub: 'County Government of Uasin Gishu',
    detail: 'County business permit recorded by the agency. Ask the travel desk for current supporting documents.',
  },
]

export default function Certifications() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-primary-crimson text-xs font-bold uppercase tracking-wider">
            <HiCheckBadge size={16} className="text-primary-crimson" />
            <span>Agency Credentials</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Accreditations &amp; Institutional Licensing
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Credential details recorded by the agency. Contact the travel desk for supporting documents and current validity dates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {accreditations.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="executive-card p-7 sm:p-8 flex flex-col justify-between space-y-4 border border-slate-200/80"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-primary-crimson">
                      <Icon size={22} />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-primary-crimson mt-0.5">
                      {item.sub}
                    </p>
                  </div>

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
