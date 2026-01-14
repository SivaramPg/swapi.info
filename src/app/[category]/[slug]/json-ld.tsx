import { getEntityName } from "@/lib/category-data"

interface EntityJsonLdProps {
	category: string
	data: {
		name?: string
		title?: string
		url: string
		[key: string]: unknown
	}
	slug: string
}

/**
 * Generates JSON-LD structured data for Star Wars entities
 * Uses schema.org types appropriate for each category
 */
export function EntityJsonLd({ category, data, slug }: EntityJsonLdProps) {
	const name = getEntityName(data)
	const pageUrl = `https://swapi.info/${category}/${slug}`
	const apiUrl = data.url

	// Base structured data that applies to all entities
	const baseData = {
		"@context": "https://schema.org",
		name,
		url: pageUrl,
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": pageUrl,
		},
		isPartOf: {
			"@type": "WebAPI",
			name: "SWAPI - Star Wars API",
			url: "https://swapi.info/api",
		},
	}

	let jsonLd: Record<string, unknown>

	switch (category) {
		case "people":
			jsonLd = {
				...baseData,
				"@type": "Person",
				description: `${name} is a character from the Star Wars universe.`,
				gender: data.gender !== "n/a" ? data.gender : undefined,
				birthDate: data.birth_year !== "unknown" ? data.birth_year : undefined,
				height:
					data.height !== "unknown"
						? {
								"@type": "QuantitativeValue",
								value: data.height,
								unitCode: "CMT",
							}
						: undefined,
				sameAs: apiUrl,
			}
			break

		case "films":
			jsonLd = {
				...baseData,
				"@type": "Movie",
				description:
					data.opening_crawl?.toString().slice(0, 200) ??
					`${name} is a Star Wars film.`,
				director: data.director,
				producer: data.producer,
				datePublished: data.release_date,
				genre: "Science Fiction",
				inLanguage: "en",
				sameAs: apiUrl,
			}
			break

		case "planets":
			jsonLd = {
				...baseData,
				"@type": "Place",
				description: `${name} is a planet in the Star Wars universe. Climate: ${data.climate}, Terrain: ${data.terrain}.`,
				additionalProperty: [
					{
						"@type": "PropertyValue",
						name: "Climate",
						value: data.climate,
					},
					{
						"@type": "PropertyValue",
						name: "Terrain",
						value: data.terrain,
					},
					{
						"@type": "PropertyValue",
						name: "Population",
						value: data.population,
					},
				],
				sameAs: apiUrl,
			}
			break

		case "species":
			jsonLd = {
				...baseData,
				"@type": "Thing",
				description: `${name} is a species in the Star Wars universe. Classification: ${data.classification}.`,
				additionalProperty: [
					{
						"@type": "PropertyValue",
						name: "Classification",
						value: data.classification,
					},
					{
						"@type": "PropertyValue",
						name: "Language",
						value: data.language,
					},
					{
						"@type": "PropertyValue",
						name: "Average Height",
						value: data.average_height,
					},
					{
						"@type": "PropertyValue",
						name: "Average Lifespan",
						value: data.average_lifespan,
					},
				],
				sameAs: apiUrl,
			}
			break

		case "starships":
			jsonLd = {
				...baseData,
				"@type": "Vehicle",
				description: `${name} is a starship in the Star Wars universe. Model: ${data.model}.`,
				model: data.model,
				manufacturer: {
					"@type": "Organization",
					name: data.manufacturer,
				},
				vehicleConfiguration: data.starship_class,
				additionalProperty: [
					{
						"@type": "PropertyValue",
						name: "Hyperdrive Rating",
						value: data.hyperdrive_rating,
					},
					{
						"@type": "PropertyValue",
						name: "MGLT",
						value: data.MGLT,
					},
					{
						"@type": "PropertyValue",
						name: "Crew",
						value: data.crew,
					},
					{
						"@type": "PropertyValue",
						name: "Passengers",
						value: data.passengers,
					},
				],
				sameAs: apiUrl,
			}
			break

		case "vehicles":
			jsonLd = {
				...baseData,
				"@type": "Vehicle",
				description: `${name} is a vehicle in the Star Wars universe. Model: ${data.model}.`,
				model: data.model,
				manufacturer: {
					"@type": "Organization",
					name: data.manufacturer,
				},
				vehicleConfiguration: data.vehicle_class,
				additionalProperty: [
					{
						"@type": "PropertyValue",
						name: "Crew",
						value: data.crew,
					},
					{
						"@type": "PropertyValue",
						name: "Passengers",
						value: data.passengers,
					},
					{
						"@type": "PropertyValue",
						name: "Max Speed",
						value: data.max_atmosphering_speed,
					},
				],
				sameAs: apiUrl,
			}
			break

		default:
			jsonLd = {
				...baseData,
				"@type": "Thing",
				description: `${name} from the Star Wars universe.`,
				sameAs: apiUrl,
			}
	}

	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires innerHTML
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
	)
}
