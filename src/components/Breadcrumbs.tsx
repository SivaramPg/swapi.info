import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

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
          <Image src="/icons/home.svg" alt="Home" width={24} height={24} />
        </Link>
        <Image src="/icons/caret-right.svg" alt="..." width={24} height={24} />
        {pathElements.map((e, i) => (
          <>
            <Link
              href={`/${pathElements.slice(0, i + 1).join('/')}`}
              key={i}
              className="text-xl font-bold capitalize hover:text-blue-500 hover:underline hover:underline-offset-4"
            >
              {e}
            </Link>
            {i < pathElements.length - 1 && (
              <Image
                src="/icons/caret-right.svg"
                alt="..."
                width={24}
                height={24}
              />
            )}
          </>
        ))}
      </div>
    </div>
  )
}

export default Breadcrumbs
