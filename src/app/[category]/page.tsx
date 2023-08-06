import fsPromises from 'fs/promises'
import path from 'path'

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
    <main className="container mx-auto min-h-[calc(100vh-64px)] py-20 flex flex-col gap-8 items-center justify-center">
      <h1 className="text-7xl font-black mb-10">/{category}</h1>
      <Breadcrumbs pathElements={[category]} />
      <ApiEndpointElement
        text={`https://sw-api.sivaramp.com/api/${category}`}
      />
      <ResponseDisplayElement>
        {JSON.stringify(data, null, 4)}
      </ResponseDisplayElement>
    </main>
  )
}
