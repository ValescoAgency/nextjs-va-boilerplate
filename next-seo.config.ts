/* eslint-disable import/no-anonymous-default-export */
import { DefaultSeoProps } from 'next-seo';

const SEO: DefaultSeoProps = {
  title: 'Next.js Starter',
  titleTemplate: '%s | Valesco Agency',
  description: 'Starter code for your Nextjs Boilerplate with Tailwind CSS',
  canonical: 'https://www.canonical.ie/a',
  defaultOpenGraphImageHeight: 1200,
  defaultOpenGraphImageWidth: 1200,
  mobileAlternate: {
    media: 'only screen and (max-width: 640px)',
    href: 'https://m.canonical.ie'
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: 'https://www.test.ie/favicon.ico'
    },
    {
      rel: 'apple-touch-icon',
      href: 'https://www.test.ie/touch-icon-ipad.jpg',
      sizes: '76x76'
    },
    {
      rel: 'apple-touch-icon',
      href: 'https://www.test.ie/touch-icon-iphone-retina.jpg',
      sizes: '120x120'
    },
    {
      rel: 'mask-icon',
      href: 'https://www.test.ie/safari-pinned-tab.svg',
      color: '#193860'
    },
    {
      rel: 'manifest',
      href: '/manifest.json'
    }
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://localhost/',
    title: '',
    description: '',
    site_name: 'Next.js Starter by Valesco Agency',
    images: [
      {
        url: 'https://www.test.ie/og-image-a-01.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt A',
        type: 'image/jpeg'
      }
    ]
  },
  twitter: {
    handle: '@jrkennemer',
    site: '@jrkennemer',
    cardType: 'summary_large_image'
  },
  facebook: {
    appId: '1234567890'
  }
};

export default SEO;
