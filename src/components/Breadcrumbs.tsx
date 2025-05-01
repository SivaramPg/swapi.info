import { cn } from "@/utils/cn"
import Link from "next/link"
import { Fragment, type JSX } from "react"
import SpriteIcon, { Icons } from "./SpriteIcon"

interface BreadcrumbsProps {
	className?: string
	pathElements: string[]
}

const Breadcrumbs = ({
	className,
	pathElements,
}: BreadcrumbsProps): JSX.Element => {
	return (
		<div className="w-full max-w-screen-lg">
			<div
				className={cn(
					"flex gap-4 w-fit bg-black dark:bg-white bg-opacity-20 dark:bg-opacity-20 px-4 py-2 rounded-lg",
					className,
				)}
			>
				<Link href="/" prefetch={false}>
					<SpriteIcon id={Icons.home} width={24} height={24} />
				</Link>
				{!!pathElements.length && (
					<SpriteIcon id={Icons["caret-right"]} width={24} height={24} />
				)}
				{pathElements.map((e, i) => (
					<Fragment key={e}>
						{i < pathElements.length - 1 ? (
							<Link
								prefetch={false}
								href={`/${pathElements.slice(0, i + 1).join("/")}`}
								className="text-xl font-bold capitalize hover:text-[#FFE81F] hover:underline hover:underline-offset-4"
							>
								{e}
							</Link>
						) : (
							<p className="text-xl font-bold text-[#FFE81F] underline capitalize underline-offset-4">
								{e}
							</p>
						)}
						{i < pathElements.length - 1 && (
							<SpriteIcon id={Icons["caret-right"]} width={24} height={24} />
						)}
					</Fragment>
				))}
			</div>
		</div>
	)
}

export default Breadcrumbs
