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
  const googleMapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.7071138751746!2d35.27352667069618!3d0.5153791768063767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101a4ebf00001%3A0x57ae78e9a9703577!2sNandi%20Arcade!5e0!3m2!1sen!2ske!4v1792619988958!5m2!1sen!2ske'

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
          {/* Exact Google Maps embed supplied for the Nandi Arcade pin */}
          <div className="h-[380px] overflow-hidden bg-slate-100 lg:col-span-7 lg:h-[460px]">
            <iframe
              title="Lemaiyans Travels office at Nandi Arcade"
              src={googleMapEmbedUrl}
              width="600"
              height="450"
              className="h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
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
