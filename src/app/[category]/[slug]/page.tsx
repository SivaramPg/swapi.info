import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ApiEndpointElement from "@/components/ApiEndpointElement"
import Breadcrumbs from "@/components/Breadcrumbs"
import RequestDisplayElement from "@/components/RequestDisplayElement"
import ResponseDisplayElement from "@/components/ResponseDisplayElement"
import {
	getEntityName,
	isValidCategory,
	loadCategoryMappings,
	loadEntityById,
	resolveSlugToId,
	VALID_CATEGORIES,
} from "@/lib/category-data"
import { EntityJsonLd } from "./json-ld"

export const dynamicParams = false

// Explicitly disable dynamic rendering and force static generation
export const dynamic = "force-static"

// Explicitly disable any time-based revalidation
export const revalidate = false

/**
 * Generates static params for all category/slug combinations
 * Only generates slug routes (/people/luke-skywalker)
 * ID routes (/people/1) are handled via 301 redirects in _redirects
 */
export async function generateStaticParams() {
	const slugs: { category: string; slug: string }[] = []

	for (const category of VALID_CATEGORIES) {
		const { idToSlug } = await loadCategoryMappings(category)

		// Only add slug routes (not numeric ID routes)
		// ID routes are redirected to slug routes via Netlify _redirects
		const entries = Array.from(idToSlug.entries())
		for (const entry of entries) {
			const [_id, slug] = entry
			// Slug route only: /people/luke-skywalker
			slugs.push({ category, slug })
		}
	}

	return slugs
}

interface EntityData {
	name?: string
	title?: string
	url: string
	[key: string]: unknown
}

/**
 * Generates metadata for SEO
 */
export async function generateMetadata({
	params,
}: {
	params: Promise<{ category: string; slug: string }>
}): Promise<Metadata> {
	const { category, slug } = await params

	if (!isValidCategory(category)) {
		return {}
	}

	const id = await resolveSlugToId(category, slug)
	if (!id) {
		return {}
	}

	try {
		const data = await loadEntityById<EntityData>(category, id)
		const name = getEntityName(data)

		const categoryLabel = category.charAt(0).toUpperCase() + category.slice(1)
		// Shortened title format to stay under 60 chars
		const title = `${name} | ${categoryLabel}`
		const description = generateDescription(category, data)

		return {
			title,
			description,
			openGraph: {
				title,
				description,
				type: "website",
				url: `https://swapi.info/${category}/${slug}`,
			},
			twitter: {
				card: "summary",
				title,
				description,
			},
			alternates: {
				canonical: `https://swapi.info/${category}/${slug}`,
			},
		}
	} catch {
		return {}
	}
}

/**
 * Generates a description based on entity type and data
 */
function generateDescription(category: string, data: EntityData): string {
	const name = getEntityName(data)

	switch (category) {
		case "people": {
			const gender = (data.gender as string) ?? "unknown"
			const birthYear = (data.birth_year as string) ?? "unknown"
			return `${name} is a character from the Star Wars universe. Gender: ${gender}, Birth year: ${birthYear}. Access ${name}'s data via the SWAPI REST API.`
		}
		case "films": {
			const director = (data.director as string) ?? "unknown"
			const releaseDate = (data.release_date as string) ?? "unknown"
			return `${name} is a Star Wars film directed by ${director}, released ${releaseDate}. Access film data via the SWAPI REST API.`
		}
		case "planets": {
			const climate = (data.climate as string) ?? "unknown"
			const terrain = (data.terrain as string) ?? "unknown"
			return `${name} is a planet in the Star Wars universe. Climate: ${climate}, Terrain: ${terrain}. Access planet data via the SWAPI REST API.`
		}
		case "species": {
			const classification = (data.classification as string) ?? "unknown"
			const language = (data.language as string) ?? "unknown"
			return `${name} is a species in the Star Wars universe. Classification: ${classification}, Language: ${language}. Access species data via the SWAPI REST API.`
		}
		case "starships": {
			const model = (data.model as string) ?? "unknown"
			const manufacturer = (data.manufacturer as string) ?? "unknown"
			return `${name} is a starship in the Star Wars universe. Model: ${model}, Manufacturer: ${manufacturer}. Access starship data via the SWAPI REST API.`
		}
		case "vehicles": {
			const model = (data.model as string) ?? "unknown"
			const vehicleClass = (data.vehicle_class as string) ?? "unknown"
			return `${name} is a vehicle in the Star Wars universe. Model: ${model}, Class: ${vehicleClass}. Access vehicle data via the SWAPI REST API.`
		}
		default:
			return `Access ${name} data from the Star Wars universe via the SWAPI REST API.`
	}
}

export default async function Page({
	params,
}: {
	params: Promise<{ category: string; slug: string }>
}) {
	const { category, slug } = await params

	// Validate category
	if (!isValidCategory(category)) {
		return notFound()
	}

	// Resolve slug to numeric ID (works for both numeric IDs and text slugs)
	const id = await resolveSlugToId(category, slug)
	if (!id) {
		return notFound()
	}

	// Load entity data
	let data: EntityData
	try {
		data = await loadEntityById<EntityData>(category, id)
	} catch {
		return notFound()
	}

	const name = getEntityName(data)

	return (
		<>
			<EntityJsonLd category={category} data={data} slug={slug} />
			<main className="container flex flex-col gap-8 justify-center items-center px-4 py-10 mx-auto min-h-screen md:py-16 lg:py-20">
				<h1 className="mb-6 text-4xl sm:text-5xl font-black lg:text-7xl md:mb-10 text-[#FFE81F] text-center">
					{name}
				</h1>
				<p className="text-lg text-white/60 -mt-8 mb-4">
					/{category}/{slug}
				</p>
				<Breadcrumbs
					pathElements={[
						category,
						{ label: name, href: `/${category}/${slug}` },
					]}
				/>
				<ApiEndpointElement text={data.url} />
				<RequestDisplayElement slug={`/${category}/${id}`} />
				<ResponseDisplayElement>
					{JSON.stringify(data, null, 2)}
				</ResponseDisplayElement>
			</main>
		</>
	)
}
