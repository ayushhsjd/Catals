import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'

export function FeaturedProducts() {
  return (
    <section className="border-t border-border bg-charcoal py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
        <div>
          <SectionLabel>Built around your needs</SectionLabel>
          <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-tight text-ivory text-balance md:text-7xl">
            Your solution starts with a conversation.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            If you are looking for a focused solution, practical knowledge, or a digital resource for one of our ten niches, contact CATΛLS and tell us what matters to you.
          </p>
        </div>
        <div className="border border-gold/30 bg-obsidian p-7 md:p-9">
          <p className="text-sm leading-relaxed text-muted-foreground">
            We listen first, understand the need, and then shape the right way forward.
          </p>
          <div className="mt-8 flex flex-col gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-gold px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-obsidian transition-colors hover:bg-gold-soft"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+917903608490"
              className="inline-flex items-center justify-center gap-2 border border-border px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-ivory transition-colors hover:border-gold/50"
            >
              <Phone className="h-4 w-4 text-gold" />
              +91 7903608490
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
