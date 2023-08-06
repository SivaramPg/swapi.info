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

  return <pre>{category}</pre>
}
