import { Code } from 'bright'

interface ResponseDisplayElementProps {
  className?: string
  children: React.ReactNode
}

const ResponseDisplayElement = ({
  className,
  children,
}: ResponseDisplayElementProps): JSX.Element => {
  return (
    <div className="w-full max-w-screen-lg flex flex-col gap-2">
      <h4 className="font-bold text-lg md:text-xl lg:text-2xl opacity-70">
        Response Body:
      </h4>
      <Code
        lang="json"
        title="response.json"
        lineNumbers
        theme={'github-dark-dimmed'}
        className="max-h-screen !overflow-y-auto"
      >
        {children}
      </Code>
    </div>
  )
}

export default ResponseDisplayElement
