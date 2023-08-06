import clsx from 'clsx'

interface EndpointsSectionProps {
  className?: string
}

const EndpointsSection = ({
  className,
}: EndpointsSectionProps): JSX.Element => {
  return (
    <section
      className={clsx('w-full flex flex-col gap-4', className)}
    ></section>
  )
}

export default EndpointsSection
