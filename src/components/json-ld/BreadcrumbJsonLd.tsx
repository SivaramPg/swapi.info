interface BreadcrumbItem {
	name: string
	url: string
}

interface BreadcrumbJsonLdProps {
	items: BreadcrumbItem[]
}

/**
 * JSON-LD structured data for BreadcrumbList schema
 * Helps search engines understand site structure
 */
export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: item.url,
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
