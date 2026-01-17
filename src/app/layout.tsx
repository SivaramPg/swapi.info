import "./globals.css"

import type { Metadata } from "next"
import { Bricolage_Grotesque, Martian_Mono } from "next/font/google"
import Image from "next/image"
import Script from "next/script"
import QuickLinks from "@/components/QuickLinks"
import { AllSystemsNormal } from "./_components/all-systems-normal"
import Footer from "./_components/Footer"
import NewNavbar from "./_components/new-navbar"
import { Providers } from "./providers"

const bricolage = Bricolage_Grotesque({
	subsets: ["latin"],
	display: "swap",
	preload: true,
	style: "normal",
	weight: "variable",
	variable: "--font-bricolage",
})

const martianMono = Martian_Mono({
	subsets: ["latin"],
	display: "swap",
	preload: true,
	style: "normal",
	weight: "variable",
	variable: "--font-martian-mono",
})

export const metadata: Metadata = {
	title: {
		default: "SWAPI - Star Wars API",
		template: "%s | SWAPI",
	},
	description:
		"The Star Wars API - All the Star Wars data you've ever wanted. Access data on films, characters, starships, planets, species, and vehicles.",
	metadataBase: new URL("https://swapi.info"),
	keywords: [
		"star wars",
		"star wars api",
		"star wars api explorer",
		"swapi",
		"sw-api",
		"swapi.dev alternative",
		"swapi.co alternative",
	],
	openGraph: {
		title: {
			default: "SWAPI - Star Wars API",
			template: "%s | SWAPI",
		},
		description:
			"The Star Wars API - All the Star Wars data you've ever wanted. Access data on films, characters, starships, planets, species, and vehicles.",
		type: "website",
		siteName: "SWAPI.INFO",
		locale: "en_US",
	},
	twitter: {
		title: {
			default: "SWAPI - Star Wars API",
			template: "%s | SWAPI",
		},
		description:
			"The Star Wars API - All the Star Wars data you've ever wanted. Access data on films, characters, starships, planets, species, and vehicles.",
		card: "summary_large_image",
		creator: "@SivaramPg",
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${bricolage.variable} ${martianMono.variable} bg-[#0a0a0f] text-[#f5f5f5]`}
			>
				<Providers>
					<Image
						priority
						src={"/icons/sprite.svg"}
						width={0}
						height={0}
						alt="Prefetch SVG Sprites"
						className="hidden"
					/>
					<main className="w-full min-h-screen">
						<NewNavbar />
						<main className="w-full min-h-[calc(100vh-64px)] relative">
							{children}
							<QuickLinks />
						</main>
						<Footer />
					</main>
				</Providers>
				<AllSystemsNormal className="fixed right-6 bottom-6" />
				<Script
					src="https://varam-analytics.sivaramp.com/scripts/gojo.js"
					strategy="beforeInteractive"
				/>
			</body>
		</html>
	)
}
