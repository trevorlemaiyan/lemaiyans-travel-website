import { ArrowUpRight, Globe2, Plane } from 'lucide-react'

interface PageHeroProps {
  title: string
  subtitle: string
  align?: 'left' | 'center'
}

function ReachCard() {
  return (
    <aside aria-label="Kenya-based travel support for journeys worldwide" className="relative hidden min-h-[220px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#151922] p-6 text-white shadow-[0_28px_70px_-34px_rgba(21,25,34,0.55)] lg:flex lg:flex-col lg:justify-between">
      <svg aria-hidden="true" viewBox="0 0 440 220" className="absolute inset-0 h-full w-full opacity-80">
        <defs>
          <linearGradient id="reach-route" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#B82428" />
            <stop offset="1" stopColor="#E7B5B4" />
          </linearGradient>
          <radialGradient id="reach-glow">
            <stop stopColor="#9B1D20" stopOpacity=".26" />
            <stop offset="1" stopColor="#9B1D20" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="370" cy="20" r="148" fill="url(#reach-glow)" />
        <circle cx="352" cy="96" r="78" fill="none" stroke="white" strokeOpacity=".08" />
        <circle cx="352" cy="96" r="54" fill="none" stroke="white" strokeOpacity=".08" />
        <path d="M42 173 C 119 152, 131 62, 222 74 S 310 150, 395 44" fill="none" stroke="url(#reach-route)" strokeWidth="2" strokeDasharray="5 8" />
        <circle cx="42" cy="173" r="5" fill="#B82428" />
        <circle cx="395" cy="44" r="5" fill="#E7B5B4" />
      </svg>

      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80">
          <Globe2 size={13} className="text-rose-300" aria-hidden="true" />
          Kenya based · worldwide support
        </span>
        <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-rose-200" aria-hidden="true">
          <ArrowUpRight size={16} />
        </span>
      </div>

      <div className="relative z-10 flex items-end justify-between gap-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">One travel desk</p>
          <p className="mt-2 max-w-[20ch] font-display text-xl font-semibold leading-tight tracking-[-0.04em] text-white">
            Your journey, thoughtfully arranged.
          </p>
        </div>
        <Plane size={28} strokeWidth={1.4} className="mb-1 shrink-0 -rotate-12 text-rose-200" aria-hidden="true" />
      </div>
    </aside>
  )
}

export default function PageHero({ title, subtitle, align = 'left' }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#E8E7E3] bg-[#FAF9F6] pb-12 pt-32 text-[#151922] sm:pb-14 sm:pt-36 lg:pb-16">
      <div aria-hidden="true" className="absolute inset-y-0 right-0 -z-10 w-[35%] bg-[radial-gradient(ellipse_at_100%_0%,rgba(155,29,32,0.08),transparent_70%)]" />

      <div className={`mx-auto grid w-full max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-10 ${align === 'center' ? '' : ''}`}>
        <div className={`${align === 'center' ? 'mx-auto text-center lg:col-span-12' : 'lg:col-span-7'}`}>
          <div className={`mb-5 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-crimson ${align === 'center' ? 'justify-center' : ''}`}>
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-primary-crimson" />
            <span>Lemaiyans Travels Limited · Est. 2014</span>
          </div>

          <h1 className={`max-w-[18ch] font-display text-[2rem] font-semibold leading-[1.04] tracking-[-0.055em] text-[#151922] sm:text-5xl md:text-[3.5rem] ${align === 'center' ? 'mx-auto' : ''}`}>
            {title}
          </h1>

          <p className={`mt-5 max-w-[58ch] text-base leading-[1.55] tracking-[-0.025em] text-slate-600 sm:text-lg ${align === 'center' ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        </div>

        {align === 'left' && <div className="hidden lg:col-span-5 lg:block"><ReachCard /></div>}
      </div>
    </section>
  )
}
