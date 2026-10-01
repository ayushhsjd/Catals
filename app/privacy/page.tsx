import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How CATΛLS collects, uses, and protects your information.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <LegalPage
      label="Legal"
      title="Privacy Policy"
      sections={[
        {
          heading: 'Overview',
          body: [
            'This Privacy Policy explains how CATΛLS ("we", "us", "our"), based in Ranchi, Jharkhand, India, collects, uses, and protects information when you visit catals.in, contact us, or buy our digital products.',
            'We only collect what we need to respond to you, deliver your products, and improve our website.',
          ],
        },
        {
          heading: 'Information we collect',
          body: [
            'Information you give us: your name, email address, phone or WhatsApp number, business name (optional), and the details of your message or order.',
            'Payment information: payments are processed by trusted third-party payment providers (such as Razorpay). We do not see or store your card, UPI PIN, or bank login details.',
            'Usage information: basic, anonymous analytics (such as pages visited and device type) to understand how the website is used.',
          ],
        },
        {
          heading: 'How we use information',
          body: [
            'To reply to enquiries, deliver purchased products, provide support, and handle refund requests.',
            'To send product updates or offers, only where you have contacted us or agreed to receive them. You can opt out at any time by replying "STOP" or emailing us.',
            'To improve our website, products, and customer experience.',
          ],
        },
        {
          heading: 'Sharing of information',
          body: [
            'We do not sell or rent your personal information.',
            'We share information only with service providers who help us run the business (for example payment processing, website hosting, email, and WhatsApp), or when required by law.',
          ],
        },
        {
          heading: 'Data storage and security',
          body: [
            'We take reasonable steps to protect your information and keep it only as long as needed for the purposes above or as required by law.',
          ],
        },
        {
          heading: 'Your choices',
          body: [
            'You can ask us to access, correct, or delete your personal information at any time by contacting us.',
          ],
        },
        {
          heading: 'Contact',
          body: [
            'For privacy questions or requests, email querybyayush@gmail.com or WhatsApp +91 7903608490.',
          ],
        },
      ]}
    />
  )
}
