import fsPromises from 'fs/promises'
import path from 'path'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import ResponseDisplayElement from '@/components/ResponseDisplayElement'
import HeroSection from './components/HeroSection'

async function getRootJson() {
  const jsonFile = await fsPromises.readFile(
    path.resolve(__dirname, '../../../public/api/root.json')
  )

  return JSON.parse(jsonFile.toString())
}

export default async function Home() {
  const data = await getRootJson()

  return (
    <main className="w-full min-h-screen pb-20 flex flex-col gap-8 items-center justify-center">
      <HeroSection />
      <div className="container mx-auto px-4 flex flex-col gap-8 items-center justify-center">
        <ResponseDisplayElement>
          {JSON.stringify(data, null, 4)}
        </ResponseDisplayElement>
        <div className={clsx('w-full max-w-screen-lg flex flex-col gap-2')}>
          <h4 className="font-bold text-lg md:text-xl lg:text-2xl opacity-70">
            View a category:
          </h4>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {Object.entries(data).map(([key, value], i: number) => (
              <Link
                key={i}
                href={(value as string).replace('/api', '')}
                className="w-1/4 grow border-2 rounded-lg shadow-sm bg-blue-50"
              >
                <div className="w-full h-fit p-2 sm:p-4 flex items-center justify-between gap-1 md:gap-2">
                  <h2 className="font-bold text-md md:text-lg capitalize">
                    {key}
                  </h2>
                  <Image
                    src="/icons/caret-right.svg"
                    alt="caret-right"
                    width={24}
                    height={24}
                    className="hidden sm:block"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div
          className={clsx('w-full max-w-screen-lg flex flex-col gap-2 mb-10')}
        >
          <h4 className="font-bold text-lg md:text-xl lg:text-2xl opacity-70">
            Visit the API endpoint:
          </h4>
          <div className="flex flex-col gap-2 pl-6">
            {Object.values(data).map((value, i: number) => (
              <ul key={i}>
                <li className="list-disc text-gray-800">
                  <Link
                    target="_blank"
                    href={value as string}
                    className="w-full underline underline-offset-4 hover:text-blue-500 inline-flex items-center gap-2"
                  >
                    <h2 className="font-bold text-lg">{value as string}</h2>
                    <Image
                      src="/icons/tab-external.svg"
                      alt="tab-external"
                      width={20}
                      height={20}
                    />
                  </Link>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
