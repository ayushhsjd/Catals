import { SectionLabel } from '@/components/section-label'

export function PageHero({
  label,
  title,
  intro,
  children,
}: {
  label: string
  title: React.ReactNode
  intro?: string
  children?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-36 pb-16 md:pt-48 md:pb-24">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(201,164,92,0.35), transparent 60%)' }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionLabel>{label}</SectionLabel>
        <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.02] text-ivory text-balance md:text-8xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
        ) : null}
        {children}
      </div>
    </section>
  )
}
