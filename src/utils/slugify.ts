/**
 * Converts a name or title string to a URL-friendly slug.
 * Examples:
 *   "Luke Skywalker" -> "luke-skywalker"
 *   "A New Hope" -> "a-new-hope"
 *   "Millennium Falcon" -> "millennium-falcon"
 *   "C-3PO" -> "c-3po"
 *   "R2-D2" -> "r2-d2"
 *
 * @param text - The text to convert to a slug
 * @returns The URL-friendly slug
 */
export function slugify(text: string): string {
	return text
		.toLowerCase()
		.trim()
		.replace(/[àáâãäå]/g, "a")
		.replace(/[èéêë]/g, "e")
		.replace(/[ìíîï]/g, "i")
		.replace(/[òóôõö]/g, "o")
		.replace(/[ùúûü]/g, "u")
		.replace(/[ñ]/g, "n")
		.replace(/[ç]/g, "c")
		.replace(/[''"]/g, "") // Remove quotes
		.replace(/[^\w\s-]/g, "") // Remove special chars except hyphens
		.replace(/\s+/g, "-") // Replace spaces with hyphens
		.replace(/-+/g, "-") // Replace multiple hyphens with single
		.replace(/^-+|-+$/g, "") // Trim hyphens from start/end
}

/**
 * Checks if a string is a numeric ID
 * @param slug - The string to check
 * @returns True if the string is a valid numeric ID
 */
export function isNumericId(slug: string): boolean {
	const num = Number(slug)
	return !Number.isNaN(num) && Number.isInteger(num) && num > 0
}
