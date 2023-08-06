import clsx from 'clsx'

interface ApiEndpointElementProps {
  className?: string
}

const ApiEndpointElement = ({
  className,
}: ApiEndpointElementProps): JSX.Element => {
  return <div className={clsx(className)}></div>
}

export default ApiEndpointElement
