"use client"

import { cn } from "@/utils/cn"
import type React from "react"
import { type FormEvent, useState } from "react"

/**
 * @returns {React.JSX.Element} The API playground page.
 */
export default function PlaygroundPage(): React.JSX.Element {
	const [apiUrl, setApiUrl] = useState<string>("https://swapi.info/api")
	const [apiResponse, setApiResponse] = useState<string | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | null>(null)

	const baseApiUrl = "https://swapi.info/api"
	const categories = [
		"films",
		"people",
		"planets",
		"species",
		"vehicles",
		"starships",
	]

	/**
	 * Handles the API request.
	 * @param {FormEvent<HTMLFormElement>} event - The form submission event.
	 * @returns {Promise<void>} A promise that resolves when the API request is complete.
	 */
	const handleSubmit = async (
		event: FormEvent<HTMLFormElement>,
	): Promise<void> => {
		event.preventDefault()
		setIsLoading(true)
		setApiResponse(null)
		setError(null)

		// Basic validation: ensure the URL starts with our base API URL.
		// baseApiUrl is 'https://swapi.info/api' (no trailing slash)
		if (!apiUrl.startsWith(baseApiUrl)) {
			setError(`Invalid API URL. Must start with "${baseApiUrl}".`)
			setIsLoading(false)
			return
		}
		// Further validation to prevent paths like /apifilms instead of /api/films
		if (
			apiUrl.length > baseApiUrl.length &&
			!apiUrl.startsWith(`${baseApiUrl}/`)
		) {
			setError(
				`Invalid API URL structure. Path should start with a '/' after the base URL (e.g., "${baseApiUrl}/films").`,
			)
			setIsLoading(false)
			return
		}

		let urlToFetch = apiUrl

		// If the URL is the base API URL but with a trailing slash (e.g., "https://swapi.info/api/"),
		// change it to the version without the trailing slash for the fetch.
		if (urlToFetch === `${baseApiUrl}/`) {
			urlToFetch = baseApiUrl
		}
		// For any other path that is longer than the base and ends with a slash,
		// remove the trailing slash.
		// e.g., "https://swapi.info/api/films/" becomes "https://swapi.info/api/films"
		// e.g., "https://swapi.info/api/films/1/" becomes "https://swapi.info/api/films/1"
		else if (
			urlToFetch.length > baseApiUrl.length &&
			urlToFetch.startsWith(`${baseApiUrl}/`) &&
			urlToFetch.endsWith("/")
		) {
			urlToFetch = urlToFetch.slice(0, -1)
		}

		try {
			const response = await fetch(urlToFetch) // Use the processed urlToFetch
			if (!response.ok) {
				throw new Error(
					`API request failed with status ${response.status} for ${urlToFetch}`,
				)
			}
			const data = await response.json()
			setApiResponse(JSON.stringify(data, null, 2))
		} catch (err) {
			setError(err instanceof Error ? err.message : "An unknown error occurred")
			setApiResponse(null)
		} finally {
			setIsLoading(false)
		}
	}

	/**
	 * Handles clicks on example links.
	 * @param {string} endpoint - The API endpoint to set.
	 * @returns {void}
	 */
	const handleHintClick = (endpoint: string): void => {
		if (baseApiUrl.endsWith("/")) {
			setApiUrl(
				`${baseApiUrl}${endpoint.startsWith("/") ? endpoint.substring(1) : endpoint}`,
			)
		} else {
			setApiUrl(
				`${baseApiUrl}/${endpoint.startsWith("/") ? endpoint.substring(1) : endpoint}`,
			)
		}
	}

	return (
		<div className="max-w-[var(--breakpoint-lg)] mx-auto px-4 py-20">
			<h1 className="mb-8 text-4xl font-bold text-center text-yellow-400">
				API Playground
			</h1>

			<p className="mb-2 text-center text-slate-300">
				Enter a SWAPI URL below or try one of the examples.
			</p>
			<div className="mb-6 text-sm text-center text-slate-400">
				Hint: try{" "}
				<button
					type="button"
					onClick={() => handleHintClick("people/1")}
					className="text-yellow-500 hover:underline"
				>
					people/1
				</button>
				,{" "}
				<button
					type="button"
					onClick={() => handleHintClick("planets/3")}
					className="text-yellow-500 hover:underline"
				>
					planets/3
				</button>
				, or{" "}
				<button
					type="button"
					onClick={() => handleHintClick("starships/9")}
					className="text-yellow-500 hover:underline"
				>
					starships/9
				</button>
				.
				<br />
				You can also explore categories like:{" "}
				{categories.map((cat, index) => (
					<span key={cat}>
						<button
							type="button"
							onClick={() => handleHintClick(`${cat}/`)}
							className="text-yellow-500 hover:underline"
						>
							{cat}
						</button>
						{index < categories.length - 1 && ", "}
					</span>
				))}
			</div>

			<form
				onSubmit={handleSubmit}
				className="flex flex-col items-center gap-4 mb-8 sm:flex-row"
			>
				<div className="flex items-center flex-grow border-2 rounded-md border-yellow-400 bg-[#FFE81F11] focus-within:ring-2 focus-within:ring-yellow-500">
					<span className="px-3 text-yellow-400 select-none bg-[#FFE81F22] h-full p-3">{`${baseApiUrl}/`}</span>
					<input
						type="text"
						value={
							apiUrl.startsWith(`${baseApiUrl}/`)
								? apiUrl.substring(baseApiUrl.length + 1)
								: apiUrl === baseApiUrl
									? ""
									: apiUrl.substring(baseApiUrl.length)
						}
						onChange={(e) => {
							const userInput = e.target.value
							if (userInput === "" || userInput === "/") {
								setApiUrl(baseApiUrl)
							} else if (userInput.startsWith("/")) {
								setApiUrl(`${baseApiUrl}${userInput}`)
							} else {
								setApiUrl(`${baseApiUrl}/${userInput}`)
							}
						}}
						placeholder="e.g., films/1/"
						className="w-full p-3 bg-transparent text-slate-200 focus:outline-none"
						aria-label="API Endpoint"
					/>
				</div>
				<button
					type="submit"
					disabled={isLoading}
					className="px-6 py-3 font-bold transition-colors duration-150 ease-in-out bg-yellow-400 rounded-md hover:bg-yellow-500 text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
				>
					{isLoading ? "Requesting..." : "Request"}
				</button>
			</form>

			{error && (
				<div
					className="px-4 py-3 mb-6 text-red-200 bg-red-900 border border-red-700 rounded-md"
					role="alert"
				>
					<strong className="font-bold">Error:</strong>
					<span className="block sm:inline"> {error}</span>
				</div>
			)}

			{!error && (
				<div>
					<h2 className="mb-4 text-2xl font-semibold text-slate-200">
						Result:
					</h2>
					<pre
						className={cn(
							"bg-[#FFE81F11] text-slate-200 border-2 border-yellow-400 p-6 rounded-md overflow-x-auto text-sm shadow-lg min-h-[400px] w-full",
							(isLoading || !apiResponse) &&
								"inline-flex items-center justify-center",
						)}
					>
						{isLoading ? (
							<div className="flex items-center justify-center h-full text-slate-400">
								Requesting...
							</div>
						) : apiResponse ? (
							apiResponse
						) : (
							<div className="flex flex-col items-center justify-center h-full text-slate-400">
								<p>Make a request to see the API response here.</p>
								<p className="mt-2">
									You can explore all available resources at{" "}
									<button
										type="button"
										onClick={() => setApiUrl(baseApiUrl)}
										className="text-yellow-500 hover:underline"
									>
										{baseApiUrl}
									</button>
									.
								</p>
							</div>
						)}
					</pre>
				</div>
			)}
		</div>
	)
}
