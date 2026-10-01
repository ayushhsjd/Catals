import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'The terms governing your use of CATΛLS and its digital products.',
  alternates: { canonical: '/terms' },
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
            'By using catals.in or purchasing a CATΛLS product, you agree to these Terms & Conditions. If you do not agree, please do not use the website or our products.',
          ],
        },
        {
          heading: 'Our products',
          body: [
            'CATΛLS sells digital products such as eBooks, guides, workbooks, templates, and checklists. No physical product is shipped.',
            'Prices are shown in Indian Rupees (INR) unless stated otherwise and may change from time to time. The price shown at checkout is the price you pay.',
          ],
        },
        {
          heading: 'Payment and delivery',
          body: [
            'Payments are made securely through third-party payment providers. Your order is confirmed once payment is successful.',
            'Products are delivered digitally to the email address or WhatsApp number you provide, usually immediately and at most within 24 hours of payment. If you have not received your product, please contact us.',
          ],
        },
        {
          heading: 'Licence and use',
          body: [
            'When you buy a product, you receive a personal, non-transferable licence to use it for your own learning or business.',
            'You may not resell, share, upload, redistribute, or copy our products, in whole or in part, without written permission.',
          ],
        },
        {
          heading: 'Educational purpose only',
          body: [
            'All content is for educational and informational purposes. It is not financial, investment, legal, medical, or professional advice.',
            'Trading and investing involve risk. Health content does not replace advice from a qualified doctor. Results depend on your own effort and circumstances, and no specific outcome or income is guaranteed.',
          ],
        },
        {
          heading: 'Intellectual property',
          body: [
            'All content, branding, designs, and products on this website belong to CATΛLS unless otherwise stated.',
          ],
        },
        {
          heading: 'Limitation of liability',
          body: [
            'To the maximum extent permitted by law, CATΛLS is not liable for any indirect or consequential loss arising from the use of our website or products. Our total liability is limited to the amount you paid for the product concerned.',
          ],
        },
        {
          heading: 'Governing law',
          body: [
            'These terms are governed by the laws of India. Any disputes are subject to the jurisdiction of the courts in Ranchi, Jharkhand.',
          ],
        },
        {
          heading: 'Contact',
          body: ['For questions about these terms, email querybyayush@gmail.com or WhatsApp +91 7903608490.'],
        },
      ]}
    />
  )
}
