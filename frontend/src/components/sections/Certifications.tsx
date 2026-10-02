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
    badge: 'IATA Certified',
    sub: 'International Air Transport Association',
    detail: 'Officially certified by IATA to promote and issue international air passenger transportation on scheduled airlines worldwide.',
  },
  {
    icon: RiShieldCheckLine,
    title: 'KATA Active Member',
    badge: 'KATA Verified',
    sub: 'Kenya Association of Travel Agents',
    detail: 'Continuous member of Kenya’s premier travel agent association, upholding the highest standards of professional ethics and passenger advocacy.',
  },
  {
    icon: RiBuilding4Line,
    title: 'TRA Tourism Licence',
    badge: 'Class C Operator',
    sub: 'Tourism Regulatory Authority of Kenya',
    detail: 'Officially licensed Class C (Travel Agency - Ticketing) commercial operator under the Tourism Act with registered office in Eldoret.',
  },
  {
    icon: RiFileTextLine,
    title: 'KRA Tax Compliant Entity',
    badge: 'Fully Compliant',
    sub: 'Kenya Revenue Authority',
    detail: 'Fully compliant corporate taxpayer in good standing, ready for immediate institutional vendor onboarding and eTIMS tax invoicing.',
  },
  {
    icon: RiHeartLine,
    title: 'AGPO Certified Enterprise',
    badge: 'National Treasury',
    sub: 'Access to Government Procurement Opportunities',
    detail: 'Duly registered under the Public Procurement and Asset Disposal Act as a certified women-owned enterprise in Kenya.',
  },
  {
    icon: RiCheckboxCircleLine,
    title: 'County Business Permit',
    badge: 'Authorized',
    sub: 'County Government of Uasin Gishu',
    detail: 'Licensed commercial travel and passenger transport operator headquartered in Eldoret CBD, serving clients locally and worldwide.',
  },
]

export default function Certifications() {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold tracking-wide border border-emerald-200">
            <HiCheckBadge size={16} className="text-emerald-600" />
            <span>Verified Industry Standing</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Accreditations &amp; Institutional Licensing
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Lemaiyans Travels Limited is fully certified and accredited by national regulatory authorities and international aviation bodies for your peace of mind and prompt corporate procurement.
          </p>
        </div>

        {/* 6 Clean Executive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {accreditations.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="executive-card p-7 sm:p-8 flex flex-col justify-between space-y-4"
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
