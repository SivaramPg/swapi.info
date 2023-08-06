import fsPromises from 'fs/promises'
import path from 'path'

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

export default async function Page({
  params,
}: {
  params: { category: string; slug: string }
}) {
  const { category, slug } = params

  return (
    <main className="container mx-auto min-h-[calc(100vh-64px)] flex items-center justify-center">
      <h1 className="text-7xl font-black">
        {category}/{slug}
      </h1>
    </main>
  )
}
