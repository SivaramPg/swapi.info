/**
 * JSON-LD structured data for the WebAPI schema
 * Used on the homepage to describe the Star Wars API
 */
export function WebApiJsonLd() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "WebAPI",
		name: "SWAPI - The Star Wars API",
		description:
			"The Star Wars API (SWAPI) provides programmatic access to all Star Wars data including People, Films, Planets, Species, Starships, and Vehicles. A free, open REST API serving JSON data.",
		url: "https://swapi.info/api",
		documentation: "https://swapi.info/documentation",
		termsOfService: "https://swapi.info/about",
		provider: {
			"@type": "Organization",
			name: "SWAPI.info",
			url: "https://swapi.info",
		},
		offers: {
			"@type": "Offer",
			price: "0",
			priceCurrency: "USD",
			description: "Free API access with no rate limits",
		},
		potentialAction: {
			"@type": "ConsumeAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: "https://swapi.info/api/{category}/{id}",
				httpMethod: "GET",
				contentType: "application/json",
			},
		},
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
 * JSON-LD structured data for the website/organization
 * Used to establish site identity
 */
export function WebsiteJsonLd() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "SWAPI - The Star Wars API",
		alternateName: ["SWAPI Reborn", "Star Wars API", "swapi.info"],
		url: "https://swapi.info",
		description:
			"All the Star Wars data you've ever wanted. A free, open API for Star Wars data.",
		inLanguage: "en",
		potentialAction: {
			"@type": "SearchAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: "https://swapi.info/{category}",
			},
			"query-input": "required name=category",
		},
		publisher: {
			"@type": "Person",
			name: "Sivaram P",
			url: "https://sivaramp.com",
		},
	}

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires innerHTML
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	)
}
