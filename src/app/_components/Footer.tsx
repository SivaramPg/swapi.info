import SpriteIcon, { Icons } from "@/components/SpriteIcon"

export default function Footer() {
	return (
		<div className="w-full pt-8 pb-4 border-t">
			<footer className="container flex flex-col items-center justify-around w-full gap-4 px-4 mx-auto h-fit">
				<div className="flex flex-wrap items-center justify-between w-full gap-4 md:gap-8">
					<div>
						<p className="inline-flex items-center gap-1 font-medium whitespace-nowrap">
							Made with
							<SpriteIcon
								id={Icons.heart}
								width={20}
								height={20}
								className="!invert-0"
							/>
							by
							<a
								href="https://github.com/SivaramPg"
								className="font-bold underline underline-offset-4"
							>
								Sivaram P
							</a>
							<span className="hidden ml-2 font-mono font-bold md:block">
								&copy;2024
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
	{
		href: "https://sivarampg.medium.com/",
		icon: Icons.medium,
	},
	{
		href: "https://www.linkedin.com/in/sivaram-pandariganthan-b753a2145",
		icon: Icons.linkedin,
	},
	{
		href: "https://codepen.io/kaizoku_95",
		icon: Icons.codepen,
	},
]

function SocialLinks() {
	return (
		<div className="flex items-center justify-center gap-4">
			<p className="font-medium">My Socials:</p>
			{socialLinks.map((link) => (
				<SocialLink key={link.href} href={link.href} icon={link.icon} />
			))}
		</div>
	)
}
