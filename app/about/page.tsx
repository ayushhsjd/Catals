import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { SectionLabel } from '@/components/section-label'
import { Reveal } from '@/components/scroll-reveal'
import { FinalCta } from '@/components/final-cta'

export const metadata: Metadata = {
  title: 'About',
  description:
    'CATΛLS is building for the long term — a large ecosystem around knowledge, digital products, business, technology, finance, creativity, and innovation.',
}

const approach = ['Understand', 'Simplify', 'Create', 'Improve', 'Deliver value']

const leadership = [
  { name: 'Ayush Rai', role: 'Founder & CEO', image: '/leadership/rishik-kumar.png' },
  { name: 'Rishik Kumar', role: 'Founder & Co-Founder', image: '/leadership/ayush-rai.png' },
  { name: 'Ankush Kumar', role: 'Managing Director', image: null },
]

const ecosystem = [
  'Knowledge',
  'Digital Products',
  'Business',
  'Technology',
  'Finance',
  'Creativity',
  'Innovation',
]

export default function AboutPage() {
  return (
    <main>
      <PageHero
        label="About CATΛLS"
        title={
          <>
            We&apos;re building for the <span className="gold-gradient-text italic">long term.</span>
          </>
        }
        intro="Great ideas matter when they create real value. CATΛLS exists to turn knowledge and technology into products that genuinely help people and businesses grow."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionLabel>Our philosophy</SectionLabel>
              <h2 className="mt-6 font-serif text-5xl leading-none text-ivory md:text-7xl">
                Value <span className="gold-gradient-text italic">first.</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                We believe the most valuable companies are built on substance. Everything we create
                is measured against whether it makes someone&apos;s life or work meaningfully better.
              </p>
            </div>
            <div className="flex flex-col justify-center border-l border-gold/25 pl-8">
              <p className="font-serif text-3xl leading-snug text-ivory/90 text-balance md:text-4xl">
                “Great ideas matter when they create real value.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-charcoal py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionLabel>Our approach</SectionLabel>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-tight text-ivory text-balance md:text-6xl">
            A repeatable path from idea to value.
          </h2>
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

      <section className="border-t border-border py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <SectionLabel>Our ambition</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-ivory text-balance md:text-6xl">
              An ecosystem built to last.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              CATΛLS is building toward a large ecosystem spanning knowledge, digital products,
              business, technology, finance, creativity, and innovation — connected by a single
              standard of quality.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {ecosystem.map((tag) => (
              <span
                key={tag}
                className="border border-border px-5 py-2.5 text-sm text-ivory/80 transition-colors hover:border-gold/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-charcoal py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionLabel>Leadership</SectionLabel>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-ivory md:text-6xl">
            The people behind CATΛLS.
          </h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((person, i) => (
              <Reveal key={person.name} delay={(i % 3) * 90} className="group">
                <div className="relative flex aspect-[4/5] items-end overflow-hidden border border-border bg-graphite p-7">
                  {person.image ? (
                    <>
                      <Image
                        src={person.image}
                        alt={`Portrait of ${person.name}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 to-transparent" />
                    </>
                  ) : (
                    <p className="relative max-w-xs font-serif text-3xl leading-tight text-ivory/80">
                      Building value for the long term.
                    </p>
                  )}
                </div>
                <h3 className="mt-5 font-serif text-2xl text-ivory">{person.name}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.18em] text-gold">{person.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </main>
  )
}
