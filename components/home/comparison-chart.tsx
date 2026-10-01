import { Check, X } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'

const rows = [
  { problem: 'Too much theory', elsewhere: 'Long content but little action', catals: 'Short, practical guides with clear steps' },
  { problem: 'No clear starting point', elsewhere: 'Buyer feels confused after purchase', catals: 'Beginner-friendly roadmap inside every product' },
  { problem: 'Hard language', elsewhere: 'Complex explanations and jargon', catals: 'Simple language for students and beginners' },
  { problem: 'No templates', elsewhere: 'Buyer has to create everything alone', catals: 'Includes worksheets, checklists, and templates' },
  { problem: 'No implementation help', elsewhere: 'Product tells “what” but not “how”', catals: 'Step-by-step action tasks after each section' },
  { problem: 'Overwhelming courses', elsewhere: 'Too many hours to complete', catals: 'Quick-read eBooks and playbooks' },
  { problem: 'Random quality', elsewhere: 'Product quality varies a lot', catals: 'CATΛLS quality checklist for every product' },
  { problem: 'No outcome clarity', elsewhere: 'Buyer does not know what they will learn', catals: 'Clear learning outcomes before purchase' },
  { problem: 'Not beginner-friendly', elsewhere: 'Assumes prior knowledge', catals: 'Built for beginners first' },
  { problem: 'Hard to apply', elsewhere: 'Content feels generic', catals: 'Practical examples and use cases' },
  { problem: 'Scattered learning', elsewhere: 'Buyer jumps between many resources', catals: 'Organized learning paths by niche' },
  { problem: 'Expensive learning', elsewhere: 'High course prices', catals: 'Affordable digital guides and bundles' },
]

export function ComparisonChart() {
  return (
    <section className="border-t border-border py-20 md:py-28" aria-labelledby="comparison-heading">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel className="justify-center">The Market vs. CATΛLS</SectionLabel>
          <h2 id="comparison-heading" className="mt-6 font-serif text-4xl leading-tight text-ivory text-balance md:text-6xl">
            Buyer problems &amp; the CATΛLS solution.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Why buyers get stuck elsewhere — and what changes inside every CATΛLS product.
          </p>
        </div>

        {/* Desktop / tablet: real table */}
        <div className="mt-12 hidden overflow-hidden border border-gold/25 bg-charcoal/60 md:block">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">Common buyer problems, the typical experience elsewhere, and the CATΛLS solution</caption>
            <thead>
              <tr className="border-b border-gold/30 bg-obsidian/60">
                <th scope="col" className="w-[24%] px-6 py-5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Common problem
                </th>
                <th scope="col" className="w-[36%] px-6 py-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Typical experience elsewhere
                </th>
                <th scope="col" className="w-[40%] bg-gold/[0.06] px-6 py-5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  The CATΛLS solution
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.problem} className="border-b border-border last:border-b-0 transition-colors hover:bg-white/[0.02]">
                  <th scope="row" className="px-6 py-4 text-base font-medium text-ivory">
                    {r.problem}
                  </th>
                  <td className="px-6 py-4 text-[15px] text-muted-foreground">
                    <span className="flex items-start gap-3">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/80" aria-hidden />
                      {r.elsewhere}
                    </span>
                  </td>
                  <td className="bg-gold/[0.06] px-6 py-4 text-[15px] text-ivory">
                    <span className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                      {r.catals}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: one card per problem */}
        <ul className="mt-10 flex flex-col gap-4 md:hidden">
          {rows.map((r, i) => (
            <li key={r.problem} className="border border-gold/20 bg-charcoal/60 p-5">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-sm text-gold">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-lg font-medium text-ivory">{r.problem}</h3>
              </div>
              <p className="mt-4 flex items-start gap-3 text-[15px] text-muted-foreground">
                <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/80" aria-hidden />
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.16em] text-muted-foreground/70">Elsewhere</span>
                  {r.elsewhere}
                </span>
              </p>
              <p className="mt-3 flex items-start gap-3 border-t border-border pt-3 text-[15px] text-ivory">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.16em] text-gold">With CATΛLS</span>
                  {r.catals}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
