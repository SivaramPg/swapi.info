/**
 * Fine-grained Shiki highlighter with singleton pattern.
 * Only loads the languages and theme we actually use for optimal bundle size.
 */
import type { HighlighterCore } from "shiki/core"
import { createHighlighterCore } from "shiki/core"
import { createJavaScriptRegexEngine } from "shiki/engine/javascript"

/**
 * Languages used in the application for code highlighting.
 * These are dynamically imported for tree-shaking.
 */
const LANGUAGES = [
	import("shiki/langs/bash.mjs"),
	import("shiki/langs/javascript.mjs"),
	import("shiki/langs/python.mjs"),
	import("shiki/langs/java.mjs"),
	import("shiki/langs/csharp.mjs"),
	import("shiki/langs/php.mjs"),
	import("shiki/langs/ruby.mjs"),
	import("shiki/langs/go.mjs"),
	import("shiki/langs/swift.mjs"),
	import("shiki/langs/kotlin.mjs"),
	import("shiki/langs/dart.mjs"),
	import("shiki/langs/rust.mjs"),
	import("shiki/langs/json.mjs"),
]

/**
 * Theme used throughout the application.
 */
const THEME = import("shiki/themes/solarized-dark.mjs")

/**
 * Singleton highlighter instance promise.
 * Creating a highlighter is expensive, so we cache it.
 */
let highlighterPromise: Promise<HighlighterCore> | null = null

/**
 * Gets or creates the singleton highlighter instance.
 * Uses the JavaScript RegExp engine for smaller bundle size (no WASM).
 * @returns Promise resolving to the highlighter instance
 */
export async function getHighlighter(): Promise<HighlighterCore> {
	if (!highlighterPromise) {
		highlighterPromise = createHighlighterCore({
			themes: [THEME],
			langs: LANGUAGES,
			engine: createJavaScriptRegexEngine(),
		})
	}
	return highlighterPromise
}

/**
 * Highlights code and returns HTML string.
 * @param code - The code to highlight
 * @param lang - The language identifier (e.g., 'javascript', 'python')
 * @returns Promise resolving to highlighted HTML string
 */
export async function highlightCode(
	code: string,
	lang: string,
): Promise<string> {
	const highlighter = await getHighlighter()
	return highlighter.codeToHtml(code, {
		lang,
		theme: "solarized-dark",
	})
}

/**
 * Disposes the highlighter instance to free resources.
 * Call this when the highlighter is no longer needed.
 */
export function disposeHighlighter(): void {
	if (highlighterPromise) {
		highlighterPromise.then((h) => h.dispose())
		highlighterPromise = null
	}
}
