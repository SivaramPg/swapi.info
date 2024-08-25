import fsPromises from "node:fs/promises"

import { cn } from "@/utils/cn"
import type { Metadata } from "next"

import ApiEndpointElement from "@/components/ApiEndpointElement"
import Breadcrumbs from "@/components/Breadcrumbs"
import ResponseDisplayElement from "@/components/ResponseDisplayElement"
import SpriteIcon, { Icons } from "@/components/SpriteIcon"

import { metadata } from "@/app/layout"
import RequestDisplayElement from "@/components/RequestDisplayElement"
import { LinkPill } from "@/components/link-pill"
import { capitalize } from "@/utils/capitalize"

export async function generateStaticParams() {
	const categories: { category: string }[] = []

	const rawCategories = await fsPromises.readdir("public/api", {
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
	const jsonFile = Bun.file(`public/api/${category}/all.json`)
	const json = await jsonFile.json()

	return json
}

export async function generateMetadata({
	params,
}: {
	params: { category: string }
}) {
	return {
		title: capitalize(params.category),
		description: `Get all the Star Wars ${params.category} in one place! ${metadata.description}`,
		alternates: { canonical: `https://swapi.info/${params.category}` },
		openGraph: {
			title: capitalize(params.category),
			description: `Get all the Star Wars ${params.category} in one place! ${metadata.description}`,
		},
		twitter: {
			title: capitalize(params.category),
			description: `Get all the Star Wars ${params.category} in one place! ${metadata.description}`,
		},
	} as Metadata
}

export default async function Page({
	params,
}: {
	params: { category: string }
}) {
	const { category } = params

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
							href={obj.url.replace("/api", "/")}
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
									className="inline-flex items-center w-full gap-2 underline underline-offset-4 hover:text-blue-500"
								>
									<h2 className="text-lg">{value.url}</h2>
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
