"use client"

import { cn } from "@/utils/cn"
import type { JSX } from "react"
import { useClipboard } from "use-clipboard-copy"
import SpriteIcon, { Icons } from "./SpriteIcon"

interface ApiEndpointElementProps {
	className?: string
	text: string
	hideLabel?: boolean
}

export default function ApiEndpointElement({
	className,
	text,
	hideLabel = false,
}: ApiEndpointElementProps): JSX.Element {
	const { copied, copy } = useClipboard({ copiedTimeout: 1_000 })

	return (
		<div className="flex flex-col w-full max-w-(--breakpoint-lg) gap-2">
			{!hideLabel && (
				<h4 className="text-lg font-bold md:text-xl lg:text-2xl opacity-70">
					API Endpoint:
				</h4>
			)}
			<div
				className={cn(
					"w-full h-14 flex overflow-hidden border-[#FFE81F] rounded-md border-2",
					className,
				)}
			>
				<input
					type="text"
					className="w-full px-4 text-lg font-bold text-black border border-r-0 bg-gray-50"
					value={text.replace("https://", "")}
					readOnly
				/>
				<a
					href={text}
					target="_blank"
					rel="noopener noreferrer"
					className={cn(
						"w-20 flex items-center justify-center border border-l-0",
						"bg-slate-50",
					)}
				>
					<SpriteIcon
						id={Icons["tab-external"]}
						width={32}
						height={32}
						className="invert-0!"
					/>
				</a>
				<button
					type="button"
					className={cn(
						"w-32 text-black font-bold text-lg",
						copied ? "bg-green-600" : "bg-[#FFE81F]",
					)}
					onClick={() => {
						if (copied) return

						copy(text)
					}}
					disabled={copied}
				>
					{copied ? "Copied!" : "Copy"}
				</button>
			</div>
		</div>
	)
}
