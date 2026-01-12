import Link from "next/link"
import type { JSX } from "react"
import ApiEndpointElement from "@/components/ApiEndpointElement"
import { cn } from "@/utils/cn"

interface HeroSectionProps {
	className?: string
}

const HeroSection = ({ className }: HeroSectionProps): JSX.Element => {
	return (
		<section className={cn("w-full starfield", className)}>
			<div className="flex flex-col items-center justify-center w-full max-w-(--breakpoint-md) gap-2 sm:gap-4 py-10 sm:py-14 md:py-20 mx-auto relative z-10">
				<h1 className="font-bold text-center text-4xl sm:text-5xl lg:text-6xl text-[#FFE81F] title-glow tracking-tight">
					SWAPI Reborn!
				</h1>
				<h2 className="-mt-1 mb-4 text-lg font-medium text-center md:text-xl lg:text-2xl text-[#FFE81F]/70 subtitle-glow">
					Star Wars APIs & Explorer
				</h2>
				<h3 className="max-w-(--breakpoint-sm) mx-5 mt-2 mb-6 text-center text-md sm:text-xl md:text-xl">
					<span className="opacity-60">
						All the Star Wars data you&lsquo;ve ever wanted!
					</span>
					<br />
					<span className="font-semibold opacity-80">
						Planets, Spaceships, Vehicles, People, Films & Species
					</span>
				</h3>

				<div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6">
					<Link
						href="/playground"
						className="px-5 sm:px-6 py-2.5 font-semibold text-black bg-[#FFE81F] rounded-lg hover:bg-[#fff176] hover:scale-105 transition-all duration-200 shadow-lg shadow-[#FFE81F]/20"
					>
						Playground
					</Link>
					<Link
						href="/about"
						className="px-5 sm:px-6 py-2.5 font-semibold text-[#FFE81F] bg-transparent border-2 border-[#FFE81F]/50 rounded-lg hover:border-[#FFE81F] hover:bg-[#FFE81F]/10 transition-all duration-200"
					>
						About
					</Link>
					<Link
						href="/documentation"
						className="px-5 sm:px-6 py-2.5 font-semibold text-[#FFE81F] bg-transparent border-2 border-[#FFE81F]/50 rounded-lg hover:border-[#FFE81F] hover:bg-[#FFE81F]/10 transition-all duration-200"
					>
						Documentation
					</Link>
				</div>

				<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFE81F]/10 border border-[#FFE81F]/20">
					<span className="text-sm sm:text-base font-medium text-white/80">
						Over <span className="text-[#FFE81F] font-bold">1,000,000+</span>{" "}
						API requests served daily
					</span>
				</div>

				<div className="w-full max-w-(--breakpoint-lg) px-2">
					<ApiEndpointElement hideLabel text={"https://swapi.info/api/"} />
				</div>
				<div className="w-full max-w-(--breakpoint-lg) px-2 mt-6 text-center">
					<h4 className="text-lg font-medium text-white md:text-xl">
						Why Choose SWAPI Reborn?
					</h4>
					<div className="overflow-x-hidden whitespace-nowrap">
						<ul className="inline-block mt-2 space-x-4 text-sm text-gray-300 list-none md:text-md marquee">
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
