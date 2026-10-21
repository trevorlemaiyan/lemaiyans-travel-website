import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, CheckCircle, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const heroImage = 'https://images.unsplash.com/photo-1767868277770-d8cb69800992?auto=format&fit=crop&w=2000&q=92'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9F6] pb-16 pt-28 text-[#151922] sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(155,29,32,0.06),transparent_68%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 desktop:grid-cols-12 desktop:gap-14 desktop:px-10">
        <div className="space-y-7 desktop:col-span-7">
          <div className="space-y-4">
            <p className="inline-flex items-center gap-2.5 rounded-full border border-[#E8E7E3] bg-white px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.13em] text-primary-crimson shadow-sm">
              <CheckCircle size={14} className="text-primary-crimson" aria-hidden="true" />
              IATA accredited · Global flight reservations
            </p>
            <h1 className="max-w-[13ch] font-display text-[2rem] font-semibold leading-[1.02] tracking-[-0.06em] text-[#151922] sm:text-5xl md:text-[3.5rem] xl:text-[4rem]">
              Global aviation &amp; strategic travel management.
            </h1>
            <p className="max-w-[56ch] text-base leading-[1.6] tracking-[-0.025em] text-slate-600 sm:text-lg">
              Serving clients across Kenya and internationally since {siteConfig.founded}. Our team helps arrange flights, accommodation, visa application guidance, and airport transfers where available.
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
            <Link href="/contact" className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-primary-crimson px-6 py-3.5 text-sm font-semibold tracking-tight text-white shadow-lg shadow-primary-crimson/15 transition-all hover:-translate-y-0.5 hover:bg-primary-burgundy focus-visible:outline-offset-4">
              Request a travel quotation <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
            <a href={`tel:${siteConfig.phoneTel}`} className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-full border border-[#D9D8D2] bg-white px-6 py-3.5 text-sm font-semibold tracking-tight text-[#151922] transition-colors hover:border-[#151922] hover:bg-[#F4F3EF]">
              <Phone size={15} className="text-primary-crimson" aria-hidden="true" />
              Talk with an expert
            </a>
          </div>

          <div className="grid max-w-2xl grid-cols-3 gap-4 border-t border-[#E4E2DC] pt-6 sm:gap-7">
            <div>
              <p className="font-display text-xl font-semibold tracking-[-0.04em] text-[#151922] sm:text-2xl">Worldwide</p>
              <p className="mt-1 text-xs leading-snug text-slate-500 sm:text-sm">Domestic and international routes</p>
            </div>
            <div>
              <p className="font-display text-xl font-semibold tracking-[-0.04em] text-[#151922] sm:text-2xl">KATA &amp; TRA</p>
              <p className="mt-1 text-xs leading-snug text-slate-500 sm:text-sm">Licensed and accredited in Kenya</p>
            </div>
            <div>
              <p className="font-display text-xl font-semibold tracking-[-0.04em] text-[#151922] sm:text-2xl">Since {siteConfig.founded}</p>
              <p className="mt-1 text-xs leading-snug text-slate-500 sm:text-sm">Based in Eldoret, working worldwide</p>
            </div>
          </div>
        </div>

        <figure className="relative desktop:col-span-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-[#E8E6E1] shadow-[0_28px_80px_-30px_rgba(21,25,34,0.3)] ring-1 ring-black/5">
            <Image
              src={heroImage}
              alt="Passenger aircraft taxiing on an airport runway"
              fill
              priority
              quality={90}
              sizes="(max-width: 939px) 100vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151922]/75 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
              <div>
                <p className="text-sm font-semibold text-white sm:text-base">Your next journey starts here.</p>
                <a href="https://unsplash.com/photos/airplane-on-the-runway-at-an-airport-XIIemdIapJs" target="_blank" rel="noreferrer" className="mt-1 inline-block text-xs text-white/75 underline decoration-white/40 underline-offset-2 hover:text-white">
                  Photo: Sevcan Alkan / Unsplash
                </a>
              </div>
              <span aria-hidden="true" className="mb-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm">
                <ArrowUpRight size={17} />
              </span>
            </figcaption>
          </div>
          <div aria-hidden="true" className="absolute -bottom-4 -left-4 -z-10 h-24 w-24 rounded-[1.5rem] border border-primary-crimson/20 sm:-bottom-5 sm:-left-5 sm:h-28 sm:w-28" />
        </figure>
      </div>
    </section>
  )
}
