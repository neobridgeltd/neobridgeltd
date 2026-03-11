import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
   


 images: {
    remotePatterns:[
      {
        protocol:'https',
        hostname:'images.unsplash.com'
      },
       {
        protocol:'http',
        hostname:'localhost'
      },
      {
        protocol:'https',
        hostname:'neobridgeltd-gilt.vercel.app'
      },
      {
        protocol:'https',
        hostname:'www.neobridgeltd.co.ke'
      },
      {
        protocol:'https',
        hostname:'neobridgeltd.co.ke'  
      },
      {
        protocol:'https',
        hostname:'neobridgeltd.co.ke/api/**'
      }
    
    ]
  }
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
