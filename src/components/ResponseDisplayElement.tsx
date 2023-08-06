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
    <pre
      className={clsx(
        'w-full max-w-screen-lg bg-slate-50 p-4 rounded-md border',
        'whitespace-pre-wrap break-words',
        className
      )}
    >
      {children}
    </pre>
  )
}

export default ResponseDisplayElement
