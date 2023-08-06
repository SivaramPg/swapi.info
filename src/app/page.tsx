import fsPromises from 'fs/promises'
import path from 'path'

import ResponseDisplayElement from '@/components/ResponseDisplayElement'
import ApiEndpointElement from '@/components/ApiEndpointElement'

async function getRootJson() {
  const jsonFile = await fsPromises.readFile(
    path.resolve(__dirname, '../../../public/api/root.json')
  )

  return JSON.parse(jsonFile.toString())
}

export default async function Home() {
  const data = await getRootJson()

  return (
    <main className="container mx-auto min-h-[calc(100vh-64px)] py-20 flex flex-col gap-8 items-center justify-center">
      <h1 className="text-7xl font-black mb-10">SW-API</h1>
      <ApiEndpointElement text={`https://sw-api.sivaramp.com/api/`} />
      <ResponseDisplayElement>
        {JSON.stringify(data, null, 4)}
      </ResponseDisplayElement>
    </main>
  )
}
