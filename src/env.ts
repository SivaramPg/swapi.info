import { z } from "zod"

export const envSchema = z.object({
	DOMAIN_BASE_URL: z.string().url().startsWith("https://").endsWith("/"),
})

export type Env = z.infer<typeof envSchema>

export const env = envSchema.parse(process.env)

declare global {
	namespace NodeJS {
		interface ProcessEnv extends Env {}
	}
}
