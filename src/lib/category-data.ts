import { readFile } from "node:fs/promises"
import { resolve } from "node:path"
import { slugify } from "@/utils/slugify"

/** Valid category names */
export const VALID_CATEGORIES = [
	"films",
	"people",
	"planets",
	"species",
	"starships",
	"vehicles",
] as const

export type Category = (typeof VALID_CATEGORIES)[number]

/** Entity with required fields for slug generation */
interface BaseEntity {
	name?: string
	title?: string
	url: string
}

/** Mapping between slugs and numeric IDs for a category */
export interface SlugMapping {
	slugToId: Map<string, string>
	idToSlug: Map<string, string>
}

/**
 * Extracts the numeric ID from a SWAPI URL
 * @param url - The full URL (e.g., "https://swapi.info/api/people/1")
 * @returns The numeric ID as a string
 */
export function extractIdFromUrl(url: string): string {
	const parts = url.split("/")
	return parts[parts.length - 1].replace(".json", "")
}

/**
 * Gets the display name from an entity (either name or title)
 * @param entity - The entity object
 * @returns The name or title
 */
export function getEntityName(entity: BaseEntity): string {
	return entity.name ?? entity.title ?? "unknown"
}

/**
 * Loads all entities for a category and creates slug mappings
 * @param category - The category name
 * @returns The slug mapping object
 */
export async function loadCategoryMappings(
	category: Category,
): Promise<SlugMapping> {
	const jsonFile = await readFile(
		resolve(process.cwd(), `public/api/${category}/all.json`),
	)
	const entities: BaseEntity[] = JSON.parse(jsonFile.toString())

	const slugToId = new Map<string, string>()
	const idToSlug = new Map<string, string>()

	for (const entity of entities) {
		const id = extractIdFromUrl(entity.url)
		const name = getEntityName(entity)
		const slug = slugify(name)

		// Handle potential slug collisions by appending ID
		let uniqueSlug = slug
		if (slugToId.has(slug)) {
			uniqueSlug = `${slug}-${id}`
		}

		slugToId.set(uniqueSlug, id)
		idToSlug.set(id, uniqueSlug)
	}

	return { slugToId, idToSlug }
}

/**
 * Generates all static params for a category (both numeric IDs and slugs)
 * @param category - The category name
 * @returns Array of slug params for generateStaticParams
 */
export async function generateCategoryParams(
	category: Category,
): Promise<{ category: string; slug: string }[]> {
	const { slugToId, idToSlug } = await loadCategoryMappings(category)
	const params: { category: string; slug: string }[] = []

	// Add both numeric ID and slug routes
	const entries = Array.from(idToSlug.entries())
	for (const entry of entries) {
		const [id, slug] = entry
		// Numeric route: /people/1
		params.push({ category, slug: id })
		// Slug route: /people/luke-skywalker
		params.push({ category, slug })
	}

	return params
}

/**
 * Resolves a slug (either numeric ID or text slug) to a numeric ID
 * @param category - The category name
 * @param slug - The slug or ID from the URL
 * @returns The numeric ID, or null if not found
 */
export async function resolveSlugToId(
	category: Category,
	slug: string,
): Promise<string | null> {
	// If it's already a numeric ID, return it directly
	const numericId = Number(slug)
	if (
		!Number.isNaN(numericId) &&
		Number.isInteger(numericId) &&
		numericId > 0
	) {
		return slug
	}

	// Otherwise, look up the slug in the mapping
	const { slugToId } = await loadCategoryMappings(category)
	return slugToId.get(slug) ?? null
}

/**
 * Gets the canonical slug for a numeric ID
 * @param category - The category name
 * @param id - The numeric ID
 * @returns The text slug
 */
export async function getSlugForId(
	category: Category,
	id: string,
): Promise<string | null> {
	const { idToSlug } = await loadCategoryMappings(category)
	return idToSlug.get(id) ?? null
}

/**
 * Loads a single entity by ID
 * @param category - The category name
 * @param id - The numeric ID
 * @returns The entity data
 */
export async function loadEntityById<T extends BaseEntity>(
	category: Category,
	id: string,
): Promise<T> {
	const jsonFile = await readFile(
		resolve(process.cwd(), `public/api/${category}/${id}.json`),
	)
	return JSON.parse(jsonFile.toString()) as T
}

/**
 * Checks if a category is valid
 * @param category - The category to check
 * @returns True if valid
 */
export function isValidCategory(category: string): category is Category {
	return VALID_CATEGORIES.includes(category as Category)
}
