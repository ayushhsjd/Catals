import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'
import { FinalCta } from '@/components/final-cta'
import { getNiche, niches } from '@/lib/data'

export function generateStaticParams() {
  return niches.map((n) => ({ slug: n.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const niche = getNiche(slug)
  if (!niche) return {}
  return { title: niche.name, description: niche.description, alternates: { canonical: `/niches/${niche.slug}` } }
}

export default async function NicheDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const niche = getNiche(slug)
  if (!niche) notFound()

  return (
    <main>
      <section className="relative overflow-hidden border-b border-border pt-36 pb-16 md:pt-48 md:pb-24">
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <Link href="/niches" className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-ivory">
            <ArrowLeft className="h-4 w-4" />
            All niches
          </Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <span className="font-serif text-5xl text-gold">{niche.number}</span>
              <h1 className="mt-4 font-serif text-5xl leading-[1.02] text-ivory text-balance md:text-7xl">{niche.name}</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{niche.description}</p>
              <ul className="mt-8 grid grid-cols-2 gap-3">
                {niche.focus.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-ivory/90"><Check className="h-4 w-4 shrink-0 text-gold" />{f}</li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden border border-border">
              <Image src={niche.image || '/placeholder.svg'} alt={`${niche.name} niche`} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-border bg-charcoal py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionLabel>Start a conversation</SectionLabel>
          <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl font-serif text-4xl leading-tight text-ivory md:text-6xl">Looking for a solution in {niche.name.toLowerCase()}?</h2>
            <Link href="/contact" className="group inline-flex shrink-0 items-center gap-2 bg-gold px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-obsidian transition-colors hover:bg-gold-soft">
              Contact Us <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
      <FinalCta />
    </main>
  )
}
