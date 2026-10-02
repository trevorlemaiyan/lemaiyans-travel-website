'use client'

import { MapPin, Clock, Phone, Navigation, ExternalLink, Globe } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

interface EldoretMapProps {
  showTitle?: boolean
  compact?: boolean
}

export default function EldoretMap({ showTitle = true, compact = false }: EldoretMapProps) {
  const lat = 0.5182
  const lon = 35.2818
  const osmEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=35.2730%2C0.5110%2C35.2910%2C0.5240&layer=mapnik&marker=${lat}%2C${lon}`
  const osmDirectionsUrl = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=16/${lat}/${lon}`
  const googleDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Nandi Arcade Building, Oloo Street, Eldoret, Kenya')}`

  return (
    <section className={compact ? 'w-full' : 'py-20 lg:py-28 bg-[#FAF9F6] border-t border-slate-200/60'}>
      <div className={compact ? 'w-full' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
        {showTitle && (
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/70 text-slate-800 text-xs font-semibold tracking-wide">
              <Globe size={14} className="text-primary-crimson" />
              <span>Headquarters Location</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Our Offices in Eldoret, Kenya
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We manage journeys worldwide for clients anywhere, but we take pride in our verified physical roots. Visit our travel office in central Eldoret for face-to-face consultations and document processing.
            </p>
          </div>
        )}

        {/* Refined Map & Address Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-white">
          {/* Map Frame */}
          <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[460px] bg-slate-100">
            <iframe
              title="Lemaiyans Travels Headquarters - Nandi Arcade, Eldoret"
              src={osmEmbedUrl}
              className="w-full h-full min-h-[380px] lg:min-h-[460px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Coordinate pill */}
            <div className="absolute top-4 left-4 bg-slate-900/90 text-white px-3.5 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 backdrop-blur-md shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Eldoret CBD · Nandi Arcade, Oloo St</span>
            </div>
          </div>

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
                    <strong className="block text-xs uppercase text-slate-400 font-semibold">Address</strong>
                    <span className="text-slate-800">{siteConfig.address}</span>
                    <span className="block text-xs text-slate-500 mt-0.5">{siteConfig.poBox}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-rose-50 text-primary-crimson flex-shrink-0 mt-0.5">
                    <Clock size={18} />
                  </div>
                  <div>
                    <strong className="block text-xs uppercase text-slate-400 font-semibold">Desk Hours</strong>
                    <span className="text-slate-800">{siteConfig.officeHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-rose-50 text-primary-crimson flex-shrink-0 mt-0.5">
                    <Phone size={18} />
                  </div>
                  <div>
                    <strong className="block text-xs uppercase text-slate-400 font-semibold">Direct Telephone</strong>
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

            <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
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

              <a
                href={osmDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 border border-slate-200 hover:border-slate-400 text-slate-700 py-2.5 px-4 rounded-xl text-xs font-medium transition-colors"
              >
                <span>View on OpenStreetMap</span>
                <ExternalLink size={13} className="text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
