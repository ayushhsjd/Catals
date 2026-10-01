import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 grain opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-1/3 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(201,164,92,0.35), transparent 60%)' }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-20 md:px-8 md:pt-40">
        <div className="max-w-4xl">
          <SectionLabel>CATΛLS</SectionLabel>

          <h1 className="mt-8 font-serif text-6xl leading-[0.95] tracking-tight text-ivory text-balance md:text-8xl lg:text-[9rem]">
            Build what
            <br />
            <span className="gold-gradient-text italic">matters.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Practical, beginner-friendly guides, workbooks, and templates that help you earn,
            learn, and grow — with clear steps you can act on today.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/niches"
              className="group inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-obsidian transition-colors hover:bg-gold-soft"
            >
              Explore Our Niches
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://wa.me/917903608490?text=Hi%20CAT%CE%9BLS%2C%20I%27d%20like%20to%20know%20more%20about%20your%20guides."
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 border border-border px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-ivory transition-colors hover:border-gold/50"
            >
              Ask on WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
