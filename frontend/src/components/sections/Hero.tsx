import { Phone, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/lib/site-config'

export default function Hero() {
  return (
    <section className="relative bg-[#131722] text-white pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(155,29,32,0.18),rgba(255,255,255,0))]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-center">
          
          <div className="max-w-4xl space-y-7 lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-300">
              <CheckCircle size={15} className="text-emerald-400" />
              <span>IATA Accredited Travel Agent · Global Flight Reservations</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Global Aviation &amp; Strategic Travel Management.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Serving clients across Kenya and internationally since {siteConfig.founded}. Our team helps arrange flights, accommodation, visa application guidance, and airport transfers where available.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary-crimson hover:bg-primary-burgundy text-white px-7 py-4 rounded-xl text-sm font-semibold shadow-lg shadow-primary-crimson/25 transition-all transform hover:-translate-y-0.5"
              >
                Request a Travel Quotation
              </Link>

              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-colors"
              >
                <Phone size={16} className="text-rose-400" />
                <span>Talk with an Expert</span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-slate-300">
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white font-display">Worldwide</span>
                <span className="text-xs text-slate-400">Domestic and international routes</span>
              </div>
              <div className="space-y-1">
                <span className="block text-xl font-bold text-white font-display">KATA &amp; TRA</span>
                <span className="text-xs text-slate-400">Licensed and accredited in Kenya</span>
              </div>
              <div className="space-y-1 col-span-2 sm:col-span-1">
                <span className="block text-xl font-bold text-white font-display">Global Transfers</span>
                <span className="text-xs text-slate-400">Transfers by arrangement</span>
              </div>
            </div>

            <p className="pt-1 text-xs font-semibold uppercase tracking-wider text-rose-300">
              Based in Eldoret, Kenya · Serving clients worldwide
            </p>
          </div>

          <figure className="relative isolate aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-slate-800 shadow-2xl shadow-black/30 lg:col-span-5 lg:aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1767868277770-d8cb69800992?auto=format&fit=crop&w=2000&q=92"
              alt="Passenger aircraft taxiing on an airport runway"
              fill
              priority
              quality={90}
              sizes="(max-width: 1023px) 100vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <p className="text-sm font-semibold text-white">Your next journey starts here.</p>
              <a href="https://unsplash.com/photos/airplane-on-the-runway-at-an-airport-XIIemdIapJs" target="_blank" rel="noreferrer" className="mt-1 inline-block text-xs text-slate-300 underline decoration-white/40 underline-offset-2 hover:text-white">
                Photo: Sevcan Alkan / Unsplash
              </a>
            </figcaption>
          </figure>

        </div>
      </div>
    </section>
  )
}
