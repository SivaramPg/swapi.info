/** @type {import('next-sitemap').IConfig} */
const sitemapConfig = {
	siteUrl: "https://swapi.info",
	generateIndexSitemap: false,
	exclude: [
		"/api/*",
		"/films",
		"/films/*",
		"/people",
		"/people/*",
		"/planets",
		"/planets/*",
		"/species",
		"/species/*",
		"/starships",
		"/starships/*",
		"/vehicles",
		"/vehicles/*",
	],
}

module.exports = sitemapConfig
