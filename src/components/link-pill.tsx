import { cn } from "@/utils/cn"
import Link from "next/link"
import SpriteIcon, { Icons } from "./SpriteIcon"

type LinkPillProps = {
	className?: string
	text: string
	href: string
}

export function LinkPill({ className, text, href }: LinkPillProps) {
	return (
		<Link
			href={href}
			className={cn(
				"w-1/4 bg-black border hover:border-[#FFE81F] duration-100 rounded-lg shadow-sm grow dark:bg-white dark:bg-opacity-10",
				className,
			)}
		>
			<div className="flex items-center justify-between w-full gap-1 p-2 h-fit sm:p-4 md:gap-2">
				<h2 className="font-bold capitalize text-md md:text-lg">{text}</h2>
				<SpriteIcon
					id={Icons["caret-right"]}
					width={24}
					height={24}
					className="hidden sm:block"
				/>
			</div>
		</Link>
	)
}
