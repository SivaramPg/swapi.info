import clsx from 'clsx'

interface BreadcrumbsProps {
  className?: string
}

const Breadcrumbs = ({ className }: BreadcrumbsProps): JSX.Element => {
  return <div className={clsx(className)}></div>
}

export default Breadcrumbs
