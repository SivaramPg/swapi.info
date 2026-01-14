/**
 * JSON-LD structured data for TechArticle schema
 * Used on the documentation page
 */
export function TechArticleJsonLd() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "TechArticle",
		headline: "SWAPI Documentation - Star Wars API Guide",
		description:
			"Complete documentation for the Star Wars API (SWAPI). Learn how to fetch data about Star Wars films, characters, planets, species, starships, and vehicles using REST API endpoints.",
		url: "https://swapi.info/documentation",
		datePublished: "2024-01-01",
		dateModified: new Date().toISOString().split("T")[0],
		author: {
			"@type": "Person",
			name: "Sivaram P",
			url: "https://sivaramp.com",
		},
		publisher: {
			"@type": "Organization",
			name: "SWAPI.info",
			url: "https://swapi.info",
		},
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": "https://swapi.info/documentation",
		},
		about: {
			"@type": "WebAPI",
			name: "SWAPI - The Star Wars API",
			url: "https://swapi.info/api",
		},
		articleSection: [
			"Introduction",
			"Getting Started",
			"Base URL",
			"Authentication",
			"Resources",
			"People",
			"Films",
			"Starships",
			"Vehicles",
			"Species",
			"Planets",
		],
		keywords: [
			"Star Wars API",
			"SWAPI",
			"REST API",
			"Star Wars data",
			"API documentation",
			"Star Wars characters",
			"Star Wars planets",
		],
		inLanguage: "en",
		isAccessibleForFree: true,
	}

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires innerHTML
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	)
}

/**
 * JSON-LD structured data for FAQ schema
 * Used on the about page or documentation page to answer common questions
 */
export function FaqJsonLd() {
	const faqs = [
		{
			question: "What is SWAPI?",
			answer:
				"SWAPI (Star Wars API) is a free, open-source REST API that provides programmatic access to Star Wars data including People, Films, Planets, Species, Starships, and Vehicles.",
		},
		{
			question: "Is SWAPI free to use?",
			answer:
				"Yes, SWAPI is completely free to use with no rate limits, no authentication required, and no ads. It's designed to be a learning resource for developers.",
		},
		{
			question: "What happened to swapi.dev and swapi.co?",
			answer:
				"The original swapi.co and swapi.dev services are no longer maintained. SWAPI.info was created as a reliable, fast alternative that is committed to long-term availability.",
		},
		{
			question: "How do I use the Star Wars API?",
			answer:
				"Simply make HTTP GET requests to https://swapi.info/api/{resource}. For example, https://swapi.info/api/people/1 returns data about Luke Skywalker. All responses are in JSON format.",
		},
		{
			question: "What data is available in SWAPI?",
			answer:
				"SWAPI provides data on Films (6 movies), People (82+ characters), Planets (60+ planets), Species (37+ species), Starships (36+ starships), and Vehicles (39+ vehicles) from the Star Wars universe.",
		},
		{
			question: "Do I need an API key to use SWAPI?",
			answer:
				"No, SWAPI is completely open and requires no authentication or API keys. You can start making requests immediately.",
		},
		{
			question: "Is there a rate limit for SWAPI?",
			answer:
				"No, there are no rate limits on SWAPI. The API is served from a global CDN with robust caching, allowing unlimited requests.",
		},
	]

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map((faq) => ({
			"@type": "Question",
			name: faq.question,
			acceptedAnswer: {
				"@type": "Answer",
				text: faq.answer,
			},
		})),
	}

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires innerHTML
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	)
}
