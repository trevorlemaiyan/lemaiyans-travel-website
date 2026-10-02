'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Plane, ShieldCheck, Globe, Building2, Phone, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/site-config'

export default function Hero() {
  return (
    <section className="relative bg-[#131722] text-white pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background ambient lighting and subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(155,29,32,0.18),rgba(255,255,255,0))]" />
      
      {/* Soft geometric grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Refined Editorial Lead */}
          <div className="lg:col-span-7 space-y-7">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-medium text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>IATA Accredited Travel Agent · Global Flight Reservations</span>
            </div>

            {/* Display Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Global Aviation &amp; Strategic Travel Management.
            </h1>

            {/* Warm, Authentic Narrative from Company Profile */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Serving local and international clientele worldwide since {siteConfig.founded}. From our offices in Eldoret, Kenya, we deliver dependable, cost-effective air ticketing, worldwide accommodation, visa advisory, and airport transfers for organizations and travelers everywhere.
            </p>

            {/* Quote Action & Quick Contacts */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-primary-crimson hover:bg-primary-burgundy text-white px-7 py-4 rounded-xl text-sm font-semibold shadow-lg shadow-primary-crimson/25 transition-all transform hover:-translate-y-0.5 group"
              >
                <span>Request a Travel Quotation</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-colors"
              >
                <Phone size={16} className="text-primary-crimson" />
                <span>Talk with an Expert</span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-slate-300">
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white font-display">Worldwide</span>
                <span className="text-xs text-slate-400">Flight reservations on all airlines</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white font-display">KATA &amp; TRA</span>
                <span className="text-xs text-slate-400">Licensed and accredited in Kenya</span>
              </div>
              <div className="space-y-1 col-span-2 sm:col-span-1">
                <span className="block text-xl font-bold text-white font-display">Global Transfers</span>
                <span className="text-xs text-slate-400">Transfers at any airport</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Travel Composition with Real Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] max-h-[560px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=2000&q=90"
                alt="Commercial aircraft soaring above sunset cloudscape - Lemaiyans Travels"
                fill
                priority
                quality={90}
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
              {/* Gradient Overlay for Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#131722] via-[#131722]/30 to-transparent" />

              {/* Floating Executive Trust Card */}
              <div className="absolute bottom-5 left-5 right-5 p-5 rounded-xl bg-white/95 backdrop-blur-md shadow-xl text-slate-900 border border-white/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary-crimson">
                    Official Travel Partner
                  </span>
                  <span className="text-[11px] font-medium text-slate-500">
                    Est. {siteConfig.founded}
                  </span>
                </div>
                <h4 className="font-display text-base font-bold text-slate-900 leading-snug">
                  {siteConfig.name}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Headquartered in Eldoret, Kenya. Delivering strategic flight ticketing, corporate travel dockets, and international hospitality arrangements anywhere you fly.
                </p>
                <div className="pt-1 flex items-center gap-4 text-xs font-semibold text-slate-800">
                  <span className="flex items-center gap-1.5 text-emerald-700">
                    <CheckCircle size={14} /> IATA Accredited
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-700">
                    <CheckCircle size={14} /> KATA Member
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
