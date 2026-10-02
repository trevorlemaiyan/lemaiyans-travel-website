import Hero from '@/components/sections/Hero'
import ServicesGrid from '@/components/sections/ServicesGrid'
import CompanyOverview from '@/components/sections/CompanyOverview'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Certifications from '@/components/sections/Certifications'
import Industries from '@/components/sections/Industries'
import EldoretMap from '@/components/sections/EldoretMap'
import CTABanner from '@/components/sections/CTABanner'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <CompanyOverview />
      <WhyChooseUs />
      <Certifications />
      <Industries />
      <EldoretMap />
      <CTABanner />
    </>
  )
}