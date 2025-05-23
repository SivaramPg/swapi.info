import { cn } from "@/utils/cn"

type AllSystemsNormalProps = {
	className?: string
}

export function AllSystemsNormal({ className }: AllSystemsNormalProps) {
	return (
		<a
			href="https://status.swapi.info"
			target="_blank"
			rel="noopener noreferrer"
			className={cn(
				"border rounded-md border-white px-3 py-2 inline-flex items-center justify-center gap-2 text-xs font-medium dark:bg-[#FFE81F25] hover:border-[#FFE81F] backdrop-blur-3xl",
				"group",
				"min-h-10",
				className,
			)}
		>
			<span className="relative flex h-3 w-3">
				<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFE81F] opacity-75" />
				<span className="relative inline-flex rounded-full h-3 w-3 bg-[#FFE81F]" />
			</span>
			<span className="w-0 hidden group-hover:block overflow-hidden group-hover:w-fit group-hover:overflow-visible transition-all duration-100">
				All Systems Normal
			</span>
			<span className="block group-hover:hidden">Good</span>
		</a>
	)
}
