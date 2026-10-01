import type { Metadata } from 'next'
import { Hero } from '@/components/home/hero'
import { NichesSection } from '@/components/home/niches-section'
import { WhyCatals } from '@/components/home/why-catals'
import { ComparisonChart } from '@/components/home/comparison-chart'
import { Testimonials } from '@/components/testimonials'
import { FinalCta } from '@/components/final-cta'

export const metadata: Metadata = { alternates: { canonical: '/' } }

export default function HomePage() {
  return (
    <main>
      <Hero />
      <NichesSection />
      <WhyCatals />
      <ComparisonChart />
      <Testimonials />
      <FinalCta />
    </main>
  )
}
