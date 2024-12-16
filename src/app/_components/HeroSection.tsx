import ApiEndpointElement from "@/components/ApiEndpointElement"
import { cn } from "@/utils/cn"
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
			<div className="flex flex-col items-center justify-center w-full max-w-screen-md gap-4 py-10 md:py-20 mx-auto">
				<h1 className="font-semibold text-center text-3xl lg:text-5xl text-[#FFE81F]">
					SWAPI Reborn!
				</h1>
				<h2 className="-mt-2 mb-4 text-lg font-medium text-center md:text-xl lg:text-2xl text-[#FFE81Fbb]">
					Star Wars APIs & Explorer
				</h2>
				<h3 className="max-w-screen-sm mx-5 mt-2 mb-6 text-center text-md sm:text-xl md:text-xl">
					<span className="opacity-80">
						All the Star Wars data you&lsquo;ve ever wanted!
					</span>
					<br />
					<span className="font-semibold opacity-80">
						Planets, Spaceships, Vehicles, People, Films & Species
					</span>
				</h3>

				<h4 className="text-lg md:text-xl font-medium text-center text-white">
					🎉🎉 Over <span className="text-[#FFE81F]">30,000+</span> API Requests
					served daily! 🎉🎉
				</h4>
				<div className="w-full max-w-screen-lg px-2">
					<ApiEndpointElement hideLabel text={"https://swapi.info/api/"} />
				</div>
			</div>
		</section>
	)
}

export default HeroSection
