export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import React from 'react'
import AboutHero from '@/components/aboutPage/AboutHero'
import AboutSection from '@/components/aboutPage/AboutSection'
import GoalsSection from '@/components/aboutPage/GoalsSection'
import TeamSection from '@/components/aboutPage/TeamSection'

import config from '@/payload.config'

export const metadata = {
  title: 'Who We Are | NeoBridge – Financial Advisory & Investment Experts in Africa',
  description:
    'Learn about NeoBridge, a financial advisory firm supporting businesses and investors across Africa. Our team brings deep expertise in capital raising, mergers & acquisitions, and strategic finance.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}`),

  openGraph: {
    title: 'Who We Are – NeoBridge',
    description:
      'Meet NeoBridge, a trusted financial advisory firm helping businesses grow through capital raising, M&A, and strategic financial guidance across Africa.',
    url: `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/who-we-are`,
    siteName: 'NeoBridge',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'NeoBridge Team – Financial Advisory Experts in Africa',
      },
    ],
    type: 'website',
    locale: 'en_KE',
  },

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/who-we-are`,
  },

  keywords: [
    'About NeoBridge',
    'NeoBridge team',
    'Financial advisory firm Africa',
    'Corporate finance experts Kenya',
    'Investment advisory Africa',
    'M&A advisory team',
    'Capital raising experts',
    'Business advisory Kenya',
    'Who we are NeoBridge',
  ],
}

export default async function AboutPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'who-we-are' },
    },
  })

  if (!page) {
    return <div>Page not found</div>
  }

  // Render the page layout dynamically
  return (
    <>
      <AboutHero />
      {page.layout?.map((block, index) => renderBlock(block, index))}
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderBlock(block: any, index: number) {
  switch (block.blockType) {
    case 'about':
      return <AboutSection key={index} block={block} />
    case 'goals':
      return <GoalsSection key={index} block={block} />
    case 'ourTeam':
      return <TeamSection key={index} block={block} />
    default:
      return null
  }
}
