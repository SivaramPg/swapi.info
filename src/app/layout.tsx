import './globals.css'
import type { Metadata } from 'next'
import { Mulish, Space_Mono } from 'next/font/google'

const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  style: 'normal',
  weight: ['400', '700', '900'],
  variable: '--font-mulish',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  style: 'normal',
  weight: ['400'],
  variable: '--font-space-mono',
})

export const metadata: Metadata = {
  title: 'SW-API',
  description: "All the Star Wars data you've ever wanted:",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${mulish.className} ${spaceMono.className}`}>
        {children}
      </body>
    </html>
  )
}
