import fsPromises from 'fs/promises'
import path from 'path'
import Image from 'next/image'
import Link from 'next/link'

import ResponseDisplayElement from '@/components/ResponseDisplayElement'
import ApiEndpointElement from '@/components/ApiEndpointElement'
import clsx from 'clsx'

async function getRootJson() {
  const jsonFile = await fsPromises.readFile(
    path.resolve(__dirname, '../../../public/api/root.json')
  )

  return JSON.parse(jsonFile.toString())
}

export default async function Home() {
  const data = await getRootJson()

  return (
    <main className="container mx-auto min-h-[calc(100vh-64px)] py-20 flex flex-col gap-8 items-center justify-center">
      <h1 className="text-7xl font-black mb-10">SW-API</h1>
      <div className={clsx('w-full max-w-screen-lg flex flex-col gap-2')}>
        <h4 className="font-bold text-xl opacity-70">All Categories:</h4>
        <div className="flex flex-wrap gap-4">
          {Object.entries(data).map(([key, value], i: number) => (
            <Link
              key={i}
              href={(value as string).replace('/api', '')}
              className="w-1/4 grow border-2 rounded-lg shadow-sm bg-blue-50"
            >
              <div className="w-full h-fit p-4 flex items-center justify-between gap-2">
                <h2 className="font-bold text-lg capitalize">{key}</h2>
                <Image
                  src="/icons/caret-right.svg"
                  alt="..."
                  width={24}
                  height={24}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <ApiEndpointElement text={`https://sw-api.sivaramp.com/api/`} />
      <ResponseDisplayElement>
        {JSON.stringify(data, null, 4)}
      </ResponseDisplayElement>
    </main>
  )
}
