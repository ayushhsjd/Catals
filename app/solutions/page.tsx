import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SectionLabel } from '@/components/section-label'
import { Reveal } from '@/components/scroll-reveal'
import { FinalCta } from '@/components/final-cta'
import { solutions } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Solutions',
  alternates: { canonical: '/solutions' },
  description:
    'CATΛLS creates practical digital products and knowledge-based solutions built around real needs — across business, trading, AI, self-improvement, finance, and digital earning.',
}

const approach = ['Understand', 'Simplify', 'Create', 'Improve', 'Deliver value']

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        label="Solutions"
        title={
          <>
            Your goal. <span className="gold-gradient-text italic">Our solution.</span>
          </>
        }
        intro="CATΛLS creates practical digital products and knowledge-based solutions built around real needs. We turn complex subjects into clear, usable resources that help people and businesses move forward."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionLabel>What we create</SectionLabel>
          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((s, i) => (
              <Reveal
                key={s.title}
                delay={(i % 4) * 70}
                className="flex flex-col bg-obsidian p-7 md:p-8"
              >
                <span className="font-serif text-3xl text-gold/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-lg font-medium text-ivory">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-charcoal py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <SectionLabel>Our approach</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-ivory text-balance md:text-6xl">
              A deliberate path from problem to value.
            </h2>
          </div>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {approach.map((step, i) => (
              <Reveal key={step} delay={i * 80} as="li" className="border-t border-gold/30 pt-5">
                <span className="font-serif text-2xl text-gold">{String(i + 1).padStart(2, '0')}</span>
                <p className="mt-3 text-lg font-medium text-ivory">{step}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <FinalCta />
    </main>
  )
}
