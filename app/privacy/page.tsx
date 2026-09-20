import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal-page'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How CATΛLS handles and protects your information.',
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
            'This Privacy Policy explains how CATΛLS collects, uses, and protects information you provide when using our website and products.',
            'We are committed to handling your data responsibly and only collecting what is necessary to deliver value to you.',
          ],
        },
        {
          heading: 'Information we collect',
          body: [
            'We may collect information you provide directly, such as your name, email address, and any details submitted through our contact form.',
            'We may also collect limited technical information to help us improve the performance and experience of our website.',
          ],
        },
        {
          heading: 'How we use information',
          body: [
            'Information is used to respond to enquiries, deliver products and resources, and improve what we offer.',
            'We do not sell your personal information.',
          ],
        },
        {
          heading: 'Contact',
          body: ['For any privacy questions, contact us at querybyayush@gmail.com.'],
        },
      ]}
    />
  )
}
