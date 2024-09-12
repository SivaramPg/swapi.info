import fsPromises from "node:fs/promises"
import path from "node:path"
import RequestDisplayElement from "@/components/RequestDisplayElement"
import ResponseDisplayElement from "@/components/ResponseDisplayElement"
import SpriteIcon, { Icons } from "@/components/SpriteIcon"
import clsx from "clsx"
import Link from "next/link"
import { AboutTheProject } from "./_components/AboutTheProject"
import HeroSection from "./_components/HeroSection"

async function getRootJson() {
	const jsonFile = await fsPromises.readFile(
		path.resolve(__dirname, "../../../public/api/root.json"),
	)

	return JSON.parse(jsonFile.toString())
}

export default async function Home() {
	const data = await getRootJson()

	return (
		<>
			<main className="flex flex-col items-center justify-center w-full min-h-screen gap-8 pb-20">
				<HeroSection />
				<div className="container flex flex-col items-center justify-center gap-8 px-4 mx-auto">
					<RequestDisplayElement slug={"/"} />
					<ResponseDisplayElement>
						{JSON.stringify(data, null, 4)}
					</ResponseDisplayElement>
					<div className={clsx("w-full max-w-screen-lg flex flex-col gap-2")}>
						<h4 className="text-lg font-bold md:text-xl lg:text-2xl opacity-70">
							View a category:
						</h4>
						<div className="flex flex-wrap gap-2 sm:gap-4">
							{Object.entries(data).map(([key, value], i: number) => (
								<Link
									key={key}
									href={(value as string).replace("/api", "")}
									className="w-1/4 bg-black border hover:border-[#FFE81F] duration-100 rounded-lg shadow-sm grow dark:bg-white dark:bg-opacity-10"
								>
									<div className="flex items-center justify-between w-full gap-1 p-2 h-fit sm:p-4 md:gap-2">
										<h2 className="font-bold capitalize text-md md:text-lg">
											{key}
										</h2>
										<SpriteIcon
											id={Icons["caret-right"]}
											width={24}
											height={24}
											className="hidden sm:block"
										/>
									</div>
								</Link>
							))}
						</div>
					</div>
					<div
						className={clsx("w-full max-w-screen-lg flex flex-col gap-2 mb-10")}
					>
						<h4 className="text-lg font-bold md:text-xl lg:text-2xl opacity-70">
							Visit the API endpoint:
						</h4>
						<div className="flex flex-col gap-2 pl-6">
							{Object.values(data).map((value, i: number) => (
								<ul key={value as string}>
									<li className="list-disc">
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={value as string}
											className="inline-flex items-center w-full gap-2 underline underline-offset-4 hover:text-[#FFE81F]"
										>
											<h2 className="text-base lg:text-lg">
												{value as string}
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
				</div>
			</main>
			<AboutTheProject />
		</>
	)
}
