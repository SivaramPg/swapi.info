'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface QuickLinksProps {
  className?: string
}

const QuickLinks = ({ className }: QuickLinksProps): JSX.Element => {
  const [show, setShow] = useState(false)

  return (
    <div
      className={clsx(
        'fixed z-50 bottom-[50px] right-[30px] rounded-3xl flex flex-col items-center justify-between gap-4 w-auto mx-auto sm:hidden p-3 flex-grow',
        'bg-gradient-to-t from-cyan-500 to-blue-500',
        'shadow-lg shadow-gray-500',
        className
      )}
    >
      {show && (
        <>
          <Link
            href="/films"
            className="flex flex-grow items-center justify-center"
          >
            <Image
              priority
              src={'/icons/film.svg'}
              alt="film"
              width={28}
              height={28}
              className="invert drop-shadow-md"
            />
          </Link>
          <Link
            href="/people"
            className="flex flex-grow items-center justify-center"
          >
            <Image
              priority
              src={'/icons/people.svg'}
              alt="people"
              width={28}
              height={28}
              className="invert drop-shadow-md"
            />
          </Link>
          <Link
            href="/planets"
            className="flex flex-grow items-center justify-center"
          >
            <Image
              priority
              src={'/icons/planet.svg'}
              alt="planet"
              width={28}
              height={28}
              className="invert drop-shadow-md"
            />
          </Link>
          <Link
            href="/species"
            className="flex flex-grow items-center justify-center"
          >
            <Image
              priority
              src={'/icons/species.svg'}
              alt="species"
              width={28}
              height={28}
              className="invert drop-shadow-md"
            />
          </Link>
          <Link
            href="/starships"
            className="flex flex-grow items-center justify-center"
          >
            <Image
              priority
              src={'/icons/starship.svg'}
              alt="starship"
              width={28}
              height={28}
              className="invert drop-shadow-md"
            />
          </Link>
          <Link
            href="/vehicles"
            className="flex flex-grow items-center justify-center"
          >
            <Image
              priority
              src={'/icons/vehicle.svg'}
              alt="vehicle"
              width={28}
              height={28}
              className="block invert drop-shadow-md"
            />
          </Link>
        </>
      )}
      {show ? (
        <Image
          priority
          src={'/icons/eye-close.svg'}
          alt="eye-close"
          width={28}
          height={28}
          className="invert drop-shadow-md"
          onClick={() => setShow((prevState) => !prevState)}
        />
      ) : (
        <Image
          priority
          src={'/icons/eye-open.svg'}
          alt="eye-open"
          width={28}
          height={28}
          className="invert drop-shadow-md"
          onClick={() => setShow((prevState) => !prevState)}
        />
      )}
    </div>
  )
}

export default QuickLinks
