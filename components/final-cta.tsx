import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-border py-28 md:py-40">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 translate-y-1/3 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(201,164,92,0.4), transparent 60%)' }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <h2 className="font-serif text-5xl leading-[1.02] text-ivory text-balance md:text-8xl">
          Want the solution for your
          <br />
          <span className="gold-gradient-text italic">most important challenges?</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Tell us what you are working through. CATΛLS creates practical solutions for meaningful problems.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-obsidian transition-colors hover:bg-gold-soft"
          >
            Contact Us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="https://wa.me/917903608490"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-gold/40 px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-obsidian"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
