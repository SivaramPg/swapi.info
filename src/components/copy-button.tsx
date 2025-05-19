"use client"

import { cn } from "@/utils/cn"
import { useClipboard } from "use-clipboard-copy"

type CopyButtonProps = {
	className?: string
	text: string
}

export function CopyButton({ className, text }: CopyButtonProps) {
	const { copy, copied } = useClipboard({ copiedTimeout: 1000 })
	return (
		<button
			type="button"
			className={cn("bg-[#FFE81F] text-black px-4 py-1 rounded-lg", className)}
			onClick={() => copy(text)}
		>
			{copied ? "Copied!" : "Copy"}
		</button>
	)
}
