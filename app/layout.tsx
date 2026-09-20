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
  metadataBase: new URL('https://catals.com'),
  title: {
    default: 'CATΛLS — Build What Matters',
    template: '%s — CATΛLS',
  },
  description:
    'CATΛLS creates digital products, knowledge, and solutions across six niches — agencies & business, trading, AI, self-improvement, finance, and digital earning. Build what matters.',
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
  generator: 'v0.app',
  openGraph: {
    title: 'CATΛLS — Build What Matters',
    description:
      'A modern digital company creating valuable products, knowledge, and solutions across six major niches.',
    type: 'website',
    siteName: 'CATΛLS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CATΛLS — Build What Matters',
    description:
      'A modern digital company creating valuable products, knowledge, and solutions across six major niches.',
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
