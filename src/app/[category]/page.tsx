import fsPromises from 'fs/promises'
import path from 'path'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'

import ResponseDisplayElement from '@/components/ResponseDisplayElement'
import ApiEndpointElement from '@/components/ApiEndpointElement'
import Breadcrumbs from '@/components/Breadcrumbs'

export async function generateStaticParams() {
  const categories = (
    await fsPromises.readdir(
      path.resolve(__dirname, '../../../../public/api'),
      {
        withFileTypes: true,
      }
    )
  )
    .filter((category) => category.isDirectory())
    .map((category) => ({ category: category.name }))

  return categories
}

async function getCategoryAllJson(category: string) {
  const jsonFile = await fsPromises.readFile(
    path.resolve(__dirname, `../../../../public/api/${category}/all.json`)
  )

  return JSON.parse(jsonFile.toString())
}

export default async function Page({
  params,
}: {
  params: { category: string }
}) {
  const { category } = params

  const data = await getCategoryAllJson(category)

  return (
    <main className="container mx-auto min-h-screen px-4 py-20 flex flex-col gap-8 items-center justify-center">
      <h1 className="text-7xl font-black mb-10">/{category}</h1>
      <Breadcrumbs pathElements={[category]} />
      <ApiEndpointElement text={`https://swapi.info/api/${category}`} />
      <ResponseDisplayElement>
        {JSON.stringify(data, null, 4)}
      </ResponseDisplayElement>
      <div className={clsx('w-full max-w-screen-lg flex flex-col gap-2')}>
        <h4 className="font-bold text-2xl opacity-70">View {category}:</h4>
        <div className="flex flex-wrap gap-4">
          {data.map((obj: any, i: number) => (
            <Link
              key={i}
              href={obj.url.replace('/api', '')}
              className="w-1/2 sm:w-1/3 md:w-1/4 grow border-2 rounded-lg shadow-sm bg-blue-50"
            >
              <div className="w-full h-fit p-4 flex items-center justify-between gap-2">
                <h2 className="font-bold text-lg capitalize">
                  {obj.url.split('/').at(-1).split('.')[0]}.{' '}
                  {obj.title ?? obj.name}
                </h2>
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
      <div className={clsx('w-full max-w-screen-lg flex flex-col gap-2 mb-10')}>
        <h4 className="font-bold text-2xl opacity-70">
          Visit the API endpoint:
        </h4>
        <div className="flex flex-col gap-2 pl-6">
          {data.map((value: any, i: number) => (
            <ul key={i}>
              <li className="list-disc text-gray-800">
                <Link
                  target="_blank"
                  href={value.url}
                  className="w-full bg-blue-50 underline underline-offset-4 hover:text-blue-500"
                >
                  <h2 className="font-bold text-lg">{value.url}</h2>
                </Link>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </main>
  )
}
