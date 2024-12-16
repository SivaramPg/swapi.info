import { cn } from "@/utils/cn"
import type { JSX } from "react"
import { codeToHtml } from "shiki/bundle-web.mjs"

interface ResponseDisplayElementProps {
	className?: string
	children: string
}

const ResponseDisplayElement = async ({
	className,
	children,
}: ResponseDisplayElementProps): Promise<JSX.Element> => {
	const code = await codeToHtml(children, {
		lang: "json",
		theme: "solarized-dark",
	})

	return (
		<div className={cn("flex flex-col w-full max-w-screen-lg", className)}>
			<h4 className="mb-2 text-lg font-bold md:text-xl lg:text-2xl opacity-70">
				Result:
			</h4>
			<div
				className="rounded-xl border border-[#333] overflow-auto max-h-[100vh]"
				/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */
				dangerouslySetInnerHTML={{ __html: code }}
			/>
		</div>
	)
}

export default ResponseDisplayElement
