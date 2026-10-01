import Link from 'next/link'
import { Wordmark } from '@/components/wordmark'
import { nav, niches } from '@/lib/data'

// Add your real profile links here (e.g. 'https://instagram.com/yourhandle').
// Entries with an empty href are hidden automatically.
const social = [
  { label: 'Instagram', href: 'https://www.instagram.com/catals.in/' },
  { label: 'X / Twitter', href: '' },
  { label: 'YouTube', href: '' },
].filter((s) => s.href)

const legal = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Refund Policy', href: '/refund' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-charcoal">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Wordmark className="text-2xl" />
            <p className="mt-4 font-serif text-2xl italic text-ivory/90">Build what matters.</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A modern digital company creating valuable products, knowledge, and solutions across
              ten focused niches.
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/80">
              Want the solution for your most important challenges and problems?
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/contact" className="border border-gold/40 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-gold transition-colors hover:bg-gold hover:text-obsidian">
                Contact Us
              </Link>
              <a href="https://wa.me/917903608490" target="_blank" rel="noreferrer" className="border border-border px-4 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-gold/40 hover:text-gold">
                WhatsApp Us
              </a>
            </div>
          </div>

          <FooterCol title="Explore">
            {nav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
            <FooterLink href="/contact">Contact Us</FooterLink>
          </FooterCol>

          <FooterCol title="Niches">
            {niches.map((n) => (
              <FooterLink key={n.id} href={`/niches/${n.slug}`}>
                {n.name}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Connect">
            <FooterLink href="tel:+917903608490">+91 7903608490</FooterLink>
            <FooterLink href="https://wa.me/917903608490">WhatsApp</FooterLink>
            {social.map((s) => (
              <FooterLink key={s.label} href={s.href}>
                {s.label}
              </FooterLink>
            ))}
          </FooterCol>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} CATΛLS. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-ivory">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-gold">{title}</h3>
      <ul className="mt-5 flex flex-col gap-3">{children}</ul>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-muted-foreground transition-colors hover:text-ivory">
        {children}
      </Link>
    </li>
  )
}
