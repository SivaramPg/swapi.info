import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="w-full h-16 shadow-md font-sans">
      <nav className="h-full container mx-auto flex items-center justify-between gap-4">
        <Link href="/">
          <h1 className="font-black text-3xl hover:drop-shadow-md">SW-API</h1>
        </Link>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/films"
            className="px-3 py-1 opacity-80 hover:opacity-100 hover:drop-shadow-md"
          >
            <div className="flex items-center justify-center gap-1">
              <Image src="/icons/film.svg" alt="" width={20} height={20} />
              <p className="font-bold">Films</p>
            </div>
          </Link>

          <Link
            href="/people"
            className="px-3 py-1 opacity-80 hover:opacity-100 hover:drop-shadow-md"
          >
            <div className="flex items-center justify-center gap-1">
              <Image src="/icons/people.svg" alt="" width={20} height={20} />
              <p className="font-bold">People</p>
            </div>
          </Link>

          <Link
            href="/planets"
            className="px-3 py-1 opacity-80 hover:opacity-100 hover:drop-shadow-md"
          >
            <div className="flex items-center justify-center gap-1">
              <Image src="/icons/planet.svg" alt="" width={20} height={20} />
              <p className="font-bold">Planets</p>
            </div>
          </Link>

          <Link
            href="/species"
            className="px-3 py-1 opacity-80 hover:opacity-100 hover:drop-shadow-md"
          >
            <div className="flex items-center justify-center gap-1">
              <Image src="/icons/species.svg" alt="" width={20} height={20} />
              <p className="font-bold">Species</p>
            </div>
          </Link>

          <Link
            href="/starships"
            className="px-3 py-1 opacity-80 hover:opacity-100 hover:drop-shadow-md"
          >
            <div className="flex items-center justify-center gap-1">
              <Image src="/icons/starship.svg" alt="" width={20} height={20} />
              <p className="font-bold">Starships</p>
            </div>
          </Link>

          <Link
            href="/vehicles"
            className="px-3 py-1 opacity-80 hover:opacity-100 hover:drop-shadow-md"
          >
            <div className="flex items-center justify-center gap-1">
              <Image src="/icons/vehicle.svg" alt="" width={20} height={20} />
              <p className="font-bold">Vehicles</p>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  )
}
