import type { JSX } from "react"
import { codeToHtml } from "shiki"
import { CopyButton } from "./copy-button"

interface RequestDisplayElementProps {
	slug: string
	wrapText?: boolean
}

const RequestDisplayElement = async ({
	slug,
	wrapText = false,
}: RequestDisplayElementProps): Promise<JSX.Element> => {
	const request = getRequest(slug)

	const code = await codeToHtml(request, {
		lang: "typescript",
		theme: "solarized-dark",
	})

	return (
		<div className="request-display-element w-full max-w-(--breakpoint-lg) not-prose bg-gray-800 rounded-lg shadow-md overflow-hidden my-4 relative">
			<div className="bg-gray-700 px-4 py-2 rounded-t-lg">
				<h3 className="text-lg font-semibold text-yellow-400">Request:</h3>
			</div>
			<div
				className={`border-x border-b border-[#333] overflow-x-auto rounded-b-lg rounded-t-none [&>pre]:rounded-none [&>pre]:border-0 ${wrapText ? "![&>pre]:text-nowrap overflow-y-auto" : "![&>pre]:text-wrap overflow-y-hidden"}`}
				style={{
					fontSize: 16,
				}}
				/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */
				dangerouslySetInnerHTML={{ __html: code }}
			/>
			<div className="absolute top-1.5 right-1.5">
				<CopyButton text={request} />
			</div>
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
