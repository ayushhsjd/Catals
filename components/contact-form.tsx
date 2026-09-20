'use client'

import { useActionState, useEffect } from 'react'
import { useFormStatus } from 'react-dom'
import { ArrowRight, Check } from 'lucide-react'
import { submitContact, type ContactState } from '@/app/contact/actions'

const initialState: ContactState = { ok: false, message: '' }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex items-center justify-center gap-2 bg-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-obsidian transition-colors hover:bg-gold-soft disabled:opacity-60"
    >
      {pending ? 'Sending…' : 'Send Message'}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </button>
  )
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState)

  useEffect(() => {
    if (state.ok && state.whatsappUrl) {
      window.location.assign(state.whatsappUrl)
    }
  }, [state.ok, state.whatsappUrl])

  if (state.ok) {
    return (
      <div className="flex flex-col items-start gap-5 border border-gold/30 bg-charcoal p-10 md:p-14">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 text-gold">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="font-serif text-3xl text-ivory">Opening WhatsApp.</h3>
        <p className="max-w-md text-base leading-relaxed text-muted-foreground">{state.message} If WhatsApp does not open automatically, use the button below.</p>
        {state.whatsappUrl ? (
          <a
            href={state.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center border border-gold/40 px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-gold transition-colors hover:bg-gold hover:text-obsidian"
          >
            Send to WhatsApp
          </a>
        ) : null}
      </div>
    )
  }

  return (
    <form action={formAction} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full Name" name="fullName" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Contact Number" name="phone" type="tel" required autoComplete="tel" />
        <Field label="Business / Company Name" name="company" optional autoComplete="organization" />
      </div>
      <Field label="Subject" name="subject" required />
      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="resize-none border border-input bg-charcoal px-4 py-3 text-ivory outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold"
          placeholder="Tell us what you're looking to build."
        />
      </div>

      {state.message && !state.ok ? (
        <p className="text-sm text-red-400">{state.message}</p>
      ) : null}

      <div>
        <SubmitButton />
      </div>
    </form>
  )
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
      {children}
    </label>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
  optional,
  autoComplete,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  optional?: boolean
  autoComplete?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name}>
        {label}
        {optional ? <span className="ml-1 normal-case tracking-normal text-muted-foreground/60">(optional)</span> : null}
      </Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="border border-input bg-charcoal px-4 py-3 text-ivory outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold"
      />
    </div>
  )
}
