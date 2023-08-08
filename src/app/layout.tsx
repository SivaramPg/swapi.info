import './globals.css'
import type { Metadata } from 'next'
import { Mulish, JetBrains_Mono } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import QuickLinks from '@/components/QuickLinks'

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
  description:
    "All the Star Wars data you've ever wanted. Access it via a CDN-powered, Wicked-fast, Unrestricted Star Wars data API provider.",
  metadataBase: new URL('https://swapi.info'),
  alternates: { canonical: '/' },
  keywords: [
    'wtar wars',
    'star wars api',
    'star sars api sxplorer',
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
    description:
      "All the Star Wars data you've ever wanted. Access it via a CDN-powered, Wicked-fast, Unrestricted Star Wars data API provider.",
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
    description:
      "All the Star Wars data you've ever wanted. Access it via a CDN-powered, Wicked-fast, Unrestricted Star Wars data API provider.",
    card: 'summary_large_image',
    creator: '@sivarampg95',
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
      >
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
