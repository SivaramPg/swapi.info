import { readdir, readFile } from "node:fs/promises"
import { resolve } from "node:path"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ApiEndpointElement from "@/components/ApiEndpointElement"
import Breadcrumbs from "@/components/Breadcrumbs"
import { BreadcrumbJsonLd } from "@/components/json-ld"
import { LinkPill } from "@/components/link-pill"
import RequestDisplayElement from "@/components/RequestDisplayElement"
import ResponseDisplayElement from "@/components/ResponseDisplayElement"
import SpriteIcon, { Icons } from "@/components/SpriteIcon"
import {
	type Category,
	extractIdFromUrl,
	getEntityName,
	isValidCategory,
	loadCategoryMappings,
	VALID_CATEGORIES,
} from "@/lib/category-data"
import { cn } from "@/utils/cn"

export const dynamicParams = false

// Explicitly disable dynamic rendering and force static generation
export const dynamic = "force-static"

// Explicitly disable any time-based revalidation
export const revalidate = false

export async function generateStaticParams() {
	const categories: { category: string }[] = []

	const rawCategories = await readdir("public/api", {
		withFileTypes: true,
	})

	for (const category of rawCategories) {
		if (category.isDirectory()) {
			categories.push({ category: category.name })
		}
	}

	return categories
}

/**
 * Category descriptions for SEO
 */
const categoryDescriptions: Record<Category, string> = {
	films:
		"Browse all Star Wars films data via SWAPI. Access information about all 6 movies including A New Hope, Empire Strikes Back, Return of the Jedi, and the prequel trilogy.",
	people:
		"Browse all Star Wars characters via SWAPI. Access data on 82+ characters including Luke Skywalker, Darth Vader, Princess Leia, Han Solo, Yoda, and more.",
	planets:
		"Browse all Star Wars planets via SWAPI. Access data on 60+ planets including Tatooine, Coruscant, Naboo, Hoth, Dagobah, and more.",
	species:
		"Browse all Star Wars species via SWAPI. Access data on 37+ species including Humans, Wookiees, Droids, Hutts, Ewoks, and more.",
	starships:
		"Browse all Star Wars starships via SWAPI. Access data on 36+ starships including Millennium Falcon, X-wing, Star Destroyer, Death Star, and more.",
	vehicles:
		"Browse all Star Wars vehicles via SWAPI. Access data on 39+ vehicles including AT-AT, Speeder Bikes, Sandcrawler, and more.",
}

/**
 * Generates metadata for SEO
 */
export async function generateMetadata({
	params,
}: {
	params: Promise<{ category: string }>
}): Promise<Metadata> {
	const { category } = await params

	if (!isValidCategory(category)) {
		return {}
	}

	const categoryLabel = category.charAt(0).toUpperCase() + category.slice(1)
	const title = `Star Wars ${categoryLabel} | SWAPI`
	const description = categoryDescriptions[category]

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: "website",
			url: `https://swapi.info/${category}`,
		},
		twitter: {
			card: "summary",
			title,
			description,
		},
		alternates: {
			canonical: `https://swapi.info/${category}`,
		},
	}
}

async function getCategoryAllJson(category: string) {
	try {
		const jsonFile = await readFile(
			resolve(process.cwd(), `public/api/${category}/all.json`),
		)
		const json = await JSON.parse(jsonFile.toString())

		return json
	} catch (error) {
		notFound()
	}
}

interface EntityData {
	name?: string
	title?: string
	url: string
	[key: string]: unknown
}

export default async function Page({
	params,
}: {
	params: Promise<{ category: string }>
}) {
	const { category } = await params

	if (!isValidCategory(category)) {
		return notFound()
	}

	const data: EntityData[] = await getCategoryAllJson(category)
	const { idToSlug } = await loadCategoryMappings(category)

	const categoryLabel = category.charAt(0).toUpperCase() + category.slice(1)

	return (
		<>
			<BreadcrumbJsonLd
				items={[
					{ name: "Home", url: "https://swapi.info" },
					{ name: categoryLabel, url: `https://swapi.info/${category}` },
				]}
			/>
			<main className="container flex flex-col items-center justify-center min-h-screen gap-8 px-4 py-10 mx-auto md:py-16 lg:py-20">
				<h1 className="mb-6 text-5xl font-black lg:text-7xl md:mb-10 text-[#FFE81F]">
					{categoryLabel}
				</h1>
				<p className="text-lg text-white/60 -mt-12 mb-4 max-w-2xl text-center">
					{categoryDescriptions[category].split(".")[0]}.
				</p>
				<Breadcrumbs pathElements={[category]} />
				<ApiEndpointElement text={`https://swapi.info/api/${category}`} />
				<RequestDisplayElement slug={`/${category}`} />
				<ResponseDisplayElement>
					{JSON.stringify(data, null, 2)}
				</ResponseDisplayElement>
				<div
					className={cn("w-full max-w-(--breakpoint-lg) flex flex-col gap-2")}
				>
					<h4 className="text-lg font-bold md:text-xl lg:text-2xl opacity-70">
						View {category}:
					</h4>
					<div className="flex flex-wrap gap-4">
						{data.map((obj: EntityData, i: number) => {
							const id = extractIdFromUrl(obj.url)
							const slug = idToSlug.get(id) ?? id
							const name = getEntityName(obj)
							return (
								<LinkPill
									key={obj.url}
									text={`${id}. ${name}`}
									href={`/${category}/${slug}`}
								/>
							)
						})}
					</div>
				</div>
				<div
					className={cn(
						"w-full max-w-(--breakpoint-lg) flex flex-col gap-2 mb-10",
					)}
				>
					<h4 className="text-lg font-bold md:text-xl lg:text-2xl opacity-70">
						Visit the API endpoint:
					</h4>
					<div className="flex flex-col gap-2 pl-6 w-fit">
						<ol className="w-full">
							{data.map((value: EntityData, i: number) => (
								<li key={value.url} className="list-decimal list-item w-full">
									<a
										target="_blank"
										rel="noopener noreferrer"
										href={value.url}
										className="inline-flex items-center w-full gap-2 underline underline-offset-4 hover:text-[#FFE81F] space-x-2"
									>
										<h2 className="text-sm sm:text-base w-full">
											{value.url.replace("https://", "")}
										</h2>
										<SpriteIcon
											id={Icons["tab-external"]}
											width={20}
											height={20}
											className="shrink-0"
										/>
									</a>
								</li>
							))}
						</ol>
					</div>
				</div>
			</main>
		</>
	)
}
