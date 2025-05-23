import typography from "@tailwindcss/typography"
// import { fontFamily } from "tailwindcss/defaultTheme"

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
			fontFamily: {
				sans: ["var(--font-bricolage)"],
				mono: ["var(--font-martian-mono)"],
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						pre: {
							backgroundColor: theme("colors.neutral.800"),
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
							backgroundColor: theme("colors.neutral.800"),
							padding: "0.2em 0.4em",
							borderRadius: theme("borderRadius.sm"),
							fontWeight: "500",
							color: theme("colors.yellow.300"),
						},
						a: {
							color: theme("colors.yellow.400"),
							"&:hover": {
								color: theme("colors.yellow.300"),
							},
						},
					},
				},
				invert: {
					css: {
						pre: {
							backgroundColor: theme("colors.neutral.800"),
						},
						code: {
							backgroundColor: theme("colors.neutral.700"),
							color: theme("colors.yellow.300"),
						},
						a: {
							color: theme("colors.yellow.400"),
							"&:hover": {
								color: theme("colors.yellow.300"),
							},
						},
					},
				},
			}),
			animation: {
				marquee: "marquee 25s linear infinite",
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-50%)" },
				},
			},
		},
	},
	plugins: [typography, require("tailwindcss-animate")],
}
