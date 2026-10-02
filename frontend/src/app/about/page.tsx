'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, ShieldCheck, Award, Heart, Compass, Target, Globe } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import { siteConfig } from '@/lib/site-config'

export default function AboutPage() {
  const values = [
    {
      title: 'Aviation at the Core',
      description: siteConfig.motto,
    },
    {
      title: 'Customer-Centric Gratification',
      description: 'Our customers are at the heart of everything we do; their gratification and seamless travel experience is our greatest reward.',
    },
    {
      title: 'Uncompromising Safety',
      description: 'We give utmost priority to the safety of our clients and their property in every area of our business, without exception.',
    },
    {
      title: 'Agility & Proactive Support',
      description: 'We relentlessly monitor changing global situations and take proactive measures to ensure our clients’ travel schedules are never impacted.',
    },
    {
      title: 'Cost-Effective Solutions',
      description: 'We respect our clients’ need for an optimal solution that balances high quality, strict efficiency, and budget expectations.',
    },
    {
      title: 'Excellence Through Dedication',
      description: 'Excellence is achieved through systematic, persistent effort. Our passion is manifested in our zeal to constantly challenge ourselves.',
    },
  ]

  return (
    <>
      <PageHero
        title="About Lemaiyans Travels Limited"
        subtitle={`Since its inception in ${siteConfig.founded}, Lemaiyans Travels Limited has made its mark as a provider of reliable, strategic travel and accommodation services to local and international clientele worldwide.`}
        align="left"
      />

      {/* Narrative Section with Visual */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-primary-crimson text-xs font-semibold">
                <span>Company Background</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                Dependability, Integrity &amp; Strategic Travel Solutions
              </h2>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>Lemaiyans Travels Limited</strong> was established in {siteConfig.founded} in Eldoret, Kenya, to deliver superior, stress-free travel management. Based in Eldoret, Kenya, we serve individual travellers, business executives, educational institutions, NGOs, and corporate entities traveling across Kenya and to every corner of the world.
                </p>
                <p>
                  We value our clients and respect their need for an optimal solution that is both effective and economical. Dependability and cost-effectiveness while adhering to stringent quality norms are the hallmark of our business. Our consultants are expert professionals who study each unique requirement and recommend custom solutions so that we meet your expectations of quality, efficiency, and budget.
                </p>
              </div>

              {/* Accreditations Row */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <span className="block text-primary-crimson font-bold text-sm">IATA</span>
                  <span className="text-[11px] text-slate-500 font-medium">Accredited Agent</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <span className="block text-primary-crimson font-bold text-sm">KATA</span>
                  <span className="text-[11px] text-slate-500 font-medium">Certified Member</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <span className="block text-primary-crimson font-bold text-sm">TRA</span>
                  <span className="text-[11px] text-slate-500 font-medium">Class C Licensed</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <span className="block text-primary-crimson font-bold text-sm">AGPO</span>
                  <span className="text-[11px] text-slate-500 font-medium">Women-Owned Entity</span>
                </div>
              </div>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[4/3.5] lg:aspect-[4/4.2] w-full bg-slate-900 border border-slate-200/80">
                <Image
                  src="/images/about/company-travel-landmarks.jpg"
                  alt="Lemaiyans Travels Limited - Global Destinations and World Travel"
                  fill
                  priority
                  quality={95}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-300">
                    Official Company Identity
                  </span>
                  <p className="font-display text-base sm:text-lg font-bold leading-snug">
                    &ldquo;{siteConfig.motto}&rdquo;
                  </p>
                  <p className="text-xs text-slate-300">
                    Lemaiyans Travels Limited · Core Foundation
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Vision & Mission Grid */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Vision Card */}
            <div className="executive-card p-8 sm:p-10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-primary-crimson flex items-center justify-center">
                <Target size={24} />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900">
                Our Vision
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We are dedicated to building strategic, long-term partnerships with our clients by closely liaising with them to provide tailor-made solutions that meet their specific needs.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                We are fully committed to the service and satisfaction of our clients, maintaining open channels of communication to address concerns at every stage of service, from proposing and planning right up to the last mile.
              </p>
            </div>

            {/* Mission Card */}
            <div className="executive-card p-8 sm:p-10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-primary-crimson flex items-center justify-center">
                <Compass size={24} />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900">
                Our Mission
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To develop creative, reliable, and economical solutions that offer our clients flexibility and unquestionable value.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                We are committed to the success and growth of our clients’ business through effective business relationships built on a solid foundation of trust and respect.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Values & Culture */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              <span>What We Value</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Our Core Values &amp; Company Culture
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Our company culture reflects the values of our founders and defines how we translate our mission and vision into reality for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="executive-card p-7 sm:p-8 space-y-3 flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-display text-lg font-bold text-slate-900 mb-2">
                    {v.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Consultation Action */}
      <section className="py-16 bg-[#131722] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-display text-xl sm:text-2xl font-bold">
              Ready to Partner with Lemaiyans Travels?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Visit our offices at Nandi Arcade (1st Floor, Eldoret) or get in touch with our travel team online.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary-crimson hover:bg-primary-burgundy text-white px-7 py-3.5 rounded-xl text-xs font-semibold shadow-sm transition-colors"
          >
            <span>Talk to Us Today</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}