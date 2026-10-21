interface PageHeroProps {
  title: string
  subtitle: string
  align?: 'left' | 'center'
}

export default function PageHero({ title, subtitle, align = 'left' }: PageHeroProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left max-w-3xl'

  return (
    <section className="relative min-h-[340px] lg:min-h-[400px] flex items-center overflow-hidden bg-[#131722] text-white pt-24 border-b border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(155,29,32,0.15),transparent)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="inline-flex items-center gap-2 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <span>Lemaiyans Travels Limited · Est. 2014</span>
        </div>

        <h1
          className={`font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight ${alignClass}`}
        >
          {title}
        </h1>

        <p
          className={`text-base md:text-lg text-slate-300 leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      </div>
    </section>
  )
}
