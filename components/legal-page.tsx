import { PageHero } from '@/components/page-hero'

export function LegalPage({
  label,
  title,
  sections,
}: {
  label: string
  title: string
  sections: { heading: string; body: string[] }[]
}) {
  return (
    <main>
      <PageHero label={label} title={title} />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <div className="flex flex-col gap-12">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-serif text-2xl text-ivory md:text-3xl">{section.heading}</h2>
                <div className="mt-4 flex flex-col gap-4">
                  {section.body.map((p, i) => (
                    <p key={i} className="text-base leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            <p className="border-t border-border pt-8 text-sm text-muted-foreground/70">
              Last updated: October 2026. Questions? Email querybyayush@gmail.com or WhatsApp +91 7903608490.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
