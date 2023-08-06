import fsPromises from 'fs/promises'
import path from 'path'

async function getRootJson() {
  const jsonFile = await fsPromises.readFile(
    path.resolve(__dirname, '../../../public/api/root.json')
  )

  return JSON.parse(jsonFile.toString())
}

export default async function Home() {
  const data = await getRootJson()

  return (
    <main className="container mx-auto min-h-[calc(100vh-64px)] py-10 flex flex-col gap-4 items-center justify-center">
      <h1 className="text-7xl font-black">SW-API</h1>
      <pre className="whitespace-pre-wrap">{JSON.stringify(data, null, 2)}</pre>
    </main>
  )
}
