import { unlink } from "node:fs/promises"
import { Glob } from "bun"

const glob = new Glob("**/*.json")

export async function generateRedirectsFile() {
	const path = "public/_redirects"

	// Check if _redirects file exists in the public folder
	const file = Bun.file(path)

	console.log(await file.exists())

	// if (await file.exists()) {
	// 	//  If it exists delete the file
	// 	await unlink(path)
	// }

	// TODO Read the JSON files present in the public/api folder
	for await (const file of glob.scan("./public/api")) {
		console.log(file) // => "index.ts"
	}

	// TODO Create a new _redirects file in the public folder
}

generateRedirectsFile()
