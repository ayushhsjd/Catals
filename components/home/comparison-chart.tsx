import Image from 'next/image'
import { SectionLabel } from '@/components/section-label'

export function ComparisonChart() {
  return (
    <section className="border-t border-border py-20 md:py-28" aria-labelledby="comparison-heading">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel className="justify-center">The Market vs. CATΛLS</SectionLabel>
          <h2 id="comparison-heading" className="mt-6 font-serif text-4xl leading-tight text-ivory text-balance md:text-6xl">
            Buyer problems &amp; the CATΛLS solution.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Why buyers get stuck elsewhere — and what changes inside every CATΛLS product.
          </p>
        </div>

        <figure className="mt-12 overflow-hidden border border-gold/20 bg-charcoal/40 shadow-[0_20px_80px_rgba(0,0,0,0.28)]">
          <Image
            src="/catals-buyer-comparison.png"
            alt="Comparison chart showing common buyer problems, typical experiences elsewhere, and the CATΛLS solution"
            width={1500}
            height={1500}
            sizes="(max-width: 768px) 100vw, 1200px"
            className="h-auto w-full"
          />
          <figcaption className="border-t border-border px-5 py-4 text-center text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Build what matters.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
