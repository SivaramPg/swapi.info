import { Code } from 'bright'

interface RequestDisplayElementProps {
  className?: string
  slug: string
}

const RequestDisplayElement = ({
  className,
  slug,
}: RequestDisplayElementProps): JSX.Element => {
  return (
    <div className="flex flex-col w-full max-w-screen-lg">
      <h4 className="-mb-2 text-lg font-bold md:text-xl lg:text-2xl opacity-70">
        Request:
      </h4>
      <Code
        lang="javascript"
        title="request.js"
        lineNumbers
        theme={'github-dark-dimmed'}
        className="max-h-screen !overflow-y-auto"
        codeClassName="!select-text selection:!bg-[#ffffff44]"
        code={getRequest(slug)}
      />
    </div>
  )
}

export default RequestDisplayElement

function getRequest(slug: string) {
  return `fetch("https://swapi.info/api${slug}")
    .then((res) => res.json()) // Parse the JSON content from the API to be consumed
    .then((json) => console.log(json)) // Log the JSON response to your console
    .catch((error) => console.error(error)) // Log the API error (if any) to your console`
}
