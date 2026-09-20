'use server'

// Destination inbox for contact submissions.
// Email delivery (e.g. Resend) can be wired here later; the address is fixed
// to the owner-verified inbox so it is ready when an email integration is added.
const CONTACT_INBOX = 'querybyayush@gmail.com'

export type ContactState = {
  ok: boolean
  message: string
  whatsappUrl?: string
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const fullName = String(formData.get('fullName') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const company = String(formData.get('company') ?? '').trim()
  const subject = String(formData.get('subject') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!fullName || !email || !phone || !subject || !message) {
    return { ok: false, message: 'Please complete all required fields.' }
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!emailValid) {
    return { ok: false, message: 'Please enter a valid email address.' }
  }

  // When an email integration is connected, send the submission to CONTACT_INBOX here.
  console.log('[v0] Contact submission for', CONTACT_INBOX, {
    fullName,
    email,
    phone,
    company,
    subject,
    message,
  })

  const whatsappMessage = [
    'New CATΛLS enquiry',
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Contact number: ${phone}`,
    company ? `Company: ${company}` : '',
    `Subject: ${subject}`,
    `Message: ${message}`,
  ].filter(Boolean).join('\\n')

  return {
    ok: true,
    message: 'Your message is ready. Send it directly to CATΛLS on WhatsApp so the team can respond quickly.',
    whatsappUrl: `https://wa.me/917903608490?text=${encodeURIComponent(whatsappMessage)}`,
  }
}
