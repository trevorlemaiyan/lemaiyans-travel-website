'use client'

import Image from 'next/image'
import { CheckCircle2, Award, Shield, Users, HeartHandshake } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export default function CompanyOverview() {
  const pillars = [
    {
      title: 'Aviation at Our Core',
      description: siteConfig.motto,
    },
    {
      title: 'Global Reach, Personal Touch',
      description: 'Headquartered in Eldoret, Kenya, we serve local and international clientele traveling across all seven continents.',
    },
    {
      title: 'Cost-Effective & Dependable',
      description: 'We respect your need for optimal solutions that balance top-tier quality, efficiency, and strict budget norms.',
    },
    {
      title: 'Certified & Fully Licensed',
      description: 'IATA accredited, KATA registered, TRA licensed, and KRA tax-compliant for seamless individual and corporate engagements.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Story with World Travel Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] max-h-[520px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=90"
                alt="World landmarks and global travel - Lemaiyans Travels"
                fill
                quality={90}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-rose-300">
                  Established in {siteConfig.founded}
                </span>
                <h3 className="font-display text-xl font-bold leading-snug">
                  Strategic Travel Solutions Built on Trust &amp; Excellence
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Licensed by TRA &amp; accredited by IATA to promote and sell international air passenger transportation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Company Story & Vision */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold tracking-wide">
                <span>About Our Agency</span>
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
