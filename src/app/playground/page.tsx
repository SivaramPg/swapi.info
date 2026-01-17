import type { Metadata } from "next"
import PlaygroundClient from "./playground-client"

export const metadata: Metadata = {
	title: "API Playground",
	description:
		"Test SWAPI endpoints in real-time. Explore Star Wars API data for films, characters, planets, species, starships, and vehicles.",
	openGraph: {
		title: "API Playground",
		description:
			"Test SWAPI endpoints in real-time. Explore Star Wars API data for films, characters, planets, species, starships, and vehicles.",
	},
	twitter: {
		card: "summary_large_image",
		title: "API Playground",
		description:
			"Test SWAPI endpoints in real-time. Explore Star Wars API data for films, characters, planets, species, starships, and vehicles.",
	},
}

export default function PlaygroundPage() {
	return <PlaygroundClient />
}
