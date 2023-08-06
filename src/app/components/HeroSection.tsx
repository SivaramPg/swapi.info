import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

interface HeroSectionProps {
  className?: string
}

const HeroSection = ({ className }: HeroSectionProps): JSX.Element => {
  return (
    <section
      className={clsx('w-full h-[calc(100vh-64px)] bg-slate-200', className)}
    >
      <div className="h-full w-full max-w-screen-md mx-auto flex flex-col items-center justify-center gap-4">
        <h1 className="text-8xl font-black">SW-API</h1>
        <h2 className="text-2xl opacity-75 text-center my-6">
          Strictly JSON-only, File & Redirects powered, Wicked-fast,
          Unrestricted Star Wars data GET API endpoints. Open Source Data fully
          sourced from our beloved{' '}
          <Link
            href="https://swapi.dev"
            target="_blank"
            className="font-bold underline underline-offset-4"
          >
            swapi.dev
          </Link>{' '}
          ❤️
        </h2>
        <Link
          href="https://github.com/SivaramPg/sw-api"
          target="blank"
          className="font-bold text-xl inline-flex items-center gap-2 border p-3 bg-white rounded-lg hover:shadow-md"
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
