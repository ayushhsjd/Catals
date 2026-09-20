import { SectionLabel } from '@/components/section-label'
import { Reveal } from '@/components/scroll-reveal'
import { whyCatals } from '@/lib/data'

export function WhyCatals() {
  return (
    <section className="border-t border-border bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionLabel>Why CATΛLS</SectionLabel>
            <h2 className="mt-6 font-serif text-5xl leading-none text-ivory md:text-7xl">
              Value
              <br />
              <span className="gold-gradient-text italic">first.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Every product, resource, and idea we create is measured against a single question:
              does this create real value for the person using it?
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {whyCatals.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 2) * 80}
                className="flex flex-col bg-charcoal p-7 md:p-8"
              >
                <span className="font-serif text-3xl text-gold/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-lg font-medium text-ivory">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
