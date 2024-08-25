"use client"

import { cn } from "@/utils/cn"
import Link from "next/link"
import { useState } from "react"
import SpriteIcon, { Icons } from "./SpriteIcon"

interface QuickLinksProps {
	className?: string
}

const QuickLinks = ({ className }: QuickLinksProps): JSX.Element => {
	const [show, setShow] = useState(false)

	return (
		<div
			className={cn(
				"fixed z-50 bottom-[50px] right-[30px] rounded-3xl flex flex-col items-center justify-between gap-4 w-auto mx-auto sm:hidden p-3 flex-grow",
				"bg-gradient-to-t from-cyan-500 to-blue-500",
				"shadow-lg shadow-gray-500",
				className,
			)}
		>
			{show && (
				<>
					<Link
						href="/explorer/films"
						className="flex items-center justify-center flex-grow"
					>
						<SpriteIcon
							id={Icons.film}
							width={28}
							height={28}
							className="invert drop-shadow-md"
						/>
					</Link>
					<Link
						href="/explorer/people"
						className="flex items-center justify-center flex-grow"
					>
						<SpriteIcon
							id={Icons.people}
							width={28}
							height={28}
							className="invert drop-shadow-md"
						/>
					</Link>
					<Link
						href="/explorer/planets"
						className="flex items-center justify-center flex-grow"
					>
						<SpriteIcon
							id={Icons.planet}
							width={28}
							height={28}
							className="invert drop-shadow-md"
						/>
					</Link>
					<Link
						href="/explorer/species"
						className="flex items-center justify-center flex-grow"
					>
						<SpriteIcon
							id={Icons.species}
							width={28}
							height={28}
							className="invert drop-shadow-md"
						/>
					</Link>
					<Link
						href="/explorer/starships"
						className="flex items-center justify-center flex-grow"
					>
						<SpriteIcon
							id={Icons.starship}
							width={28}
							height={28}
							className="invert drop-shadow-md"
						/>
					</Link>
					<Link
						href="/explorer/vehicles"
						className="flex items-center justify-center flex-grow"
					>
						<SpriteIcon
							id={Icons.vehicle}
							width={28}
							height={28}
							className="block invert drop-shadow-md"
						/>
					</Link>
				</>
			)}
			{show ? (
				<SpriteIcon
					id={Icons["eye-close"]}
					width={28}
					height={28}
					className="invert drop-shadow-md"
					onClick={() => setShow((prevState) => !prevState)}
				/>
			) : (
				<SpriteIcon
					id={Icons["eye-open"]}
					width={28}
					height={28}
					className="invert drop-shadow-md"
					onClick={() => setShow((prevState) => !prevState)}
				/>
			)}
		</div>
	)
}

export default QuickLinks
