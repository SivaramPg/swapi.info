import fsPromises from 'fs/promises'
import path from 'path'

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

export default async function Page({
  params,
}: {
  params: { category: string }
}) {
  const { category } = params

  // const data = await

  return (
    <main className="container mx-auto min-h-[calc(100vh-64px)] flex items-center justify-center">
      <h1 className="text-7xl font-black">{category}</h1>
    </main>
  )
}
