'use client'

import Link from 'next/link'
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export default function CTABanner() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden bg-[#151922] text-white shadow-2xl border border-slate-800">
          {/* Executive radial background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(155,29,32,0.18),transparent_60%)]" />
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#151922] via-[#151922]/95 to-[#151922]/80" />

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="text-rose-300 text-xs font-semibold uppercase tracking-wider">
                Start Planning Your Next Journey
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Ready to Experience Dependable, Tailor-Made Travel?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Our consultants review your requirements and help compare travel options that fit your needs and budget.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-primary-crimson hover:bg-primary-burgundy text-white px-7 py-4 rounded-xl text-sm font-semibold shadow-lg shadow-primary-crimson/25 transition-all transform hover:-translate-y-0.5"
                >
                  Request a Quotation
                </Link>

                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-medium text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-sm transition-colors"
                >
                  <Phone size={15} className="text-rose-400" />
                  <span>Call {siteConfig.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10 text-sm">
              <div className="space-y-1">
                <span className="block text-xs uppercase text-slate-300 font-semibold tracking-wider">
                  Physical Travel Desk
                </span>
                <div className="flex items-start gap-2.5 text-white">
                  <MapPin size={16} className="text-rose-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">{siteConfig.address}</span>
                </div>
              </div>

              <div className="space-y-1 pt-3 border-t border-white/10">
                <span className="block text-xs uppercase text-slate-300 font-semibold tracking-wider">
                  Direct Telephone
                </span>
                <div className="flex items-center gap-2.5 text-white">
                  <Phone size={16} className="text-rose-400 flex-shrink-0" />
                  <a href={`tel:${siteConfig.phoneTel}`} className="font-medium text-slate-200 hover:text-white transition-colors">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="space-y-1 pt-3 border-t border-white/10">
                <span className="block text-xs uppercase text-slate-300 font-semibold tracking-wider">
                  Electronic Mail
                </span>
                <div className="flex items-center gap-2.5 text-white">
                  <Mail size={16} className="text-rose-400 flex-shrink-0" />
                  <a href={`mailto:${siteConfig.email}`} className="font-medium text-slate-200 hover:text-white transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
