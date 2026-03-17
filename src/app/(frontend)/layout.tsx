import React from 'react'
import './styles.css'
import Navbar from '@/components/navigation/Navbar'
import Footer from '@/components/navigation/Footer'

export const metadata = {
  title: 'NeoBridge | Financial Advisory, Capital Raising & M&A in Africa',
  description:
    'NeoBridge is a leading financial advisory firm providing capital raising, mergers & acquisitions (M&A), and strategic finance solutions across Kenya and Africa. We connect businesses with investors and drive sustainable growth.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}`),

  openGraph: {
    title: 'NeoBridge – Financial Advisory & Investment Solutions in Africa',
    description:
      'Discover NeoBridge, a trusted partner in financial advisory, capital raising, and M&A transactions across Africa. Supporting businesses, entrepreneurs, and investors with strategic growth solutions.',
    url: `${process.env.NEXT_PUBLIC_PAYLOAD_URL}`,
    siteName: 'NeoBridge',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'NeoBridge – Financial Advisory, Capital Raising & M&A Services',
      },
    ],
    type: 'website',
    locale: 'en_KE',
  },

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_PAYLOAD_URL}`,
  },

  keywords: [
    // Brand
    'NeoBridge',
    'NeoBridge Limited',

    // Core Services
    'Financial advisory',
    'Capital raising',
    'Mergers and acquisitions',
    'M&A advisory',
    'Corporate finance',
    'Investment advisory',

    // Geographic relevance
    'Financial advisory Kenya',
    'Investment firms Kenya',
    'Financial advisory Africa',
    'Capital raising Africa',
    'M&A Africa',

    // Target users / intent
    'Business funding',
    'Investor matchmaking',
    'Startup funding Africa',
    'Private equity Africa',
    'Venture capital Africa',
    'Corporate strategy consulting',
  ],
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
