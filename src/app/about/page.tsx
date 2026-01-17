import type { Metadata } from "next"
import type React from "react"
import RequestDisplayElement from "@/components/RequestDisplayElement"

export const metadata: Metadata = {
	title: "About",
	description:
		"Learn about SWAPI.info - the free, fast, and reliable Star Wars API. No rate limits, 100% uptime, and open source.",
	openGraph: {
		title: "About",
		description:
			"Learn about SWAPI.info - the free, fast, and reliable Star Wars API. No rate limits, 100% uptime, and open source.",
	},
	twitter: {
		card: "summary_large_image",
		title: "About",
		description:
			"Learn about SWAPI.info - the free, fast, and reliable Star Wars API. No rate limits, 100% uptime, and open source.",
	},
}

/**
 * About page for swapi.info.
 * Explains the purpose, history, and technical details of the SWAPI project.
 */
const AboutPage: React.FC = () => {
	return (
		<div className="max-w-4xl p-6 mx-auto prose prose-invert md:p-12">
			<h1 className="mb-6 text-4xl font-bold text-yellow-400">
				About swapi.info
			</h1>

			<section className="mb-8">
				<h2 className="mb-3 text-2xl font-semibold text-yellow-500">
					SWAPI Reborn - Star Wars APIs & Explorer
				</h2>
				<p className="mb-4">
					The Star Wars API is the world's first quantified and
					programmatically-formatted set of Star Wars data. We're dedicated to
					providing a comprehensive and accessible resource for all the People,
					Films, Species, Starships, Vehicles, and Planets from the Star Wars
					universe.
				</p>
				<p>
					This data is formatted in JSON and exposed via a RESTful API, allowing
					you to programmatically collect, analyze, and integrate Star Wars
					information into your projects.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="mb-3 text-2xl font-semibold text-yellow-500">
					Why swapi.info?
				</h2>
				<p className="mb-4">
					Recognizing the need for a reliable, fast, and freely accessible Star
					Wars API, <code>swapi.info</code> was born. This project is a
					commitment to the developer community, ensuring that the invaluable
					resource that helped kickstart many of our own learning journeys
					remains available for decades to come.
				</p>
				<p className="mb-4">
					<code>swapi.info</code> is engineered for performance and
					accessibility:
				</p>
				<ul className="mb-4 ml-4 list-disc list-inside">
					<li>
						<strong>Lightning Fast:</strong> Leveraging modern infrastructure
						and CDN backing, we deliver sub-50ms response times worldwide for
						our JSON-only GET APIs.
					</li>
					<li>
						<strong>Always On:</strong> We boast 100% uptime, continuously
						monitored at{" "}
						<a
							href="https://status.swapi.info/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-yellow-400 hover:underline"
						>
							status.swapi.info
						</a>
						.
					</li>
					<li>
						<strong>Completely Free & Open:</strong> There are no ads and no
						rate-limits. The project is open source, and the only operational
						cost is the annual domain registration for <code>swapi.info</code>.
					</li>
					<li>
						<strong>Lightweight Hosting:</strong> Designed to be incredibly
						light on hosting resources, making it sustainable for the long term.
					</li>
				</ul>
				<p className="mb-4">
					This is our way of giving back, providing a stable and performant
					platform for students, developers, and Star Wars fans to explore the
					galaxy far, far away without barriers.
				</p>
				<p>
					Check out the{" "}
					<a href="/documentation" className="text-yellow-400 hover:underline">
						documentation
					</a>{" "}
					to get started consuming SWAPI data.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="mb-3 text-2xl font-semibold text-yellow-500">
					What Happened to the Original swapi.co?
				</h2>
				<p>
					Swapi.co... that's a name many in the developer community remember.
					Unfortunately, the original
					<code>swapi.co</code> is no longer maintained, and the service has
					become unavailable.
					<code>swapi.info</code> was built to ensure that this invaluable
					resource continues to be available to everyone. We are committed to
					maintaining and expanding this API.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="mb-3 text-2xl font-semibold text-yellow-500">
					What Can You Use This For?
				</h2>
				<p className="mb-4">
					Use <code>swapi.info</code> to fetch a vast array of data from the
					Star Wars universe. This API is a fantastic educational resource for
					learning about API communication, data handling, and, of course, all
					things Star Wars. It's perfect for:
				</p>
				<ul className="mb-4 ml-4 list-disc list-inside">
					<li>Learning to work with APIs</li>
					<li>Building Star Wars-themed applications</li>
					<li>Data analysis and visualization projects</li>
					<li>Educational purposes</li>
				</ul>
				<h3 className="mb-2 text-xl font-semibold text-yellow-600">
					Example Fetch:
				</h3>
				<RequestDisplayElement slug="planets/1" />
			</section>

			<section className="mb-8">
				<h2 className="mb-3 text-2xl font-semibold text-yellow-500">
					What are the Features?
				</h2>
				<p className="mb-4">
					<code>swapi.info</code> provides a RESTful API serving JSON-formatted
					data. Our platform is built as a static Next.js application, ensuring
					optimal performance and reliability. We leverage the strengths of:
				</p>
				<ul className="mb-4 ml-4 list-disc list-inside">
					<li>
						<strong>Next.js:</strong> For a fast and modern web experience.
					</li>
					<li>
						<strong>Vercel:</strong> For robust and scalable global hosting.
					</li>
					<li>
						<strong>Cloudflare:</strong> As a Content Delivery Network (CDN) for
						our API's JSON files, guaranteeing low-latency access to data
						worldwide.
					</li>
				</ul>
				<p>
					The entire project is open source. You can explore the codebase and
					contribute on{" "}
					<a
						href="https://github.com/SivaramPg/swapi.info"
						target="_blank"
						rel="noopener noreferrer"
						className="text-yellow-400 hover:underline"
					>
						GitHub
					</a>
					.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="mb-3 text-2xl font-semibold text-yellow-500">
					Who Are You?
				</h2>
				<p className="mb-4">
					I am a Senior Software Engineer with over seven years of experience in
					crafting robust and performant software solutions. As a Full-Stack
					Developer, I specialize in building engaging, React-based frontends,
					always with a keen eye on both functionality and speed.
				</p>
				<p>
					<code>swapi.info</code> is a personal passion project, born from a
					desire to give back to the developer community. The original SWAPI was
					a significant part of my own learning journey into the world of APIs
					and web development. My goal is to ensure this valuable resource
					remains alive, well-maintained, and freely accessible for a new
					generation of developers and Star Wars enthusiasts to learn from and
					build upon.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="mb-3 text-2xl font-semibold text-yellow-500">
					Regarding the Original Author
				</h2>
				<p>
					The original SWAPI project was built and maintained by Paul Hallett.
					We honor his pioneering work in making Star Wars data accessible to
					the developer community.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="mb-3 text-2xl font-semibold text-yellow-500">
					Copyright and Data Sources
				</h2>
				<p className="mb-4">
					Star Wars and all associated names are copyright Lucasfilm Ltd.
				</p>
				<p className="mb-4">
					This project is open source and carries an{" "}
					<a
						href="https://opensource.org/licenses/MIT"
						target="_blank"
						rel="noopener noreferrer"
						className="text-yellow-400 hover:underline"
					>
						MIT License
					</a>
					.
				</p>
				<p>
					All data is sourced from the <code>swapi.dev</code> project, which in
					turn collected it from open sources such as Wookiepedia. We aim to
					keep the data synchronized with updates from these sources to ensure
					accuracy and completeness.
				</p>
			</section>

			<section>
				<h2 className="mb-3 text-2xl font-semibold text-yellow-500">
					Contributors & Acknowledgements
				</h2>
				<p className="mb-4">
					The original SWAPI would not have been possible without contributions
					from:
				</p>
				<ul className="mb-4 ml-4 list-disc list-inside">
					<li>Paul Hallett</li>
					<li>Owen Hallett</li>
					<li>Carvilsi</li>
					<li>Andrea Stagi</li>
					<li>Juriy Bura</li>
				</ul>
				<p className="mb-4">
					We thank them for providing a solid framework and inspiration.
				</p>
				<p className="mb-4">
					A special thank you to Vercel and Cloudflare for their generous free
					tiers, which make it possible to host
					<code>swapi.info</code> and offer it as a free resource to the
					community.
				</p>
				<p>
					If you're interested in contributing to <code>swapi.info</code>,
					please check out our{" "}
					<a
						href="https://github.com/SivaramPg/swapi.info"
						target="_blank"
						rel="noopener noreferrer"
						className="text-yellow-400 hover:underline"
					>
						GitHub repository
					</a>
					.
				</p>
			</section>
		</div>
	)
}

export default AboutPage
