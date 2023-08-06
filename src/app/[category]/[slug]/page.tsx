import fsPromises from 'fs/promises'
import path from 'path'

import ResponseDisplayElement from '@/components/ResponseDisplayElement'
import ApiEndpointElement from '@/components/ApiEndpointElement'

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

export default async function Page({
  params,
}: {
  params: { category: string; slug: string }
}) {
  const { category, slug } = params

  const data = await getCategorySlugJson(category, slug)

  return (
    <main className="container mx-auto min-h-[calc(100vh-64px)] py-20 flex flex-col gap-8 items-center justify-center">
      <h1 className="text-7xl font-black mb-10">
        /{category}/{slug}
      </h1>
      <ApiEndpointElement text={data.url} />
      <ResponseDisplayElement>
        {JSON.stringify(data, null, 4)}
      </ResponseDisplayElement>
    </main>
  )
}
