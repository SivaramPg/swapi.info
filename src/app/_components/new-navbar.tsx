import SpriteIcon, { Icons } from "@/components/SpriteIcon"
import Link from "next/link"
import { SwapiLogo } from "./swapi-logo"

const links = [
	{
		href: "/films",
		name: "Films",
	},
	{
		href: "/people",
		name: "People",
	},
	{
		href: "/planets",
		name: "Planets",
	},
	{
		href: "/species",
		name: "Species",
	},
	{
		href: "/vehicles",
		name: "Vehicles",
	},
	{
		href: "/starships",
		name: "Starships",
	},
]

export default function NewNavbar() {
	return (
		<header className="sticky top-0 left-0 right-0 z-50 w-full h-16 bg-[#FFE81F11] border-b shadow-md  backdrop-blur">
			<nav className="flex items-center justify-between h-full gap-4 px-4 mx-auto">
				<Link href="/" className="inline-flex items-center gap-2">
					<SwapiLogo className="w-10 h-10" />
					<div className="text-2xl font-black md:text-3xl text-[#FFE81F] dark:text=[#ffe81f] lowercase">
						swapi
					</div>
				</Link>
				<div className="items-center justify-center hidden gap-2 sm:flex">
					{links.map((link) => (
						<Link
							key={link.href}
							prefetch={true}
							href={link.href}
							className="inline-flex gap-1 items-center font-medium px-2 py-2 dark:hover:bg-[#FFE81F25] rounded-md duration-100"
						>
							{link.name}
						</Link>
					))}

					<a href="https://github.com/SivaramPg/swapi.info" className="mr-4">
						<SpriteIcon id={Icons.github} width={32} height={32} />
					</a>
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
			prefetch={false}
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
