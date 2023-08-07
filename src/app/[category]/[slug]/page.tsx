import fsPromises from 'fs/promises'
import path from 'path'

import ResponseDisplayElement from '@/components/ResponseDisplayElement'
import ApiEndpointElement from '@/components/ApiEndpointElement'
import Breadcrumbs from '@/components/Breadcrumbs'
import { capitalize } from '@/utils/capitalize'

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

export async function generateMetadata({
  params,
}: {
  params: { category: string; slug: string }
}) {
  return {
    title: capitalize(`${params.category}/${params.slug}`),
    openGraph: { title: capitalize(`${params.category}/${params.slug}`) },
    twitter: { title: capitalize(`${params.category}/${params.slug}`) },
  }
}

export default async function Page({
  params,
}: {
  params: { category: string; slug: string }
}) {
  const { category, slug } = params

  const data = await getCategorySlugJson(category, slug)

  return (
    <main className="container mx-auto min-h-screen px-4 py-10 md:py-16 lg:py-20 flex flex-col gap-8 items-center justify-center">
      <h1 className="text-5xl lg:text-7xl font-black mb-6 md:mb-10">
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
