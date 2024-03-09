import fsPromises from 'fs/promises'
import path from 'path'

import { Metadata } from 'next'

import { metadata } from '@/app/layout'
import ApiEndpointElement from '@/components/ApiEndpointElement'
import Breadcrumbs from '@/components/Breadcrumbs'
import ResponseDisplayElement from '@/components/ResponseDisplayElement'

export async function generateStaticParams() {
  const slugs = (
    await fsPromises.readdir(
      path.resolve(__dirname, '../../../../../public/api/'),
      {
        withFileTypes: true,
        recursive: true,
      }
    )
  )
    .filter(
      (category) =>
        category.isFile() &&
        !['all.json', '.DS_Store', 'root.json'].includes(category.name)
    )
    .map((category) => ({
      category: category.path.split('/').at(-1),
      slug: category.name.split('.')[0],
    }))

  return slugs
}

async function getCategorySlugJson(category: string, slug: string) {
  const jsonFile = await fsPromises.readFile(
    path.resolve(
      __dirname,
      `../../../../../public/api/${category}/${slug}.json`
    )
  )

  return JSON.parse(jsonFile.toString())
}

function getFlattenedDetails(json: Record<string, string>) {
  return Object.entries(json)
    .map(([key, value]) => {
      if (typeof value === 'string' && !value.startsWith('http')) {
        return `${key}: ${value}`
      }
    })
    .filter(Boolean)
    .join(', ')
}

export async function generateMetadata({
  params,
}: {
  params: { category: string; slug: string }
}) {
  const json = await getCategorySlugJson(params.category, params.slug)
  return {
    title:
      `${json?.title || json?.name} | ` + `${params.category}/${params.slug}`,
    description: `${
      json?.opening_crawl?.replaceAll('\r\n', ' ') ||
      getFlattenedDetails(json) ||
      metadata.description
    }`,
    alternates: {
      canonical: `https://swapi.info/${params.category}/${params.slug}`,
    },
    openGraph: {
      title:
        `${json.title || json.name} | ` + `${params.category}/${params.slug}`,
      description: `${
        json?.opening_crawl?.replaceAll('\r\n', ' ') ||
        getFlattenedDetails(json) ||
        metadata.description
      }`,
    },
    twitter: {
      title:
        `${json.title || json.name} | ` + `${params.category}/${params.slug}`,
      description: `${
        json?.opening_crawl?.replaceAll('\r\n', ' ') ||
        getFlattenedDetails(json) ||
        metadata.description
      }`,
    },
  } as Metadata
}

export default async function Page({
  params,
}: {
  params: { category: string; slug: string }
}) {
  const { category, slug } = params

  const data = await getCategorySlugJson(category, slug)

  return (
    <main className="container flex flex-col items-center justify-center min-h-screen gap-8 px-4 py-10 mx-auto md:py-16 lg:py-20">
      <h1 className="mb-6 text-5xl font-black lg:text-7xl md:mb-10">
        /{category}/{slug}
      </h1>
      <Breadcrumbs pathElements={[category, slug]} />
      <ApiEndpointElement text={data.url} />
      <ResponseDisplayElement>
        {JSON.stringify(data, null, 4)}
      </ResponseDisplayElement>
    </main>
  )
}
