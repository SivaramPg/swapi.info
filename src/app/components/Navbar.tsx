import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="sticky left-0 top-0 right-0 bg-white w-full h-16 shadow-md font-sans z-50">
      <nav className="h-full container px-4 mx-auto flex items-center justify-between gap-4">
        <Link href="/" className="inline-flex items-center gap-2">
          <h1 className="font-black text-3xl hover:drop-shadow-md bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            SWAPI.INFO
          </h1>
        </Link>
        <div className="items-center justify-center gap-2 md:gap-4 hidden sm:flex">
          <CustomNavLink
            href="/films"
            imageSrc="/icons/film.svg"
            linkText="Films"
          />

          <CustomNavLink
            href="/people"
            imageSrc="/icons/people.svg"
            linkText="People"
          />

          <CustomNavLink
            href="/planets"
            imageSrc="/icons/planet.svg"
            linkText="Planets"
          />

          <CustomNavLink
            href="/species"
            imageSrc="/icons/species.svg"
            linkText="Species"
          />

          <CustomNavLink
            href="/starships"
            imageSrc="/icons/starship.svg"
            linkText="Starships"
          />

          <CustomNavLink
            href="/vehicles"
            imageSrc="/icons/vehicle.svg"
            linkText="Vehicles"
          />
        </div>
      </nav>
    </header>
  )
}

const CustomNavLink = ({
  href,
  imageSrc,
  linkText,
}: {
  href: string
  imageSrc: string
  linkText: string
}) => {
  return (
    <Link
      href={href}
      className="px-3 py-1 opacity-80 hover:opacity-100 hover:drop-shadow-md"
    >
      <div className="flex items-center justify-center gap-1">
        <Image
          src={imageSrc}
          alt=""
          width={20}
          height={20}
          className="block md:hidden lg:block"
        />
        <p className="font-bold hidden md:block">{linkText}</p>
      </div>
    </Link>
  )
}
