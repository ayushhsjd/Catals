'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { nav } from '@/lib/data'
import { Wordmark } from '@/components/wordmark'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border bg-obsidian/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link href="/" aria-label="CATALS home" className="relative z-10">
          <Wordmark className="text-xl md:text-2xl" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative text-sm tracking-wide text-muted-foreground transition-colors hover:text-ivory',
                  active && 'text-ivory',
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300',
                    active ? 'w-full' : 'w-0',
                  )}
                />
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="https://wa.me/917903608490"
            target="_blank"
            rel="noreferrer"
            className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-ivory"
          >
            WhatsApp
          </a>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 border border-gold/40 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-obsidian"
          >
            Contact Us
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 inline-flex h-10 w-10 items-center justify-center text-ivory lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          'fixed inset-0 top-0 z-0 flex flex-col bg-obsidian px-5 pt-24 pb-10 transition-all duration-500 lg:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-border py-4 font-serif text-3xl text-ivory"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/917903608490"
            target="_blank"
            rel="noreferrer"
            className="border-b border-border py-4 font-serif text-3xl text-ivory"
          >
            WhatsApp
          </a>
        </nav>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center justify-center gap-2 bg-gold px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-obsidian"
        >
          Contact Us
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </header>
  )
}
