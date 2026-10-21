import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Compass, Globe2, MapPinned } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import { tourDestinations } from '@/data/tours'

function DestinationCard({ destination }: { destination: (typeof tourDestinations)[number] }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={destination.image}
          alt={destination.imageAlt}
          fill
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
      </div>
      <div className="space-y-3 p-5 sm:p-6">
        <h3 className="font-display text-xl font-bold text-slate-900">{destination.name}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{destination.description}</p>
        <p className="text-xs text-slate-500">
          Photo credit:{' '}
          <a href={destination.photoUrl} target="_blank" rel="noreferrer" className="underline decoration-slate-300 underline-offset-2 hover:text-primary-crimson">
            {destination.credit}
          </a>
        </p>
      </div>
    </article>
  )
}

export default function ToursPage() {
  const kenyaDestinations = tourDestinations.filter((destination) => destination.region === 'kenya')
  const globalDestinations = tourDestinations.filter((destination) => destination.region === 'worldwide')

  return (
    <>
      <PageHero
        title="Tours, shaped around you"
        subtitle="From a Kenyan safari to a journey across the world, tell us what you want to experience and our travel team will help plan a personal itinerary."
        align="left"
      />

      <section className="bg-white py-14 sm:py-18 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
          <div className="space-y-4 lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary-crimson">Made for your kind of trip</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">A destination idea is just the beginning.</h2>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600">
              For now, every tour starts with a conversation. Contact us directly and we can work with you to create a personal tour package for the place you want to go. Share your destination, interests, dates, and budget, and we will discuss the available options with you.
            </p>
          </div>
          <div className="rounded-2xl bg-[#131722] p-6 text-white sm:p-8 lg:col-span-5">
            <div className="flex items-center gap-3 text-rose-300">
              <Compass size={20} />
              <span className="text-xs font-bold uppercase tracking-wider">Plan with our travel desk</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-200">
              No set itinerary is required. Tell us what matters to you and we will help explore a route that fits.
            </p>
            <Link href="/contact?service=tour-planning" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary-crimson px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-burgundy">
              Start planning a tour <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section id="magical-kenya" className="scroll-mt-24 bg-[#FAF9F6] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 max-w-3xl space-y-3">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary-crimson"><MapPinned size={15} /> Magical Kenya</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Find your own way through Kenya.</h2>
            <p className="text-base leading-relaxed text-slate-600">
              Think wildlife and wide-open country, the Indian Ocean coast, highlands, lakes, and living culture. We can help shape a Kenya trip around your pace and the places you want to see.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {kenyaDestinations.map((destination, index) => (
              <div key={destination.id} className={index === kenyaDestinations.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}>
                <DestinationCard destination={destination} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="worldwide" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-9 max-w-3xl space-y-3">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary-crimson"><Globe2 size={15} /> Around the world</p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Go wherever you have been dreaming of.</h2>
            <p className="text-base leading-relaxed text-slate-600">
              These places are inspiration, not a fixed catalogue. We can help plan international city breaks, coast escapes, cultural journeys, and multi-stop trips based on your interests.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {globalDestinations.map((destination, index) => (
              <div key={destination.id} className={index === globalDestinations.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}>
                <DestinationCard destination={destination} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#131722] py-16 text-white sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Have somewhere in mind?</h2>
            <p className="text-sm leading-relaxed text-slate-300">Tell us where you would like to go. We will get in touch to discuss a tour built around you.</p>
          </div>
          <Link href="/contact?service=tour-planning" className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg bg-primary-crimson px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-burgundy">
            Contact us about your tour <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
