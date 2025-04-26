import { readFile, readdir } from "node:fs/promises"
import { resolve } from "node:path"
import ApiEndpointElement from "@/components/ApiEndpointElement"
import Breadcrumbs from "@/components/Breadcrumbs"
import RequestDisplayElement from "@/components/RequestDisplayElement"
import ResponseDisplayElement from "@/components/ResponseDisplayElement"
import SpriteIcon, { Icons } from "@/components/SpriteIcon"
import { LinkPill } from "@/components/link-pill"
import { cn } from "@/utils/cn"
import { notFound } from "next/navigation"

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

export default async function Page({
	params,
}: {
	params: Promise<{ category: string }>
}) {
	const { category } = await params

	if (
		![
			"films",
			"people",
			"planets",
			"species",
			"starships",
			"vehicles",
		].includes(category)
	) {
		return notFound()
	}

	const data = await getCategoryAllJson(category)

	return (
		<main className="container flex flex-col items-center justify-center min-h-screen gap-8 px-4 py-10 mx-auto md:py-16 lg:py-20">
			<h1 className="mb-6 text-5xl font-black lg:text-7xl md:mb-10 text-[#FFE81F]">
				/{category}
			</h1>
			<Breadcrumbs pathElements={[category]} />
			<ApiEndpointElement text={`https://swapi.info/api/${category}`} />
			<RequestDisplayElement slug={`/${category}`} />
			<ResponseDisplayElement>
				{JSON.stringify(data, null, 2)}
			</ResponseDisplayElement>
			<div className={cn("w-full max-w-screen-lg flex flex-col gap-2")}>
				<h4 className="text-lg font-bold md:text-xl lg:text-2xl opacity-70">
					View {category}:
				</h4>
				<div className="flex flex-wrap gap-4">
					{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
					{data.map((obj: any, i: number) => (
						<LinkPill
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={i}
							text={`${obj.url.split("/").at(-1).split(".")[0]}. ${
								obj.title ?? obj.name
							}`}
							href={obj.url.replace("/api", "")}
						/>
					))}
				</div>
			</div>
			<div className={cn("w-full max-w-screen-lg flex flex-col gap-2 mb-10")}>
				<h4 className="text-lg font-bold md:text-xl lg:text-2xl opacity-70">
					Visit the API endpoint:
				</h4>
				<div className="flex flex-col gap-2 pl-6">
					{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
					{data.map((value: any, i: number) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<ul key={i}>
							<li className="list-disc">
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={value.url}
									className="inline-flex items-center w-full gap-2 underline underline-offset-4 hover:text-[#FFE81F]"
								>
									<h2 className="text-sm sm:text-base">
										{value.url.replace("https://", "")}
									</h2>
									<SpriteIcon
										id={Icons["tab-external"]}
										width={20}
										height={20}
									/>
								</a>
							</li>
						</ul>
					))}
				</div>
			</div>
		</main>
	)
}
