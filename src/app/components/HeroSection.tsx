import ApiEndpointElement from '@/components/ApiEndpointElement'
import clsx from 'clsx'
import Image from 'next/image'
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
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
          SWAPI.INFO
        </h1>
        <h2 className="text-2xl lg:text-3xl opacity-80 font-bold text-center mt-2 md:mt-4 mb-2">
          Star Wars APIs & Explorer
        </h2>
        <h3 className="max-w-screen-sm mx-5 text-md sm:text-xl md:text-xl opacity-75 text-center mt-2 mb-6">
          JSON-only, CDN-powered, Wicked-fast, Unrestricted Star Wars data API
          endpoints. All data sourced from our beloved{' '}
          <a
            href="https://swapi.dev"
            target="_blank"
            className="font-bold underline underline-offset-4"
          >
            swapi.dev
          </a>{' '}
          ❤️
        </h3>
        <div className="w-full max-w-screen-lg px-2">
          <ApiEndpointElement
            className="mb-10"
            hideLabel
            text={`https://swapi.info/api/`}
          />
        </div>
        <Link
          href="https://github.com/SivaramPg/sw-api"
          target="blank"
          className="font-bold text-lg sm:text-xl inline-flex items-center gap-2 border p-3 bg-white rounded-lg hover:shadow-md"
        >
          <Image
            src={'/icons/github.svg'}
            alt="Github"
            width={28}
            height={28}
          />
          View Source Code
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
