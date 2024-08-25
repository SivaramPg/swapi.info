import SpriteIcon, { Icons } from "@/components/SpriteIcon"
import Link from "next/link"
import { SwapiLogo } from "./swapi-logo"

export default function Navbar() {
	return (
		<header className="sticky top-0 left-0 right-0 z-50 w-full h-16 font-sans bg-white border-b shadow-md bg-opacity-5 backdrop-blur">
			<nav className="container flex items-center justify-between h-full gap-4 px-4 mx-auto">
				<Link href="/" className="inline-flex items-center gap-2">
					<SwapiLogo className="w-10 h-10" />
					<div className="text-2xl font-black md:text-3xl text-[#FFE81F] dark:text=[#ffe81f] lowercase">
						SWAPI.INFO
					</div>
				</Link>
				<div className="items-center justify-center hidden gap-2 md:gap-4 sm:flex">
					<CustomNavLink href="/films" icon={Icons.film} linkText="Films" />
					<CustomNavLink href="/people" icon={Icons.people} linkText="People" />
					<CustomNavLink
						href="/planets"
						icon={Icons.planet}
						linkText="Planets"
					/>
					<CustomNavLink
						href="/species"
						icon={Icons.species}
						linkText="Species"
					/>
					<CustomNavLink
						href="/starships"
						icon={Icons.starship}
						linkText="Starships"
					/>
					<CustomNavLink
						href="/vehicles"
						icon={Icons.vehicle}
						linkText="Vehicles"
					/>
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
