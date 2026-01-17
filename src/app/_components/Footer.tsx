import Link from "next/link"
import SpriteIcon, { Icons } from "@/components/SpriteIcon"

const footerLinks = [
	{ href: "/", name: "Home" },
	{ href: "/documentation", name: "Documentation" },
	{ href: "/playground", name: "Playground" },
	{ href: "/about", name: "About" },
]

const categoryLinks = [
	{ href: "/films", name: "Films" },
	{ href: "/people", name: "People" },
	{ href: "/planets", name: "Planets" },
	{ href: "/species", name: "Species" },
	{ href: "/starships", name: "Starships" },
	{ href: "/vehicles", name: "Vehicles" },
]

export default function Footer() {
	return (
		<div className="w-full pt-8 pb-4 border-t">
			<footer className="container flex flex-col items-center justify-around w-full gap-6 px-4 mx-auto h-fit">
				{/* Internal Links */}
				<div className="flex flex-wrap items-center justify-center gap-4 w-full">
					{footerLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-sm font-medium text-white/70 hover:text-[#FFE81F] transition-colors"
						>
							{link.name}
						</Link>
					))}
					<span className="hidden sm:block w-px h-4 bg-white/20" />
					{categoryLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-sm font-medium text-white/50 hover:text-[#FFE81F] transition-colors"
						>
							{link.name}
						</Link>
					))}
				</div>

				<div className="flex flex-wrap items-center justify-between w-full gap-4 md:gap-8">
					<div>
						<p className="inline-flex items-center gap-1 font-medium whitespace-nowrap">
							Made with
							<SpriteIcon
								id={Icons.heart}
								width={20}
								height={20}
								className="invert-0!"
							/>
							by
							<a
								href="https://github.com/SivaramPg"
								className="font-bold underline underline-offset-4"
							>
								Sivaram P
							</a>
							<span className="hidden ml-2 font-bold md:block">
								&copy;{new Date().getFullYear()}
							</span>
						</p>
					</div>

					<SocialLinks />
				</div>

				<div className="flex flex-wrap items-center justify-between w-full gap-8">
					<p className="inline-flex items-center gap-2 text-sm sm:text-base font-medium whitespace-nowrap">
						Credits:{" "}
						<a
							className="underline underline-offset-4"
							href="https://github.com/phalt"
							target="_blank"
							rel="noopener noreferrer"
						>
							Paul Hallett
						</a>
						&
						<a
							className="underline underline-offset-4"
							href="https://github.com/Juriy"
							target="_blank"
							rel="noopener noreferrer"
						>
							Juriy Bura
						</a>
					</p>
				</div>
			</footer>
		</div>
	)
}

function SocialLink({ href, icon }: { href: string; icon: Icons }) {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer">
			<div className="flex items-center justify-center gap-1 opacity-80 hover:opacity-100 hover:drop-shadow-md">
				<SpriteIcon id={icon} width={28} height={28} />
			</div>
		</a>
	)
}

const socialLinks = [
	{ href: "https://sivaramp.com", icon: Icons.website },
	{
		href: "https://github.com/SivaramPg",
		icon: Icons.github,
	},
]

function SocialLinks() {
	return (
		<div className="flex items-center justify-center gap-4">
			{socialLinks.map((link) => (
				<SocialLink key={link.href} href={link.href} icon={link.icon} />
			))}
		</div>
	)
}
