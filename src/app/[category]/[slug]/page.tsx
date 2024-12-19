import fsPromises, { readFile } from "node:fs/promises"

import path from "node:path"
import ApiEndpointElement from "@/components/ApiEndpointElement"
import Breadcrumbs from "@/components/Breadcrumbs"
import RequestDisplayElement from "@/components/RequestDisplayElement"
import ResponseDisplayElement from "@/components/ResponseDisplayElement"

export const dynamic = "force-static"

export async function generateStaticParams() {
	const slugs: { category: string; slug: string }[] = []

	const rawCategories = await fsPromises.readdir("public/api/", {
		withFileTypes: true,
		recursive: true,
	})
	for (const category of rawCategories) {
		if (
			category.isFile() &&
			!["all.json", ".DS_Store", "root.json", "schema.json"].includes(
				category.name,
			)
		) {
			const categoryName = category.path.split("/").at(-1)

			slugs.push({
				category: categoryName ?? "",
				slug: category.name.split(".")[0],
			})
		}
	}

	return slugs
}

async function getCategorySlugJson(category: string, slug: string) {
	const jsonFile = await readFile(
		path.resolve(
			__dirname,
			`../../../../../public/api/${category}/${slug}.json`,
		),
	)
	const json = await JSON.parse(jsonFile.toString())

	return json
}

export default async function Page({
	params,
}: {
	params: Promise<{ category: string; slug: string }>
}) {
	const { category, slug } = await params

	const data = await getCategorySlugJson(category, slug)

	return (
		<main className="container flex flex-col items-center justify-center min-h-screen gap-8 px-4 py-10 mx-auto md:py-16 lg:py-20">
			<h1 className="mb-6 text-5xl font-black lg:text-7xl md:mb-10 text-[#FFE81F]">
				/{category}/{slug}
			</h1>
			<Breadcrumbs pathElements={[category, slug]} />
			<ApiEndpointElement text={data.url} />
			<RequestDisplayElement slug={`/${category}/${slug}`} />
			<ResponseDisplayElement>
				{JSON.stringify(data, null, 2)}
			</ResponseDisplayElement>
		</main>
	)
}
