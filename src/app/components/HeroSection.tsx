import ApiEndpointElement from '@/components/ApiEndpointElement'
import SpriteIcon, { Icons } from '@/components/SpriteIcon'
import clsx from 'clsx'
import Link from 'next/link'

interface HeroSectionProps {
  className?: string
}

const HeroSection = ({ className }: HeroSectionProps): JSX.Element => {
  return (
    <section
      className={clsx(
        'w-full min-h-[calc(100vh-64px)] bg-slate-200',
        className
      )}
    >
      <div className="min-h-[calc(100vh-64px)] w-full max-w-screen-md mx-auto flex flex-col items-center justify-center gap-4 py-20">
        <h1 className="inline-flex items-center gap-2 text-5xl font-black text-transparent sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text">
          SWAPI.INFO
        </h1>
        <h2 className="mb-4 -mt-4 text-2xl font-bold text-center lg:text-3xl">
          Star Wars APIs & Explorer
        </h2>

        <h3 className="max-w-screen-sm mx-5 mt-2 mb-6 font-semibold text-center text-md sm:text-xl md:text-xl">
          <span className="opacity-60">
            All the Star Wars data you&lsquo;ve ever wanted:
          </span>
          <br />
          Planets, Spaceships, Vehicles, People, Films and Species
        </h3>
        <div className="w-full max-w-screen-lg px-2">
          <ApiEndpointElement
            className="mb-10"
            hideLabel
            text={`https://swapi.info/api/`}
          />
        </div>
        <h3 className="max-w-screen-sm mx-5 mt-2 mb-6 text-center opacity-75 text-md sm:text-xl md:text-xl">
          JSON-only, CDN-powered, Wicked-fast, Unrestricted Star Wars data GET
          API endpoint service. All data sourced from our beloved{' '}
          <a
            href="https://swapi.dev"
            target="_blank"
            className="font-bold underline underline-offset-4"
          >
            swapi.dev
          </a>{' '}
          &nbsp;
          <SpriteIcon
            id={Icons['heart']}
            width={20}
            height={20}
            className="inline-block"
          />
        </h3>
        <Link
          href="https://github.com/SivaramPg/swapi.info"
          target="blank"
          className="inline-flex items-center gap-2 p-3 text-lg font-bold bg-white border rounded-lg sm:text-xl hover:shadow-md"
        >
          <SpriteIcon id={Icons['github']} width={28} height={28} />
          View Source Code
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
