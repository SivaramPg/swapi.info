import './globals.css'
import type { Metadata } from 'next'
import { Mulish, JetBrains_Mono } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

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
  title: { default: 'Swapi.info', template: '%s | Swapi.info' },
  description:
    "All the Star Wars data you've ever wanted. Access it via a CDN-powered, Wicked-fast, Unrestricted Star Wars data API provider. All Data sourced from our beloved swapi.dev",
  openGraph: {
    title: { default: 'Swapi.info', template: '%s | Swapi.info' },
    description:
      "All the Star Wars data you've ever wanted. Access it via a CDN-powered, Wicked-fast, Unrestricted Star Wars data API provider. All Data sourced from our beloved swapi.dev",
    type: 'website',
    siteName: 'Swapi.info',
    url: 'https://swapi.info',
    locale: 'en_US',
  },
  twitter: {
    title: { default: 'Swapi.info', template: '%s | Swapi.info' },
    description:
      "All the Star Wars data you've ever wanted. Access it via a CDN-powered, Wicked-fast, Unrestricted Star Wars data API provider. All Data sourced from our beloved swapi.dev",
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
          <main className="w-full min-h-[calc(100vh-64px)]">{children}</main>
          <Footer />
        </main>
      </body>
    </html>
  )
}
