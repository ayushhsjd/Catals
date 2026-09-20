import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'The CATΛLS refund policy for digital products.',
}

export default function RefundPage() {
  return (
    <LegalPage
      label="Legal"
      title="Refund Policy"
      sections={[
        {
          heading: 'Digital products',
          body: [
            'Because our products are digital and delivered instantly, refunds are considered on a case-by-case basis.',
            'If you experience an issue with a product, please reach out so we can make it right.',
          ],
        },
        {
          heading: 'Requesting a refund',
          body: [
            'To request a refund, contact us with your order details and the reason for your request.',
            'We aim to review every request fairly and respond promptly.',
          ],
        },
        {
          heading: 'Contact',
          body: ['For refund requests, contact us at querybyayush@gmail.com.'],
        },
      ]}
    />
  )
}
