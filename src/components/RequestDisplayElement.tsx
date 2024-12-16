import { cn } from "@/utils/cn"
import type { JSX } from "react"
import { codeToHtml } from "shiki"

interface RequestDisplayElementProps {
	className?: string
	slug: string
}

const RequestDisplayElement = async ({
	className,
	slug,
}: RequestDisplayElementProps): Promise<JSX.Element> => {
	const code = await codeToHtml(getRequest(slug), {
		lang: "typescript",
		theme: "solarized-dark",
	})

	return (
		<div className={cn("flex flex-col w-full max-w-screen-lg", className)}>
			<h4 className="mb-2 text-lg font-bold md:text-xl lg:text-2xl opacity-70">
				Request:
			</h4>
			<div
				className="rounded-xl border border-[#333] overflow-x-auto text-xs"
				/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */
				dangerouslySetInnerHTML={{ __html: code }}
			/>
		</div>
	)
}

export default RequestDisplayElement

function getRequest(slug: string) {
	return `fetch("https://swapi.info/api${slug}")
  .then((res) => res.json()) // Parse the JSON content from the API to be consumed
  .then((json) => console.log(json)) // Log the JSON response to your console
  .catch((error) => console.error(error)) // Log the API error (if any) to your console`
}
