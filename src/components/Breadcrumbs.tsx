import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import SpriteIcon, { Icons } from './SpriteIcon'

interface BreadcrumbsProps {
  className?: string
  pathElements: string[]
}

const Breadcrumbs = ({
  className,
  pathElements,
}: BreadcrumbsProps): JSX.Element => {
  return (
    <div className="w-full max-w-screen-lg">
      <div
        className={clsx(
          'flex gap-4 w-fit bg-blue-200 px-4 py-2 rounded-lg',
          className
        )}
      >
        <Link href="/">
          <SpriteIcon id={Icons.home} width={24} height={24} />
        </Link>
        <SpriteIcon id={Icons['caret-right']} width={24} height={24} />
        {pathElements.map((e, i) => (
          <React.Fragment key={i}>
            {i < pathElements.length - 1 ? (
              <Link
                href={`/${pathElements.slice(0, i + 1).join('/')}`}
                className="text-xl font-bold capitalize hover:text-blue-500 hover:underline hover:underline-offset-4"
              >
                {e}
              </Link>
            ) : (
              <p className="text-xl font-bold text-blue-500 underline capitalize underline-offset-4">
                {e}
              </p>
            )}
            {i < pathElements.length - 1 && (
              <SpriteIcon id={Icons['caret-right']} width={24} height={24} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default Breadcrumbs
