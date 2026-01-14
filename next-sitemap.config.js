/** @type {import('next-sitemap').IConfig} */
const sitemapConfig = {
	siteUrl: "https://swapi.info",
	generateIndexSitemap: false,
	changefreq: "monthly",
	exclude: ["/api*"],
	transform: async (config, path) => {
		// Prioritize slug-based URLs over numeric IDs for SEO
		// Numeric IDs get lower priority since they're not canonical
		const isNumericEntityPage = /\/[a-z]+\/\d+$/.test(path)

		return {
			loc: path,
			changefreq: config.changefreq,
			priority: isNumericEntityPage ? 0.5 : path === "/" ? 1.0 : 0.7,
			lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
		}
	},
}

module.exports = sitemapConfig
