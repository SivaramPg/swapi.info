import RequestDisplayElement from "@/components/RequestDisplayElement"
import ResponseDisplayElement from "@/components/ResponseDisplayElement"
import type { Metadata } from "next"
import type { JSX } from "react"

export const metadata: Metadata = {
	title: "Documentation",
	description:
		"Explore the comprehensive SWAPI.info documentation. Learn how to use the Star Wars API to access data on films, characters, starships, planets, species, and vehicles. Your ultimate guide to the galaxy far, far away's data.",
	openGraph: {
		title: "Documentation",
		description:
			"Explore the comprehensive SWAPI.info documentation. Learn how to use the Star Wars API to access data on films, characters, starships, planets, species, and vehicles. Your ultimate guide to the galaxy far, far away's data.",
	},
	twitter: {
		card: "summary_large_image",
		title: "Documentation",
		description:
			"Explore the comprehensive SWAPI.info documentation. Learn how to use the Star Wars API to access data on films, characters, starships, planets, species, and vehicles. Your ultimate guide to the galaxy far, far away's data.",
	},
}

const ApiGuidePage = (): JSX.Element => {
	return (
		<div className="max-w-4xl p-6 mx-auto prose prose-invert md:p-12">
			<h1 className="pb-2 mb-10 text-3xl font-bold text-yellow-400 border-b-2 border-yellow-400 sm:text-4xl md:text-5xl">
				Documentation
			</h1>

			<h2 className="pb-2 mt-12 mb-6 text-3xl font-semibold text-yellow-300 border-b border-gray-700">
				Introduction
			</h2>
			<p className="mb-4">
				Welcome to the swapi, the Star Wars API! This documentation should help
				you familiarise yourself with the resources available and how to consume
				them with HTTP requests. If you&apos;re after a native helper library
				then I suggest you scroll down and check out what&apos;s available. Read
				through the getting started section before you dive in. Most of your
				problems should be solved just by reading through it.
			</p>

			<h2 className="pb-2 mt-12 mb-6 text-3xl font-semibold text-yellow-300 border-b border-gray-700">
				Getting started
			</h2>
			<p className="mb-4">
				Let&apos;s make our first API request to the Star Wars API!
			</p>
			<p className="mb-4">
				Open up a terminal and use curl or use a fetch call to make an API
				request for a resource. In the example below, we&apos;re trying to get
				the first planet, Tatooine:
			</p>
			<RequestDisplayElement slug="/planets/1" />
			<p className="mb-4">
				We&apos;ll use fetch If you don&apos;t want to use the fetch api, just
				use the curl command, your browser window, or Postman instead.
			</p>
			<ResponseDisplayElement>
				{`{
	"name": "Tatooine",
	"rotation_period": "23",
	"orbital_period": "304",
	"diameter": "10465",
	"climate": "arid",
	"gravity": "1 standard",
	"terrain": "desert",
	"surface_water": "1",
	"population": "200000",
	"residents": [
		"https://swapi.info/api/people/1",
		"https://swapi.info/api/people/2",
		"https://swapi.info/api/people/4",
		"https://swapi.info/api/people/6",
		"https://swapi.info/api/people/7",
		"https://swapi.info/api/people/8",
		"https://swapi.info/api/people/9",
		"https://swapi.info/api/people/11",
		"https://swapi.info/api/people/43",
		"https://swapi.info/api/people/62"
	],
	"films": [
		"https://swapi.info/api/films/1",
		"https://swapi.info/api/films/3",
		"https://swapi.info/api/films/4",
		"https://swapi.info/api/films/5",
		"https://swapi.info/api/films/6"
	],
	"created": "2014-12-09T13:50:49.641000Z",
	"edited": "2014-12-20T20:58:18.411000Z",
	"url": "https://swapi.info/api/planets/1"
}`}
			</ResponseDisplayElement>
			<p className="mb-4">
				If your response looks slightly different don&apos;t panic. This is
				probably because more data has been added to swapi since we made this
				documentation.
			</p>

			<h2 className="pb-2 mt-12 mb-6 text-3xl font-semibold text-yellow-300 border-b border-gray-700">
				Base URL
			</h2>
			<p className="mb-4">
				The Base URL is the root URL for all of the API. If you ever make a
				request to swapi and get a 404 NOT FOUND response, check the Base URL
				first.
			</p>
			<p className="mb-4">The Base URL for swapi is:</p>
			<p className="mb-4">
				<code>https://swapi.info/api</code>
			</p>
			<p className="mb-4">
				The documentation below assumes you are prepending this Base URL to the
				endpoints to make requests.
			</p>

			<h2 className="pb-2 mt-12 mb-6 text-3xl font-semibold text-yellow-300 border-b border-gray-700">
				Authentication
			</h2>
			<p className="mb-4">
				Swapi is a completely open API. Key points regarding authentication and
				access include:
			</p>
			<ul>
				<li>No authentication is required to query and retrieve data.</li>
				<li>
					Due to its open nature, interactions are limited to GET requests.
				</li>
				<li>
					If you discover any inaccuracies in the data, please contact the
					author via email.
				</li>
			</ul>

			<h2 className="pb-2 mt-12 mb-6 text-3xl font-semibold text-yellow-300 border-b border-gray-700">
				JSON Schema
			</h2>
			<p className="mb-4">
				JSON schema files for each resource type are available via their
				respective API endpoints. You can access them directly (e.g., by
				appending <code>/schema</code> to the resource URL) or use them to
				validate API responses. The available schemas are:
			</p>
			<ul>
				<li>
					<code>https://swapi.info/api/films/schema</code>
				</li>
				<li>
					<code>https://swapi.info/api/people/schema</code>
				</li>
				<li>
					<code>https://swapi.info/api/planets/schema</code>
				</li>
				<li>
					<code>https://swapi.info/api/species/schema</code>
				</li>
				<li>
					<code>https://swapi.info/api/starships/schema</code>
				</li>
				<li>
					<code>https://swapi.info/api/vehicles/schema</code>
				</li>
			</ul>

			<h2 className="pb-2 mt-12 mb-6 text-3xl font-semibold text-yellow-300 border-b border-gray-700">
				Encodings
			</h2>
			<p className="mb-4">SWAPI provides data in the following encoding:</p>
			<h3 className="mt-8 mb-4 text-2xl font-semibold text-yellow-200">JSON</h3>
			<p className="mb-4">
				JSON is the standard data format provided by SWAPI by default.
			</p>

			<h2 className="pb-2 mt-12 mb-6 text-3xl font-semibold text-yellow-300 border-b border-gray-700">
				Resources
			</h2>

			<h3 className="mt-8 mb-4 text-2xl font-semibold text-yellow-200">Root</h3>
			<p className="mb-4">
				The Root resource provides information on all available resources within
				the API.
			</p>
			<RequestDisplayElement slug="" />
			<ResponseDisplayElement>
				{`{
    "films": "https://swapi.info/api/films",
    "people": "https://swapi.info/api/people",
    "planets": "https://swapi.info/api/planets",
    "species": "https://swapi.info/api/species",
    "starships": "https://swapi.info/api/starships",
    "vehicles": "https://swapi.info/api/vehicles"
}`}
			</ResponseDisplayElement>
			<p className="mb-4">Attributes:</p>
			<ul>
				<li>
					<code>films</code> string-- The URL root for Film resources
				</li>
				<li>
					<code>people</code> string-- The URL root for People resources
				</li>
				<li>
					<code>planets</code> string-- The URL root for Planet resources
				</li>
				<li>
					<code>species</code> string-- The URL root for Species resources
				</li>
				<li>
					<code>starships</code> string-- The URL root for Starships resources
				</li>
				<li>
					<code>vehicles</code> string-- The URL root for Vehicles resources
				</li>
			</ul>

			<h3 className="mt-8 mb-4 text-2xl font-semibold text-yellow-200">
				People
			</h3>
			<p className="mb-4">
				A People resource is an individual person or character within the Star
				Wars universe.
			</p>
			<p className="mb-4">Endpoints</p>
			<ul>
				<li>
					<code>/people</code> -- get all the people resources
				</li>
				<li>
					<code>/people/:id</code> -- get a specific people resource
				</li>
			</ul>
			<RequestDisplayElement slug="/people/1" />
			<ResponseDisplayElement>
				{`{
	"name": "Luke Skywalker",
	"height": "172",
	"mass": "77",
	"hair_color": "blond",
	"skin_color": "fair",
	"eye_color": "blue",
	"birth_year": "19BBY",
	"gender": "male",
	"homeworld": "https://swapi.info/api/planets/1",
	"films": [
		"https://swapi.info/api/films/1",
		"https://swapi.info/api/films/2",
		"https://swapi.info/api/films/3",
		"https://swapi.info/api/films/6"
	],
	"species": [],
	"vehicles": [
		"https://swapi.info/api/vehicles/14",
		"https://swapi.info/api/vehicles/30"
	],
	"starships": [
		"https://swapi.info/api/starships/12",
		"https://swapi.info/api/starships/22"
	],
	"created": "2014-12-09T13:50:51.644000Z",
	"edited": "2014-12-20T21:17:56.891000Z",
	"url": "https://swapi.info/api/people/1"
}`}
			</ResponseDisplayElement>
			<p className="mb-4">Attributes:</p>
			<ul>
				<li>
					<code>name</code> string-- The name of this person.
				</li>
				<li>
					<code>birth_year</code> string-- The birth year of the person, using
					the in-universe standard of BBY or ABY - Before the Battle of Yavin or
					After the Battle of Yavin. The Battle of Yavin is a battle that occurs
					at the end of Star Wars episode IV: A New Hope.
				</li>
				<li>
					<code>eye_color</code> string-- The eye color of this person. Will be
					"unknown" if not known or "n/a" if the person does not have an eye.
				</li>
				<li>
					<code>gender</code> string-- The gender of this person. Either "Male",
					"Female" or "unknown", "n/a" if the person does not have a gender.
				</li>
				<li>
					<code>hair_color</code> string-- The hair color of this person. Will
					be "unknown" if not known or "n/a" if the person does not have hair.
				</li>
				<li>
					<code>height</code> string-- The height of the person in centimeters.
				</li>
				<li>
					<code>mass</code> string-- The mass of the person in kilograms.
				</li>
				<li>
					<code>skin_color</code> string-- The skin color of this person.
				</li>
				<li>
					<code>homeworld</code> string-- The URL of a planet resource, a planet
					that this person was born on or inhabits.
				</li>
				<li>
					<code>films</code> array-- An array of film resource URLs that this
					person has been in.
				</li>
				<li>
					<code>species</code> array-- An array of species resource URLs that
					this person belongs to.
				</li>
				<li>
					<code>starships</code> array-- An array of starship resource URLs that
					this person has piloted.
				</li>
				<li>
					<code>vehicles</code> array-- An array of vehicle resource URLs that
					this person has piloted.
				</li>
				<li>
					<code>url</code> string-- the hypermedia URL of this resource.
				</li>
				<li>
					<code>created</code> string-- the ISO 8601 date format of the time
					that this resource was created.
				</li>
				<li>
					<code>edited</code> string-- the ISO 8601 date format of the time that
					this resource was edited.
				</li>
			</ul>

			<h3 className="mt-8 mb-4 text-2xl font-semibold text-yellow-200">
				Films
			</h3>
			<p className="mb-4">A Film resource is a single film.</p>
			<p className="mb-4">Endpoints</p>
			<ul>
				<li>
					<code>/films</code> -- get all the film resources
				</li>
				<li>
					<code>/films/:id</code> -- get a specific film resource
				</li>
			</ul>
			<RequestDisplayElement slug="/films/1" />
			<ResponseDisplayElement>
				{`{
	"title": "A New Hope",
	"episode_id": 4,
	"opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire\'s\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire\'s\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
	"director": "George Lucas",
	"producer": "Gary Kurtz, Rick McCallum",
	"release_date": "1977-05-25",
	"characters": [
		"https://swapi.info/api/people/1",
		"https://swapi.info/api/people/2",
		"https://swapi.info/api/people/3",
		"https://swapi.info/api/people/4",
		"https://swapi.info/api/people/5",
		"https://swapi.info/api/people/6",
		"https://swapi.info/api/people/7",
		"https://swapi.info/api/people/8",
		"https://swapi.info/api/people/9",
		"https://swapi.info/api/people/10",
		"https://swapi.info/api/people/12",
		"https://swapi.info/api/people/13",
		"https://swapi.info/api/people/14",
		"https://swapi.info/api/people/15",
		"https://swapi.info/api/people/16",
		"https://swapi.info/api/people/18",
		"https://swapi.info/api/people/19",
		"https://swapi.info/api/people/81"
	],
	"planets": [
		"https://swapi.info/api/planets/1",
		"https://swapi.info/api/planets/2",
		"https://swapi.info/api/planets/3"
	],
	"starships": [
		"https://swapi.info/api/starships/2",
		"https://swapi.info/api/starships/3",
		"https://swapi.info/api/starships/5",
		"https://swapi.info/api/starships/9",
		"https://swapi.info/api/starships/10",
		"https://swapi.info/api/starships/11",
		"https://swapi.info/api/starships/12",
		"https://swapi.info/api/starships/13"
	],
	"vehicles": [
		"https://swapi.info/api/vehicles/4",
		"https://swapi.info/api/vehicles/6",
		"https://swapi.info/api/vehicles/7",
		"https://swapi.info/api/vehicles/8"
	],
	"species": [
		"https://swapi.info/api/species/1",
		"https://swapi.info/api/species/2",
		"https://swapi.info/api/species/3",
		"https://swapi.info/api/species/4",
		"https://swapi.info/api/species/5"
	],
	"created": "2014-12-10T14:23:31.880000Z",
	"edited": "2014-12-20T19:49:45.256000Z",
	"url": "https://swapi.info/api/films/1"
}`}
			</ResponseDisplayElement>
			<p className="mb-4">Attributes:</p>
			<ul>
				<li>
					<code>title</code> string-- The title of this film
				</li>
				<li>
					<code>episode_id</code> integer-- The episode number of this film.
				</li>
				<li>
					<code>opening_crawl</code> string-- The opening paragraphs at the
					beginning of this film.
				</li>
				<li>
					<code>director</code> string-- The name of the director of this film.
				</li>
				<li>
					<code>producer</code> string-- The name(s) of the producer(s) of this
					film. Comma separated.
				</li>
				<li>
					<code>release_date</code> date-- The ISO 8601 date format of film
					release at original creator country.
				</li>
				<li>
					<code>species</code> array-- An array of species resource URLs that
					are in this film.
				</li>
				<li>
					<code>starships</code> array-- An array of starship resource URLs that
					are in this film.
				</li>
				<li>
					<code>vehicles</code> array-- An array of vehicle resource URLs that
					are in this film.
				</li>
				<li>
					<code>characters</code> array-- An array of people resource URLs that
					are in this film.
				</li>
				<li>
					<code>planets</code> array-- An array of planet resource URLs that are
					in this film.
				</li>
				<li>
					<code>url</code> string-- the hypermedia URL of this resource.
				</li>
				<li>
					<code>created</code> string-- the ISO 8601 date format of the time
					that this resource was created.
				</li>
				<li>
					<code>edited</code> string-- the ISO 8601 date format of the time that
					this resource was edited.
				</li>
			</ul>

			<h3 className="mt-8 mb-4 text-2xl font-semibold text-yellow-200">
				Starships
			</h3>
			<p className="mb-4">
				A Starship resource is a single transport craft that has hyperdrive
				capability.
			</p>
			<p className="mb-4">Endpoints</p>
			<ul>
				<li>
					<code>/starships</code> -- get all the starship resources
				</li>
				<li>
					<code>/starships/:id</code> -- get a specific starship resource
				</li>
			</ul>
			<RequestDisplayElement slug="/starships/9" />
			<ResponseDisplayElement>
				{`{
	"name": "Death Star",
	"model": "DS-1 Orbital Battle Station",
	"manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",
	"cost_in_credits": "1000000000000",
	"length": "120000",
	"max_atmosphering_speed": "n/a",
	"crew": "342,953",
	"passengers": "843,342",
	"cargo_capacity": "1000000000000",
	"consumables": "3 years",
	"hyperdrive_rating": "4.0",
	"MGLT": "10",
	"starship_class": "Deep Space Mobile Battlestation",
	"pilots": [],
	"films": ["https://swapi.info/api/films/1"],
	"created": "2014-12-10T16:36:50.509000Z",
	"edited": "2014-12-20T21:26:24.783000Z",
	"url": "https://swapi.info/api/starships/9"
}`}
			</ResponseDisplayElement>
			<p className="mb-4">Attributes:</p>
			<ul>
				<li>
					<code>name</code> string-- The name of this starship. The common name,
					such as "Death Star".
				</li>
				<li>
					<code>model</code> string-- The model or official name of this
					starship. Such as "T-65 X-wing" or "DS-1 Orbital Battle Station".
				</li>
				<li>
					<code>starship_class</code> string-- The class of this starship, such
					as "Starfighter" or "Deep Space Mobile Battlestation"
				</li>
				<li>
					<code>manufacturer</code> string-- The manufacturer of this starship.
					Comma separated if more than one.
				</li>
				<li>
					<code>cost_in_credits</code> string-- The cost of this starship new,
					in galactic credits.
				</li>
				<li>
					<code>length</code> string-- The length of this starship in meters.
				</li>
				<li>
					<code>crew</code> string-- The number of personnel needed to run or
					pilot this starship.
				</li>
				<li>
					<code>passengers</code> string-- The number of non-essential people
					this starship can transport.
				</li>
				<li>
					<code>max_atmosphering_speed</code> string-- The maximum speed of this
					starship in the atmosphere. "N/A" if this starship is incapable of
					atmospheric flight.
				</li>
				<li>
					<code>hyperdrive_rating</code> string-- The class of this starships
					hyperdrive.
				</li>
				<li>
					<code>MGLT</code> string-- The Maximum number of Megalights this
					starship can travel in a standard hour. A "Megalight" is a standard
					unit of distance and has never been defined before within the Star
					Wars universe. This figure is only really useful for measuring the
					difference in speed of starships. We can assume it is similar to AU,
					the distance between our Sun (Sol) and Earth.
				</li>
				<li>
					<code>cargo_capacity</code> string-- The maximum number of kilograms
					that this starship can transport.
				</li>
				<li>
					<code>consumables</code> <em>string</em> -- The maximum length of time
					that this starship can provide consumables for its entire crew without
					having to resupply.
				</li>
				<li>
					<code>films</code> array-- An array of Film URL Resources that this
					starship has appeared in.
				</li>
				<li>
					<code>pilots</code> array-- An array of People URL Resources that this
					starship has been piloted by.
				</li>
				<li>
					<code>url</code> string-- the hypermedia URL of this resource.
				</li>
				<li>
					<code>created</code> string-- the ISO 8601 date format of the time
					that this resource was created.
				</li>
				<li>
					<code>edited</code> string-- the ISO 8601 date format of the time that
					this resource was edited.
				</li>
			</ul>

			<h3 className="mt-8 mb-4 text-2xl font-semibold text-yellow-200">
				Vehicles
			</h3>
			<p className="mb-4">
				A Vehicle resource is a single transport craft that does not have
				hyperdrive capability.
			</p>
			<p className="mb-4">Endpoints</p>
			<ul>
				<li>
					<code>/vehicles</code> -- get all the vehicle resources
				</li>
				<li>
					<code>/vehicles/:id</code> -- get a specific vehicle resource
				</li>
			</ul>
			<RequestDisplayElement slug="/vehicles/4" />
			<ResponseDisplayElement>
				{`{
  "...": "...",
  "properties": {
    "cargo_capacity": "50000",
    "consumables": "2 months",
    "cost_in_credits": "150000",
    "created": "2014-12-10T15:36:25.724000Z",
    "crew": "46",
    "edited": "2014-12-10T15:36:25.724000Z",
    "length": "36.8",
    "manufacturer": "Corellia Mining Corporation",
    "max_atmosphering_speed": "30",
    "model": "Digger Crawler",
    "name": "Sand Crawler",
    "passengers": "30",
    "pilots": [],
    "films": [ "https://swapi.info/api/films/1" ],
    "url": "https://swapi.info/api/vehicles/4",
    "vehicle_class": "wheeled"
  }
}`}
			</ResponseDisplayElement>
			<p className="mb-4">Attributes:</p>
			<ul>
				<li>
					<code>name</code> string-- The name of this vehicle. The common name,
					such as "Sand Crawler" or "Speeder bike".
				</li>
				<li>
					<code>model</code> string-- The model or official name of this
					vehicle. Such as "All-Terrain Attack Transport".
				</li>
				<li>
					<code>vehicle_class</code> string-- The class of this vehicle, such as
					"Wheeled" or "Repulsorcraft".
				</li>
				<li>
					<code>manufacturer</code> string-- The manufacturer of this vehicle.
					Comma separated if more than one.
				</li>
				<li>
					<code>length</code> string-- The length of this vehicle in meters.
				</li>
				<li>
					<code>cost_in_credits</code> string-- The cost of this vehicle new, in
					Galactic Credits.
				</li>
				<li>
					<code>crew</code> string-- The number of personnel needed to run or
					pilot this vehicle.
				</li>
				<li>
					<code>passengers</code> string-- The number of non-essential people
					this vehicle can transport.
				</li>
				<li>
					<code>max_atmosphering_speed</code> string-- The maximum speed of this
					vehicle in the atmosphere.
				</li>
				<li>
					<code>cargo_capacity</code> string-- The maximum number of kilograms
					that this vehicle can transport.
				</li>
				<li>
					<code>consumables</code> <em>string</em> -- The maximum length of time
					that this vehicle can provide consumables for its entire crew without
					having to resupply.
				</li>
				<li>
					<code>films</code> array-- An array of Film URL Resources that this
					vehicle has appeared in.
				</li>
				<li>
					<code>pilots</code> array-- An array of People URL Resources that this
					vehicle has been piloted by.
				</li>
				<li>
					<code>url</code> string-- the hypermedia URL of this resource.
				</li>
				<li>
					<code>created</code> string-- the ISO 8601 date format of the time
					that this resource was created.
				</li>
				<li>
					<code>edited</code> string-- the ISO 8601 date format of the time that
					this resource was edited.
				</li>
			</ul>

			<h3 className="mt-8 mb-4 text-2xl font-semibold text-yellow-200">
				Species
			</h3>
			<p className="mb-4">
				A Species resource is a type of person or character within the Star Wars
				Universe.
			</p>
			<p className="mb-4">Endpoints</p>
			<ul>
				<li>
					<code>/species</code> -- get all the species resources
				</li>
				<li>
					<code>/species/:id</code> -- get a specific species resource
				</li>
			</ul>
			<RequestDisplayElement slug="/species/3" />
			<ResponseDisplayElement>
				{`{
	"name": "Wookie",
	"classification": "mammal",
	"designation": "sentient",
	"average_height": "210",
	"skin_colors": "gray",
	"hair_colors": "black, brown",
	"eye_colors": "blue, green, yellow, brown, golden, red",
	"average_lifespan": "400",
	"homeworld": "https://swapi.info/api/planets/14",
	"language": "Shyriiwook",
	"people": [
		"https://swapi.info/api/people/13",
		"https://swapi.info/api/people/80"
	],
	"films": [
		"https://swapi.info/api/films/1",
		"https://swapi.info/api/films/2",
		"https://swapi.info/api/films/3",
		"https://swapi.info/api/films/6"
	],
	"created": "2014-12-10T16:44:31.486000Z",
	"edited": "2014-12-20T21:36:42.142000Z",
	"url": "https://swapi.info/api/species/3"
}`}
			</ResponseDisplayElement>
			<p className="mb-4">Attributes:</p>
			<ul>
				<li>
					<code>name</code> string-- The name of this species.
				</li>
				<li>
					<code>classification</code> string-- The classification of this
					species, such as "mammal" or "reptile".
				</li>
				<li>
					<code>designation</code> string-- The designation of this species,
					such as "sentient".
				</li>
				<li>
					<code>average_height</code> string-- The average height of this
					species in centimeters.
				</li>
				<li>
					<code>average_lifespan</code> string-- The average lifespan of this
					species in years.
				</li>
				<li>
					<code>eye_colors</code> string-- A comma-separated string of common
					eye colors for this species, "none" if this species does not typically
					have eyes.
				</li>
				<li>
					<code>hair_colors</code> string-- A comma-separated string of common
					hair colors for this species, "none" if this species does not
					typically have hair.
				</li>
				<li>
					<code>skin_colors</code> string-- A comma-separated string of common
					skin colors for this species, "none" if this species does not
					typically have skin.
				</li>
				<li>
					<code>language</code> string-- The language commonly spoken by this
					species.
				</li>
				<li>
					<code>homeworld</code> string-- The URL of a planet resource, a planet
					that this species originates from.
				</li>
				<li>
					<code>people</code> array-- An array of People URL Resources that are
					a part of this species.
				</li>
				<li>
					<code>films</code> array-- An array of Film URL Resources that this
					species has appeared in.
				</li>
				<li>
					<code>url</code> string-- the hypermedia URL of this resource.
				</li>
				<li>
					<code>created</code> string-- the ISO 8601 date format of the time
					that this resource was created.
				</li>
				<li>
					<code>edited</code> string-- the ISO 8601 date format of the time that
					this resource was edited.
				</li>
			</ul>

			<h3 className="mt-8 mb-4 text-2xl font-semibold text-yellow-200">
				Planets
			</h3>
			<p className="mb-4">
				A Planet resource is a large mass, planet or planetoid in the Star Wars
				Universe, at the time of 0 ABY.
			</p>
			<p className="mb-4">Endpoints</p>
			<ul>
				<li>
					<code>/planets</code> -- get all the planets resources
				</li>
				<li>
					<code>/planets/:id</code> -- get a specific planets resource
				</li>
			</ul>
			<RequestDisplayElement slug="/planets/1" />
			<ResponseDisplayElement>
				{`{
	"name": "Tatooine",
	"rotation_period": "23",
	"orbital_period": "304",
	"diameter": "10465",
	"climate": "arid",
	"gravity": "1 standard",
	"terrain": "desert",
	"surface_water": "1",
	"population": "200000",
	"residents": [
		"https://swapi.info/api/people/1",
		"https://swapi.info/api/people/2",
		"https://swapi.info/api/people/4",
		"https://swapi.info/api/people/6",
		"https://swapi.info/api/people/7",
		"https://swapi.info/api/people/8",
		"https://swapi.info/api/people/9",
		"https://swapi.info/api/people/11",
		"https://swapi.info/api/people/43",
		"https://swapi.info/api/people/62"
	],
	"films": [
		"https://swapi.info/api/films/1",
		"https://swapi.info/api/films/3",
		"https://swapi.info/api/films/4",
		"https://swapi.info/api/films/5",
		"https://swapi.info/api/films/6"
	],
	"created": "2014-12-09T13:50:49.641000Z",
	"edited": "2014-12-20T20:58:18.411000Z",
	"url": "https://swapi.info/api/planets/1"
}`}
			</ResponseDisplayElement>
			<p className="mb-4">Attributes:</p>
			<ul>
				<li>
					<code>name</code> string-- The name of this planet.
				</li>
				<li>
					<code>diameter</code> string-- The diameter of this planet in
					kilometers.
				</li>
				<li>
					<code>rotation_period</code> string-- The number of standard hours it
					takes for this planet to complete a single rotation on its axis.
				</li>
				<li>
					<code>orbital_period</code> string-- The number of standard days it
					takes for this planet to complete a single orbit of its local star.
				</li>
				<li>
					<code>gravity</code> string-- A number denoting the gravity of this
					planet, where "1" is normal or 1 standard G. "2" is twice or 2
					standard Gs. "0.5" is half or 0.5 standard Gs.
				</li>
				<li>
					<code>population</code> string-- The average population of sentient
					beings inhabiting this planet.
				</li>
				<li>
					<code>climate</code> string-- The climate of this planet. Comma
					separated if diverse.
				</li>
				<li>
					<code>terrain</code> string-- The terrain of this planet. Comma
					separated if diverse.
				</li>
				<li>
					<code>surface_water</code> string-- The percentage of the planet
					surface that is naturally occurring water or bodies of water.
				</li>
				<li>
					<code>residents</code> array-- An array of People URL Resources that
					live on this planet.
				</li>
				<li>
					<code>films</code> array-- An array of Film URL Resources that this
					planet has appeared in.
				</li>
				<li>
					<code>url</code> string-- the hypermedia URL of this resource.
				</li>
				<li>
					<code>created</code> string-- the ISO 8601 date format of the time
					that this resource was created.
				</li>
				<li>
					<code>edited</code> string-- the ISO 8601 date format of the time that
					this resource was edited.
				</li>
			</ul>
		</div>
	)
}

export default ApiGuidePage
