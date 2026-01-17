import Link from "next/link"
import SpriteIcon, { Icons } from "@/components/SpriteIcon"
import { SwapiLogo } from "./swapi-logo"

const categoryLinks = [
	{ href: "/films", name: "Films" },
	{ href: "/people", name: "People" },
	{ href: "/planets", name: "Planets" },
	{ href: "/species", name: "Species" },
	{ href: "/vehicles", name: "Vehicles" },
	{ href: "/starships", name: "Starships" },
]

const siteLinks = [
	{ href: "/documentation", name: "Docs" },
	{ href: "/playground", name: "Playground" },
	{ href: "/about", name: "About" },
]

export default function NewNavbar() {
	return (
		<header className="sticky top-0 left-0 right-0 z-50 w-full h-16 bg-[#FFE81F11] border-b shadow-md  backdrop-blur">
			<nav className="flex items-center justify-between h-full gap-4 px-4 mx-auto">
				<Link href="/" className="inline-flex items-center gap-2">
					<SwapiLogo className="w-10 h-10" />
					<div className="text-2xl font-black md:text-3xl text-[#FFE81F] lowercase">
						swapi
					</div>
				</Link>
				<div className="items-center justify-center hidden gap-1 sm:flex">
					{categoryLinks.map((link) => (
						<Link
							key={link.href}
							prefetch={true}
							href={link.href}
							className="inline-flex gap-1 items-center font-medium px-2 py-2 hover:bg-[#FFE81F25] rounded-md duration-100"
						>
							{link.name}
						</Link>
					))}

					<span className="w-px h-6 bg-white/20 mx-1" />

					{siteLinks.map((link) => (
						<Link
							key={link.href}
							prefetch={true}
							href={link.href}
							className="inline-flex gap-1 items-center font-medium px-2 py-2 hover:bg-[#FFE81F25] rounded-md duration-100 text-white/70 hover:text-white"
						>
							{link.name}
						</Link>
					))}

					<a href="https://github.com/SivaramPg/swapi.info" className="ml-2">
						<SpriteIcon id={Icons.github} width={32} height={32} />
					</a>
				</div>
			</nav>
		</header>
	)
}
