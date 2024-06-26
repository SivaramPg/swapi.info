import { Code } from 'bright'

interface ResponseDisplayElementProps {
  className?: string
  children: string
}

const ResponseDisplayElement = ({
  className,
  children,
}: ResponseDisplayElementProps): JSX.Element => {
  return (
    <div className="flex flex-col w-full max-w-screen-lg">
      <h4 className="-mb-2 text-lg font-bold md:text-xl lg:text-2xl opacity-70">
        Result:
      </h4>
      <Code
        lang="json"
        title="response.json"
        lineNumbers
        theme={'github-dark-dimmed'}
        className="max-h-screen !overflow-y-auto"
        codeClassName="!select-text selection:!bg-[#ffffff44]"
        code={children}
      />
    </div>
  )
}

export default ResponseDisplayElement
