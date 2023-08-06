import clsx from 'clsx'

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
      <h4 className="font-bold text-2xl opacity-70">Response Body:</h4>
      <pre
        className={clsx(
          'w-full bg-slate-50 p-4 rounded-md border',
          'whitespace-pre-wrap break-words',
          'max-h-screen overflow-y-auto',
          className
        )}
      >
        {children}
      </pre>
    </div>
  )
}

export default ResponseDisplayElement
