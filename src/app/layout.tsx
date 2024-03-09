import type { Metadata } from 'next'
import { JetBrains_Mono, Mulish } from 'next/font/google'
import Image from 'next/image'
import './globals.css'

import QuickLinks from '@/components/QuickLinks'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  style: 'normal',
  weight: ['400', '700'],
  variable: '--font-jet-brains-mono',
})

const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  style: 'normal',
  weight: ['400', '700', '900'],
  variable: '--font-mulish',
})

export const metadata: Metadata = {
  title: {
    default: 'SWAPI.INFO - Star Wars APIs & Explorer',
    template: '%s | SWAPI.INFO - Star Wars APIs & Explorer',
  },
  description: `The Star Wars API, or "swapi" (Swah-pee)!. All the Star Wars data you've ever wanted. Inspired by swapi.dev. Access it via a CDN-powered, Wicked-fast, Unrestricted Star Wars data API provider.`,
  metadataBase: new URL('https://swapi.info'),
  alternates: { canonical: 'https://swapi.info' },
  keywords: [
    'star wars',
    'star wars api',
    'star wars api explorer',
    'swapi',
    'sw-api',
    'nextjs 13',
    'cloudflare',
    'swapi.dev alternative',
    'swapi.co alternative',
    'alternative',
  ],
  openGraph: {
    title: {
      default: 'SWAPI.INFO - Star Wars APIs & Explorer',
      template: '%s | SWAPI.INFO - Star Wars APIs & Explorer',
    },
    description: `The Star Wars API, or "swapi" (Swah-pee)!. All the Star Wars data you've ever wanted. Inspired by swapi.dev. Access it via a CDN-powered, Wicked-fast, Unrestricted Star Wars data API provider.`,
    type: 'website',
    siteName: 'SWAPI.INFO',
    url: 'https://swapi.info',
    locale: 'en_US',
  },
  twitter: {
    title: {
      default: 'SWAPI.INFO - Star Wars APIs & Explorer',
      template: '%s | SWAPI.INFO - Star Wars APIs & Explorer',
    },
    description: `The Star Wars API, or "swapi" (Swah-pee)!. All the Star Wars data you've ever wanted. Inspired by swapi.dev. Access it via a CDN-powered, Wicked-fast, Unrestricted Star Wars data API provider.`,
    card: 'summary_large_image',
    creator: '@SivaramPg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} ${mulish.variable} font-sans`}
        suppressHydrationWarning
      >
        <Image
          priority
          src={'/icons/sprite.svg'}
          width={0}
          height={0}
          alt="Prefetch SVG Sprites"
          className="hidden"
        />
        <main className="w-full min-h-screen">
          <Navbar />
          <main className="w-full min-h-[calc(100vh-64px)] relative">
            {children}
            <QuickLinks />
          </main>
          <Footer />
        </main>
      </body>
    </html>
  )
}
