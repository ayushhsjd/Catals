import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { NicheCard } from '@/components/niche-card'
import { Reveal } from '@/components/scroll-reveal'
import { FinalCta } from '@/components/final-cta'
import { niches } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Niches',
  alternates: { canonical: '/niches' },
  description:
    'Six specialized niches: agencies & businesses, trading, AI, self-improvement, finance, and digital earning & freelancing.',
}

export default function NichesPage() {
  return (
    <main>
      <PageHero
        label="Six Niches"
        title={
          <>
            Built around <span className="gold-gradient-text italic">what matters.</span>
          </>
        }
        intro="CATΛLS builds deep, specialized value across ten focused areas that shape modern life and work. Each niche is a focused world of products and knowledge."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {niches.map((niche, i) => (
              <Reveal key={niche.id} delay={(i % 3) * 90}>
                <NicheCard niche={niche} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </main>
  )
}
