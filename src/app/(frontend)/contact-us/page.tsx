export const dynamic = 'force-dynamic'

import { getPayload } from 'payload'
import React from 'react'
import ContactHero from '@/components/contactPage/ContactHero'
import ContactForm from '@/components/contactPage/ContactSection'
import ContactSocials from '@/components/contactPage/ContactSocials'
import MapArea from '@/components/contactPage/MapArea'

import config from '@/payload.config'

export const metadata = {
  title: 'Contact NeoBridge | Financial Advisory & Investment Support in Africa',
  description:
    'Get in touch with NeoBridge for expert financial advisory, capital raising, and M&A support. Connect with our team to explore strategic growth opportunities across Africa.',
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}`),

  openGraph: {
    title: 'Contact NeoBridge',
    description:
      'Reach out to NeoBridge for financial advisory, investment support, and strategic partnerships across Africa.',
    url: `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/contact`,
    siteName: 'NeoBridge',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Contact NeoBridge – Financial Advisory & Investment Experts',
      },
    ],
    type: 'website',
    locale: 'en_KE',
  },

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/contact`,
  },

  keywords: [
    'Contact NeoBridge',
    'NeoBridge contact',
    'Financial advisory contact Kenya',
    'Investment advisory contact Africa',
    'Capital raising consultants contact',
    'M&A advisory contact',
    'Business advisory firm Kenya contact',
  ],
}

export default async function ContactPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const {
    docs: [page],
  } = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'contact-us' },
    },
  })

  if (!page) {
    return <div>Page not found</div>
  }

  // Render the page layout dynamically
  return (
    <>
      <ContactHero />
      {page.layout?.map((block, index) => renderBlock(block, index))}
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderBlock(block: any, index: number) {
  switch (block.blockType) {
    case 'contact':
      return <ContactForm key={index} block={block} />
    case 'contactAddresses':
      return <ContactSocials key={index} block={block} />
    case 'location':
      return <MapArea key={index} block={block} />

    default:
      return null
  }
}
