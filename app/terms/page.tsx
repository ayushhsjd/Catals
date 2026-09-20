import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'The terms governing your use of CATΛLS.',
}

export default function TermsPage() {
  return (
    <LegalPage
      label="Legal"
      title="Terms & Conditions"
      sections={[
        {
          heading: 'Acceptance of terms',
          body: [
            'By accessing or using the CATΛLS website and products, you agree to these Terms & Conditions.',
            'If you do not agree with any part of these terms, please discontinue use of our services.',
          ],
        },
        {
          heading: 'Use of products',
          body: [
            'Digital products and resources provided by CATΛLS are for your personal use unless otherwise stated.',
            'You may not resell, redistribute, or reproduce our products without permission.',
          ],
        },
        {
          heading: 'Intellectual property',
          body: [
            'All content, branding, and products remain the intellectual property of CATΛLS unless otherwise noted.',
          ],
        },
        {
          heading: 'Contact',
          body: ['For questions about these terms, contact us at querybyayush@gmail.com.'],
        },
      ]}
    />
  )
}
