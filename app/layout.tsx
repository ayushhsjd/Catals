import type React from 'react'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://catals.in'),
  title: {
    default: 'CATΛLS — Build What Matters',
    template: '%s — CATΛLS',
  },
  description:
    'CATΛLS creates practical, beginner-friendly digital guides, workbooks, and templates across ten niches — AI, personal finance, freelancing, side hustles, trading psychology, self-improvement, and more. Build what matters.',
  keywords: [
    'CATALS',
    'digital products',
    'trading education',
    'AI knowledge',
    'self improvement',
    'finance education',
    'freelancing',
    'business growth',
  ],
  openGraph: {
    title: 'CATΛLS — Build What Matters',
    description:
      'A modern digital company creating valuable products, knowledge, and solutions across ten focused niches.',
    type: 'website',
    siteName: 'CATΛLS',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CATΛLS — Build What Matters',
    description:
      'A modern digital company creating valuable products, knowledge, and solutions across ten focused niches.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#080808',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} bg-background`}>
      <body className="antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
