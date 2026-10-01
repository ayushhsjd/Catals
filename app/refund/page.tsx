import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'The CATΛLS refund and cancellation policy for digital products.',
  alternates: { canonical: '/refund' },
}

export default function RefundPage() {
  return (
    <LegalPage
      label="Legal"
      title="Refund & Cancellation Policy"
      sections={[
        {
          heading: 'Digital products',
          body: [
            'All CATΛLS products are digital and are delivered instantly or within 24 hours. Because digital files cannot be returned once accessed, all sales are generally final.',
          ],
        },
        {
          heading: 'When you can get a refund',
          body: [
            'We will give a full refund or a replacement if: you were charged but did not receive your product within 48 hours; the file is damaged or cannot be opened and we cannot fix it; or you were charged twice for the same order.',
            'Refund requests must be made within 7 days of purchase.',
          ],
        },
        {
          heading: 'How to request a refund',
          body: [
            'Email querybyayush@gmail.com or WhatsApp +91 7903608490 with your name, order or payment ID, and the reason for your request.',
            'We reply within 2 business days. Approved refunds are sent to your original payment method within 5–7 business days, depending on your bank or payment provider.',
          ],
        },
        {
          heading: 'Cancellations',
          body: [
            'Because products are delivered immediately after payment, orders cannot be cancelled once payment is completed.',
          ],
        },
      ]}
    />
  )
}
