import fsPromises from 'fs/promises'
import path from 'path'

import clsx from 'clsx'
import { Metadata } from 'next'
import Link from 'next/link'

import ApiEndpointElement from '@/components/ApiEndpointElement'
import Breadcrumbs from '@/components/Breadcrumbs'
import ResponseDisplayElement from '@/components/ResponseDisplayElement'
import SpriteIcon, { Icons } from '@/components/SpriteIcon'

import { metadata } from '@/app/layout'
import { capitalize } from '@/utils/capitalize'

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

export async function generateMetadata({
  params,
}: {
  params: { category: string }
}) {
  return {
    title: capitalize(params.category),
    description: `Get all the Star Wars ${params.category} in one place! ${metadata.description}`,
    alternates: { canonical: `https://swapi.info/${params.category}` },
    openGraph: {
      title: capitalize(params.category),
      description: `Get all the Star Wars ${params.category} in one place! ${metadata.description}`,
    },
    twitter: {
      title: capitalize(params.category),
      description: `Get all the Star Wars ${params.category} in one place! ${metadata.description}`,
    },
  } as Metadata
}

export default async function Page({
  params,
}: {
  params: { category: string }
}) {
  const { category } = params

  const data = await getCategoryAllJson(category)

  return (
    <main className="container flex flex-col items-center justify-center min-h-screen gap-8 px-4 py-10 mx-auto md:py-16 lg:py-20">
      <h1 className="mb-6 text-5xl font-black lg:text-7xl md:mb-10">
        /{category}
      </h1>
      <Breadcrumbs pathElements={[category]} />
      <ApiEndpointElement text={`https://swapi.info/api/${category}`} />
      <ResponseDisplayElement>
        {JSON.stringify(data, null, 4)}
      </ResponseDisplayElement>
      <div className={clsx('w-full max-w-screen-lg flex flex-col gap-2')}>
        <h4 className="text-lg font-bold md:text-xl lg:text-2xl opacity-70">
          View {category}:
        </h4>
        <div className="flex flex-wrap gap-4">
          {data.map((obj: any, i: number) => (
            <Link
              key={i}
              href={obj.url.replace('/api', '')}
              className="w-1/2 border-2 rounded-lg shadow-sm sm:w-1/3 md:w-1/4 grow bg-blue-50"
            >
              <div className="flex items-center justify-between w-full gap-2 p-4 h-fit">
                <h2 className="text-lg font-bold capitalize">
                  {obj.url.split('/').at(-1).split('.')[0]}.{' '}
                  {obj.title ?? obj.name}
                </h2>
                <SpriteIcon
                  id={Icons['caret-right']}
                  width={24}
                  height={24}
                  className="hidden sm:block"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className={clsx('w-full max-w-screen-lg flex flex-col gap-2 mb-10')}>
        <h4 className="text-lg font-bold md:text-xl lg:text-2xl opacity-70">
          Visit the API endpoint:
        </h4>
        <div className="flex flex-col gap-2 pl-6">
          {data.map((value: any, i: number) => (
            <ul key={i}>
              <li className="text-gray-800 list-disc">
                <a
                  target="_blank"
                  href={value.url}
                  className="inline-flex items-center w-full gap-2 underline underline-offset-4 hover:text-blue-500"
                >
                  <h2 className="text-lg font-bold">{value.url}</h2>
                  <SpriteIcon
                    id={Icons['tab-external']}
                    width={20}
                    height={20}
                  />
                </a>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </main>
  )
}
