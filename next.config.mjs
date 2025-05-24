/** @type {import('next').NextConfig} */
const nextConfig = {
	trailingSlash: false, // Consistent handling
	async headers() {
		return [
			{
				source: "/api/:path*",
				headers: [
					{ key: "Access-Control-Allow-Origin", value: "*" },
					{ key: "Access-Control-Allow-Methods", value: "GET, OPTIONS" },
					{ key: "Access-Control-Allow-Headers", value: "Content-Type" },
				],
			},
		]
	},
}

export default nextConfig
