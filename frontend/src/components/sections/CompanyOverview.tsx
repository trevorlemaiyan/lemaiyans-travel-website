'use client'

import TravelVisual from '@/components/ui/TravelVisual'
import { CheckCircle2, Award, Shield, Users, HeartHandshake, Compass } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export default function CompanyOverview() {
  const pillars = [
    {
      title: 'Aviation at Our Core',
      description: siteConfig.motto,
    },
    {
      title: 'Global Reach, Personal Touch',
      description: 'We support travelers planning journeys across Kenya and to destinations around the world.',
    },
    {
      title: 'Cost-Effective & Dependable',
      description: 'We respect your need for optimal solutions that balance top-tier quality, efficiency, and strict budget norms.',
    },
    {
      title: 'Travel Credentials',
      description: 'The company lists industry and regulatory credentials. Current supporting documents and validity dates are available on request.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] max-h-[520px] w-full">
              <TravelVisual
                label={`Travel and aviation services since ${siteConfig.founded}`}
                aspectRatio="aspect-[4/5] min-h-[460px] h-full"
                icon={Compass}
                variant="flight"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="text-primary-crimson text-xs font-bold uppercase tracking-wider">
                About Our Agency
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                Your Trusted Travel Partner Across Kenya &amp; Worldwide.
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Since its inception in {siteConfig.founded}, <strong>Lemaiyans Travels Limited</strong> has made its mark in the industry as a provider of reliable, superior strategic travel and accommodation services to a diverse group of local and international clientele.
              </p>
              <p>
                We value our clients and respect their need for an optimal solution that is both effective and economical. Our consultants are expert professionals who study each unique requirement and recommend custom itineraries so that we consistently exceed your expectations of quality, efficiency, and budget.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2"
                >
                  <div className="flex items-center gap-2 text-primary-crimson font-bold text-sm">
                    <CheckCircle2 size={16} />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
