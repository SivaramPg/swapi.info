import typography from "@tailwindcss/typography"

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				// Star Wars themed dark palette
				swapi: {
					bg: "#0a0a0f",
					surface: "#12121a",
					border: "#1f1f2e",
					yellow: "#FFE81F",
					"yellow-dim": "#FFE81Fbb",
					"yellow-glow": "#FFE81F33",
				},
			},
			fontFamily: {
				sans: ["var(--font-bricolage)"],
				mono: ["var(--font-martian-mono)"],
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						"--tw-prose-body": theme("colors.gray.300"),
						"--tw-prose-headings": theme("colors.white"),
						"--tw-prose-links": "#FFE81F",
						"--tw-prose-bold": theme("colors.white"),
						"--tw-prose-code": "#FFE81F",
						pre: {
							backgroundColor: "#12121a",
							paddingTop: theme("spacing.3"),
							paddingBottom: theme("spacing.3"),
							paddingLeft: theme("spacing.4"),
							paddingRight: theme("spacing.4"),
							borderRadius: theme("borderRadius.md"),
						},
						"code::before": {
							content: '""',
						},
						"code::after": {
							content: '""',
						},
						code: {
							backgroundColor: "#1f1f2e",
							padding: "0.2em 0.4em",
							borderRadius: theme("borderRadius.sm"),
							fontWeight: "500",
							color: "#FFE81F",
						},
						a: {
							color: "#FFE81F",
							"&:hover": {
								color: "#fff176",
							},
						},
					},
				},
			}),
		},
	},
	plugins: [typography, require("tailwindcss-animate")],
}
