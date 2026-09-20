import { SectionLabel } from '@/components/section-label'
import { NicheCard } from '@/components/niche-card'
import { Reveal } from '@/components/scroll-reveal'
import { niches } from '@/lib/data'

export function NichesSection() {
  return (
    <section id="niches" className="scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <SectionLabel>Our Niches</SectionLabel>
          <h2 className="mt-6 font-serif text-5xl leading-tight text-ivory text-balance md:text-7xl">
            Built around what matters.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            CATΛLS builds practical digital products and knowledge across ten focused categories designed around the challenges people face.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {niches.map((niche, i) => (
            <Reveal key={niche.id} delay={(i % 3) * 90}>
              <NicheCard niche={niche} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
