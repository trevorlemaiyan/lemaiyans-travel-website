'use client'

import { MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, Award } from 'lucide-react'
import ContactForm from '@/components/sections/ContactForm'
import EldoretMap from '@/components/sections/EldoretMap'
import PageHero from '@/components/ui/PageHero'
import { siteConfig } from '@/lib/site-config'

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Our Travel Desk"
        subtitle="Visit our registered headquarters at Nandi Arcade, Eldoret, or transmit your travel requirements to our consultants for prompt, customized solutions."
        align="left"
      />

      {/* Main Form & Ledger Grid */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right: Office Ledger & Verified Details */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-lg border border-slate-200/80 space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-crimson">
                    Official Headquarters
                  </span>
                  <h3 className="font-display text-xl font-bold text-slate-900 mt-1">
                    Lemaiyans Travels Limited
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-rose-50 text-primary-crimson flex-shrink-0 mt-0.5">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <strong className="block text-xs uppercase text-slate-400 font-semibold">
                        Registered Premises
                      </strong>
                      <span className="text-slate-800 font-medium">{siteConfig.address}</span>
                      <p className="text-slate-500 text-xs mt-0.5">{siteConfig.poBox}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                    <div className="p-2 rounded-lg bg-rose-50 text-primary-crimson flex-shrink-0 mt-0.5">
                      <Clock size={18} />
                    </div>
                    <div>
                      <strong className="block text-xs uppercase text-slate-400 font-semibold">
                        Desk Working Hours
                      </strong>
                      <span className="text-slate-800 font-medium">{siteConfig.officeHours}</span>
                      <p className="text-slate-500 text-xs mt-0.5">Emergency flight monitoring available 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                    <div className="p-2 rounded-lg bg-rose-50 text-primary-crimson flex-shrink-0 mt-0.5">
                      <Phone size={18} />
                    </div>
                    <div>
                      <strong className="block text-xs uppercase text-slate-400 font-semibold">
                        Telephone Direct
                      </strong>
                      <a
                        href={`tel:${siteConfig.phoneTel}`}
                        className="text-slate-900 font-bold hover:text-primary-crimson transition-colors"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                    <div className="p-2 rounded-lg bg-rose-50 text-primary-crimson flex-shrink-0 mt-0.5">
                      <Mail size={18} />
                    </div>
                    <div>
                      <strong className="block text-xs uppercase text-slate-400 font-semibold">
                        Electronic Mail
                      </strong>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-slate-900 font-medium hover:text-primary-crimson transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 space-y-1">
                    <span className="font-semibold text-slate-800 block">
                      Rapid Quotation Turnaround
                    </span>
                    <p>
                      Our ticketing specialists evaluate each route and respond with custom flight itineraries within 30 to 60 minutes during desk hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* Accreditations Trust Note */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-2 text-xs text-slate-600">
                <span className="font-bold text-primary-crimson uppercase text-[11px] block">
                  Accredited Travel Operator
                </span>
                <p>
                  Licensed by the Tourism Regulatory Authority (Class C Ticketing) and accredited by IATA. Serving travelers nationwide and across the globe.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Free Interactive OpenStreetMap for Nandi Arcade Eldoret */}
      <EldoretMap showTitle={true} />
    </>
  )
}