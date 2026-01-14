/** @type {import('next-sitemap').IConfig} */
const sitemapConfig = {
	siteUrl: "https://swapi.info",
	generateIndexSitemap: false,
	changefreq: "monthly",
	outDir: "out", // Required for static export
	exclude: [
		"/api/*",
		"/opengraph-image.jpg",
		"/twitter-image.jpg",
		"/robots.txt",
		"/_not-found",
	],
	transform: async (config, path) => {
		// Check if it's a numeric entity page
		const isNumericEntityPage = /^\/[a-z]+\/\d+$/.test(path)

		// Priority based on page type
		let priority = 0.7

		if (path === "/") {
			priority = 1.0
		} else if (path === "/documentation" || path === "/about") {
			priority = 0.9
		} else if (
			[
				"/films",
				"/people",
				"/planets",
				"/species",
				"/starships",
				"/vehicles",
			].includes(path)
		) {
			priority = 0.8
		} else if (isNumericEntityPage) {
			// Numeric URLs get lower priority than slug URLs
			priority = 0.5
		}

		return {
			loc: path,
			changefreq: config.changefreq,
			priority,
			lastmod: new Date().toISOString(),
		}
	},
}

module.exports = sitemapConfig
