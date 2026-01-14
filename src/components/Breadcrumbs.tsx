import Link from "next/link"
import { Fragment, type JSX } from "react"
import { cn } from "@/utils/cn"
import SpriteIcon, { Icons } from "./SpriteIcon"

/** Path element can be a simple string or an object with label and href */
type PathElement = string | { label: string; href: string }

interface BreadcrumbsProps {
	className?: string
	pathElements: PathElement[]
}

/**
 * Gets the display label for a path element
 */
function getLabel(element: PathElement): string {
	return typeof element === "string" ? element : element.label
}

/**
 * Gets the href for a path element at a given index
 */
function getHref(elements: PathElement[], index: number): string {
	const element = elements[index]
	if (typeof element === "object") {
		return element.href
	}
	// For string elements, build the path from all previous elements
	const pathParts = elements.slice(0, index + 1).map((e) => getLabel(e))
	return `/${pathParts.join("/")}`
}

const Breadcrumbs = ({
	className,
	pathElements,
}: BreadcrumbsProps): JSX.Element => {
	return (
		<div className="w-full max-w-(--breakpoint-lg)">
			<div
				className={cn(
					"flex gap-4 w-fit bg-white/20 px-4 py-2 rounded-lg",
					className,
				)}
			>
				<Link href="/" prefetch={false}>
					<SpriteIcon id={Icons.home} width={24} height={24} />
				</Link>
				{!!pathElements.length && (
					<SpriteIcon id={Icons["caret-right"]} width={24} height={24} />
				)}
				{pathElements.map((element, i) => {
					const label = getLabel(element)
					const key = typeof element === "string" ? element : element.href
					return (
						<Fragment key={key}>
							{i < pathElements.length - 1 ? (
								<Link
									prefetch={false}
									href={getHref(pathElements, i)}
									className="text-xl font-bold capitalize hover:text-[#FFE81F] hover:underline hover:underline-offset-4"
								>
									{label}
								</Link>
							) : (
								<p className="text-xl font-bold text-[#FFE81F] underline capitalize underline-offset-4">
									{label}
								</p>
							)}
							{i < pathElements.length - 1 && (
								<SpriteIcon id={Icons["caret-right"]} width={24} height={24} />
							)}
						</Fragment>
					)
				})}
			</div>
		</div>
	)
}

export default Breadcrumbs
