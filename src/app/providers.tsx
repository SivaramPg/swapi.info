"use client"

import { PostHogProvider } from "@/components/posthog-provider"
import { ThemeProvider } from "next-themes"

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider attribute="class" forcedTheme="dark" enableColorScheme>
			<PostHogProvider>{children}</PostHogProvider>
		</ThemeProvider>
	)
}
