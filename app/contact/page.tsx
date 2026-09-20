import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Let's build what matters. Reach the CATΛLS team.",
}

export default function ContactPage() {
  return (
    <main>
      <PageHero
        label="Contact"
        title={
          <>
            Let&apos;s build <span className="gold-gradient-text italic">what matters.</span>
          </>
        }
        intro="Whether you have a question, an idea, or an opportunity — we'd like to hear from you."
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <h2 className="font-serif text-3xl text-ivory md:text-4xl">Start a conversation.</h2>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
                Complete the form and a member of the CATΛLS team will respond directly. Every
                message reaches us — no automated dead ends.
              </p>
              <div className="mt-10 border-t border-border pt-8">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-gold">General enquiries</p>
                <a href="mailto:querybyayush@gmail.com" className="mt-2 block text-base text-ivory/90 transition-colors hover:text-gold">querybyayush@gmail.com</a>
                <a href="tel:+917903608490" className="mt-2 block text-base text-ivory/90 transition-colors hover:text-gold">+91 7903608490</a>
                <a href="https://wa.me/917903608490" target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm uppercase tracking-[0.14em] text-gold transition-colors hover:text-gold-soft">WhatsApp us</a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
