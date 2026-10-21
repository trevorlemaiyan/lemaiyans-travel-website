'use client'

import { MapPin, Clock, Phone, Navigation, ExternalLink, Globe } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

interface EldoretMapProps {
  showTitle?: boolean
  compact?: boolean
}

export default function EldoretMap({ showTitle = true, compact = false }: EldoretMapProps) {
  const lat = siteConfig.coordinates.lat
  const lon = siteConfig.coordinates.lng
  const googleDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`

  return (
    <section className={compact ? 'w-full' : 'py-20 lg:py-28 bg-[#FAF9F6] border-t border-slate-200/60'}>
      <div className={compact ? 'w-full' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
        {showTitle && (
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="flex items-center gap-2 text-primary-crimson text-xs font-bold uppercase tracking-wider">
              <Globe size={14} />
              <span>Headquarters Location</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Our Office
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We support individuals and organizations planning travel across Kenya and internationally. Visit us at Nandi Arcade or work with us remotely.
            </p>
          </div>
        )}

        {/* Refined Map & Address Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-white">
          {/* Direct Google Maps pin with visible coordinates for manual entry */}
          <a
            href={googleDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open the office pin in Google Maps at ${siteConfig.coordinates.dms}`}
            className="group relative flex min-h-[380px] flex-col justify-between overflow-hidden bg-[#F3F1EC] p-6 text-[#151922] focus-visible:outline-primary-crimson lg:col-span-7 lg:min-h-[460px] lg:p-8"
          >
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(#151922_0.7px,transparent_0.7px)] [background-size:20px_20px]" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-[#151922]/[0.08]" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-4 -top-8 h-56 w-56 rounded-full border border-[#151922]/[0.08]" />

            <div className="relative z-10 inline-flex w-fit items-center gap-2 rounded-full border border-[#E8E7E3] bg-white/90 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-700 shadow-sm">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-primary-crimson" />
              Google Maps pin
            </div>

            <div className="relative z-10 flex flex-1 flex-col items-center justify-center py-10 text-center">
              <div className="grid h-20 w-20 place-items-center rounded-full border border-primary-crimson/15 bg-white shadow-[0_18px_42px_-22px_rgba(125,23,26,0.5)] transition-transform duration-300 group-hover:-translate-y-1">
                <MapPin size={38} strokeWidth={1.6} className="text-primary-crimson" aria-hidden="true" />
              </div>
              <p className="mt-5 font-display text-2xl font-semibold tracking-[-0.045em]">Nandi Arcade Building</p>
              <p className="mt-1 text-sm text-slate-600">First Floor, Oloo Street</p>
            </div>

            <div className="relative z-10 flex flex-col gap-2 border-t border-[#151922]/10 pt-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Exact coordinates</span>
                <span className="mt-1 block text-sm font-semibold tabular-nums text-[#151922]">{siteConfig.coordinates.dms}</span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-crimson">
                Open pinned location <ExternalLink size={13} aria-hidden="true" />
              </span>
            </div>
          </a>

          {/* Details Column */}
          <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between bg-white border-t lg:border-t-0 lg:border-l border-slate-200/80">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary-crimson">
                  Registered Office
                </span>
                <h3 className="font-display text-2xl font-bold text-slate-900 mt-1">
                  Nandi Arcade Building
                </h3>
                <p className="text-sm font-medium text-slate-600 mt-0.5">
                  First Floor, Oloo Street · Eldoret CBD
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-rose-50 text-primary-crimson flex-shrink-0 mt-0.5">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <strong className="block text-xs uppercase text-slate-600 font-semibold">Address</strong>
                    <span className="text-slate-800">{siteConfig.address}</span>
                    <span className="block text-xs text-slate-500 mt-0.5">{siteConfig.poBox}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-rose-50 text-primary-crimson flex-shrink-0 mt-0.5">
                    <Clock size={18} />
                  </div>
                  <div>
                    <strong className="block text-xs uppercase text-slate-600 font-semibold">Desk Hours</strong>
                    <span className="text-slate-800">{siteConfig.officeHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-rose-50 text-primary-crimson flex-shrink-0 mt-0.5">
                    <Phone size={18} />
                  </div>
                  <div>
                    <strong className="block text-xs uppercase text-slate-600 font-semibold">Direct Telephone</strong>
                    <a
                      href={`tel:${siteConfig.phoneTel}`}
                      className="text-slate-900 font-semibold hover:text-primary-crimson transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href={googleDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-primary-crimson text-white py-3 px-5 rounded-xl text-xs font-semibold shadow-sm transition-colors"
              >
                <Navigation size={14} />
                <span>Get Directions (Google Maps)</span>
                <ExternalLink size={13} className="text-slate-400" />
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
