/** @type {import('next-sitemap').IConfig} */
const sitemapConfig = {
	siteUrl: "https://swapi.info",
	generateIndexSitemap: false,
	changefreq: "monthly",
	exclude: ["/api*"],
}

module.exports = sitemapConfig
