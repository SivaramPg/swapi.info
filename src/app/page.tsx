import fsPromises from "node:fs/promises"
import path from "node:path"
import clsx from "clsx"
import Link from "next/link"
import RequestDisplayElement from "@/components/RequestDisplayElement"
import ResponseDisplayElement from "@/components/ResponseDisplayElement"
import SpriteIcon, { Icons } from "@/components/SpriteIcon"
import { AboutTheProject } from "./_components/AboutTheProject"
import HeroSection from "./_components/HeroSection"

export const dynamic = "force-static"

async function getRootJson() {
	const jsonFile = await fsPromises.readFile(
		path.resolve(process.cwd(), "public/api/root.json"),
	)

	return JSON.parse(jsonFile.toString())
}

export default async function Home() {
	const data = await getRootJson()

	return (
		<>
			<main className="flex flex-col items-center justify-center w-full min-h-screen gap-4 sm:gap-6 md:gap-8 pb-4 sm:pb-8 md:pb-10">
				<HeroSection />
				<div className="container flex flex-col items-center justify-center gap-8 px-4 mx-auto">
					<RequestDisplayElement slug={"/"} />
					<ResponseDisplayElement>
						{JSON.stringify(data, null, 4)}
					</ResponseDisplayElement>
					<div
						className={clsx(
							"w-full max-w-(--breakpoint-lg) flex flex-col gap-2",
						)}
					>
						<h4 className="text-lg font-bold md:text-xl lg:text-2xl opacity-70">
							View a category:
						</h4>
						<div className="flex flex-wrap gap-2 sm:gap-4">
							{Object.entries(data).map(([key, value], i: number) => (
								<Link
									prefetch={false}
									key={key}
									href={(value as string).replace("/api", "")}
									className="w-1/4 bg-white/10 border border-white/10 hover:border-[#FFE81F] duration-100 rounded-lg shadow-sm grow"
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
						className={clsx(
							"w-full max-w-(--breakpoint-lg) flex flex-col gap-2 mb-10",
						)}
					>
						<h4 className="text-lg font-bold md:text-xl lg:text-2xl opacity-70">
							Visit the API endpoint:
						</h4>
						<div className="flex flex-col gap-2 pl-6 w-fit">
							<ol className="w-full">
								{Object.values(data).map((value, i: number) => (
									<li
										key={value as string}
										className="w-full list-decimal list-item pl-2"
									>
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={value as string}
											className="inline-flex items-center w-full gap-2 hover:text-[#FFE81F] space-x-2"
										>
											<h2 className="text-sm sm:text-base md:text-lg w-full">
												{(value as string).replace("https://", "")}
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
				</div>
			</main>
			<AboutTheProject />
		</>
	)
}
