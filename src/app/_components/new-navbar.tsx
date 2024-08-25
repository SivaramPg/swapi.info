import SpriteIcon, { Icons } from "@/components/SpriteIcon"
import Link from "next/link"
import { SwapiLogo } from "./swapi-logo"

export default function NewNavbar() {
	return (
		<header className="sticky top-0 left-0 right-0 z-50 w-full h-16 font-sans bg-[#FFE81F] border-b shadow-md bg-opacity-5 backdrop-blur">
			<nav className="container flex items-center justify-between h-full gap-4 px-4 mx-auto">
				<Link href="/" className="inline-flex items-center gap-2">
					<SwapiLogo className="w-10 h-10" />
					<div className="text-2xl font-black md:text-3xl text-[#FFE81F] dark:text=[#ffe81f] lowercase">
						swapi.info
					</div>
				</Link>
				<div className="items-center justify-center hidden gap-2 sm:flex">
					<a href="https://github.com/SivaramPg/swapi.info" className="mr-4">
						<SpriteIcon id={Icons.github} width={32} height={32} />
					</a>

					{/* <div className="border-r-4 border-white h-8" />

					<Link
						href="/about"
						className="inline-flex gap-1 items-center font-medium px-2 py-2 dark:hover:bg-[#FFE81F] dark:hover:bg-opacity-10 rounded-md duration-100"
					>
						<Image
							src="/icons/about.svg"
							alt="about"
							width={24}
							height={24}
							priority
							className="dark:invert"
						/>
						About
					</Link>

					<Link
						href="/docs"
						className="inline-flex gap-1 items-center font-medium px-2 py-2 dark:hover:bg-[#FFE81F] dark:hover:bg-opacity-10 rounded-md duration-100"
					>
						<Image
							src="/icons/documentation.svg"
							alt="documentation"
							width={24}
							height={24}
							priority
							className="dark:invert"
						/>
						Documentation
					</Link>

					<Link
						href="/explorer"
						className="inline-flex gap-1 items-center font-medium px-2 py-2 dark:hover:bg-[#FFE81F] dark:hover:bg-opacity-10 rounded-md duration-100"
					>
						<Image
							src="/icons/explorer.svg"
							alt="explorer"
							width={24}
							height={24}
							priority
							className="dark:invert"
						/>
						Explorer
					</Link>

					<Link
						href="/playground"
						className="inline-flex gap-1 items-center font-medium px-2 py-2 dark:hover:bg-[#FFE81F] dark:hover:bg-opacity-10 rounded-md duration-100"
					>
						<Image
							src="/icons/playground.svg"
							alt="playground"
							width={24}
							height={24}
							priority
							className="dark:invert"
						/>
						Playground
					</Link> */}
				</div>
			</nav>
		</header>
	)
}

const CustomNavLink = ({
	href,
	icon,
	linkText,
}: {
	href: string
	icon: Icons
	linkText: string
}) => {
	return (
		<Link
			href={href}
			className="px-3 py-1 opacity-80 hover:opacity-100 hover:drop-shadow-md"
		>
			<div className="flex items-center justify-center gap-1">
				<SpriteIcon
					id={icon}
					width={20}
					height={20}
					className="block md:hidden lg:block"
				/>
				<p className="hidden font-bold md:block">{linkText}</p>
			</div>
		</Link>
	)
}
