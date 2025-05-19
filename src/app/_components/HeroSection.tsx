import ApiEndpointElement from "@/components/ApiEndpointElement"
import { cn } from "@/utils/cn"
import Link from "next/link"
import type { JSX } from "react"

interface HeroSectionProps {
	className?: string
}

const HeroSection = ({ className }: HeroSectionProps): JSX.Element => {
	return (
		<section
			className={cn(
				"w-full bg-[url('/bg-watermark.png')] bg-center bg-origin-content",
				className,
			)}
		>
			<div className="flex flex-col items-center justify-center w-full max-w-screen-md gap-2 sm:gap-4 py-6 sm:py-10 md:py-12 mx-auto">
				<h1 className="font-bold text-center text-3xl lg:text-5xl text-[#FFE81F]">
					SWAPI Reborn!
				</h1>
				<h2 className="-mt-2 mb-4 text-lg font-medium text-center md:text-xl lg:text-2xl text-[#FFE81Fbb]">
					Star Wars APIs & Explorer
				</h2>
				<h3 className="max-w-screen-sm mx-5 mt-2 mb-6 text-center text-md sm:text-xl md:text-xl">
					<span className="opacity-60">
						All the Star Wars data you&lsquo;ve ever wanted!
					</span>
					<br />
					<span className="font-semibold opacity-80">
						Planets, Spaceships, Vehicles, People, Films & Species
					</span>
				</h3>

				<div className="flex gap-4 mb-4">
					<Link
						href="/about"
						className="px-6 py-2 font-semibold text-black bg-[#FFE81F] rounded-md hover:bg-[#FFE81F]/90 transition-colors"
					>
						About
					</Link>
					<Link
						href="/documentation"
						className="px-6 py-2 font-semibold text-black bg-[#FFE81F] rounded-md hover:bg-[#FFE81F]/90 transition-colors"
					>
						Documentation
					</Link>
				</div>

				<h4 className="text-lg md:text-xl font-medium text-center text-white animate-bounce">
					🎉🎉&nbsp;&nbsp;Over{" "}
					<span className="text-[#FFE81F]">1,000,000+</span> API Requests served
					daily!&nbsp;&nbsp;🎉🎉
				</h4>

				<div className="w-full max-w-screen-lg px-2">
					<ApiEndpointElement hideLabel text={"https://swapi.info/api/"} />
				</div>
				<div className="w-full max-w-screen-lg px-2 mt-6 text-center">
					<h4 className="text-lg font-medium text-white md:text-xl">
						Why Choose SWAPI Reborn?
					</h4>
					<div className="overflow-x-hidden whitespace-nowrap">
						<ul className="inline-block mt-2 space-x-4 text-sm text-gray-300 list-none md:text-md animate-marquee">
							<li className="inline-block">✅ Free & No Ads</li>
							<li className="inline-block">✅ 100% Uptime & No SSL Errors</li>
							<li className="inline-block">
								✅ Modern Architecture & CDNs (No Rate Limits!)
							</li>
							<li className="inline-block">✅ Fast API Responses (~50ms!)</li>
							<li className="inline-block">✅ Robust Caching</li>
							<li className="inline-block">
								✅ Ideal for Students, Developers, & Teachers - Built to Last!
							</li>
							<li className="inline-block">✅ Free & No Ads</li>
							<li className="inline-block">✅ 100% Uptime & No SSL Errors</li>
							<li className="inline-block">
								✅ Modern Architecture & CDNs (No Rate Limits!)
							</li>
							<li className="inline-block">✅ Fast API Responses (~50ms!)</li>
							<li className="inline-block">✅ Robust Caching</li>
							<li className="inline-block">
								✅ Ideal for Students, Developers, & Teachers - Built to Last!
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
