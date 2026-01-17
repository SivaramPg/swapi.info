"use client" // Required for hooks

import type { JSX } from "react"
import { useEffect, useMemo, useState } from "react"
import { highlightCode } from "../lib/highlighter"
import { defaultLanguageId, languageOptions } from "../lib/language-snippets"
import { CopyButton } from "./copy-button"

interface RequestDisplayElementProps {
	slug: string
}

/**
 * Represents a language option after its code snippet has been generated.
 */
interface ProcessedLanguageOption {
	/** Unique identifier for the language (e.g., 'bash', 'python'). */
	id: string
	/** User-friendly name for display in UI tabs (e.g., 'cURL', 'Python'). */
	name: string
	/** The pre-generated code snippet as a string. */
	code: string
}

const RequestDisplayElement = ({
	slug,
}: RequestDisplayElementProps): JSX.Element => {
	const [selectedLangId, setSelectedLangId] =
		useState<string>(defaultLanguageId)
	const [highlightedCodeHtml, setHighlightedCodeHtml] = useState<string>("")

	// Pre-generate all code snippets when slug changes
	const processedOptions = useMemo((): ProcessedLanguageOption[] => {
		return languageOptions.map((option) => ({
			id: option.id,
			name: option.name,
			code: option.generateCode(slug), // Generate code here
		}))
	}, [slug])

	// Get the currently selected snippet details
	const currentSnippet = useMemo((): ProcessedLanguageOption | undefined => {
		return processedOptions.find((opt) => opt.id === selectedLangId)
	}, [selectedLangId, processedOptions])

	// Effect to update highlighted HTML when the current snippet changes
	useEffect(() => {
		if (currentSnippet) {
			highlightCode(currentSnippet.code, currentSnippet.id)
				.then((html) => setHighlightedCodeHtml(html))
				.catch((error) => {
					console.error("Error highlighting code:", error)
					// Fallback to plain text if shiki fails
					const escapedCode = currentSnippet.code
						.replace(/</g, "&lt;")
						.replace(/>/g, "&gt;")
					setHighlightedCodeHtml(
						`<pre class="shiki solarized-dark" style="background-color: #002b36; color: #839496"><code>${escapedCode}</code></pre>`,
					)
				})
		} else {
			setHighlightedCodeHtml("") // Clear if no snippet
		}
	}, [currentSnippet])

	// Handler for tab clicks
	const handleTabClick = (langId: string): void => {
		setSelectedLangId(langId)
	}

	// // Calculate dynamic top offset for the copy button based on tab visibility
	// const copyButtonTopOffset = useMemo(() => {
	// 	// Estimate tab bar height: 1rem (py-2) * 2 + 1rem (text-sm line height) + borders/padding ~2.75rem or 44px
	// 	// Add a small margin from the top of the code block area
	// 	const tabBarHeightApproximation = "3.25rem" // approx 52px, adjust as needed
	// 	return processedOptions.length > 0 ? tabBarHeightApproximation : "0.375rem" // 0.375rem is 6px (top-1.5)
	// }, [processedOptions.length])

	return (
		<div className="request-display-element w-full max-w-(--breakpoint-lg) not-prose rounded-lg shadow-md overflow-hidden my-4 relative border border-[#FFE81F11]">
			{/* Tab Navigation - only render if there are options */}
			{processedOptions.length > 0 && (
				<div
					className="bg-[#FFE81F11] px-1 pt-1 flex flex-nowrap border-b border-[#FFE81F11] rounded-t-lg overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800"
					role="tablist"
				>
					{processedOptions.map((option) => (
						<button
							key={option.id}
							type="button"
							role="tab"
							aria-selected={selectedLangId === option.id}
							aria-controls={`panel-${option.id}`}
							id={`tab-${option.id}`}
							onClick={() => handleTabClick(option.id)}
							className={`px-3 py-2 text-xs sm:text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-1 focus-visible:ring-offset-[#070a0e] transition-colors duration-150 whitespace-nowrap mr-1 last:mr-0 rounded-t-md
							${
								selectedLangId === option.id
									? "bg-[#FFE81F22] text-yellow-400 border-b-2 border-yellow-400"
									: "text-gray-400 hover:text-yellow-300 hover:bg-[#FFE81F11]"
							}`}
						>
							{option.name}
						</button>
					))}
				</div>
			)}
			<div className="relative">
				{/* Code Display Area */}
				<div
					role="tabpanel"
					id={`panel-${currentSnippet?.id}`}
					aria-labelledby={`tab-${currentSnippet?.id}`}
					className={`border-x border-b border-[#FFE81F11] overflow-auto rounded-b-lg ${processedOptions.length > 0 ? "rounded-t-none" : "rounded-t-lg"} [&>pre]:rounded-none [&>pre]:border-0`}
					style={{ fontSize: 15 }} // Minor functional change: adjusted fontSize from 14 to 15
					/* biome-ignore lint/security/noDangerouslySetInnerHtml: <Shiki output is sanitized HTML> */
					dangerouslySetInnerHTML={{ __html: highlightedCodeHtml }}
				/>

				{/* Copy Button */}
				<div className="absolute right-1.5 z-10 top-1.5">
					{currentSnippet && <CopyButton text={currentSnippet.code} />}
				</div>
			</div>
		</div>
	)
}

export default RequestDisplayElement
