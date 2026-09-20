import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Niche } from '@/lib/data'

export function NicheCard({ niche }: { niche: Niche }) {
  return (
    <Link
      href={`/niches/${niche.slug}`}
      className="group relative flex flex-col overflow-hidden border border-border bg-charcoal transition-colors duration-500 hover:border-gold/50"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={niche.image || '/placeholder.svg'}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        <span className="absolute left-5 top-4 font-serif text-2xl text-gold">{niche.number}</span>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <h3 className="font-serif text-2xl text-ivory md:text-3xl">{niche.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{niche.short}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {niche.productCategories.map((category) => (
            <span key={category} className="border border-gold/20 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-gold/80">
              {category}
            </span>
          ))}
        </div>
        <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-gold">
          Explore
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  )
}
