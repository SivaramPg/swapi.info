'use client'

import clsx from 'clsx'
import { useClipboard } from 'use-clipboard-copy'
import SpriteIcon, { Icons } from './SpriteIcon'

interface ApiEndpointElementProps {
  className?: string
  text: string
  hideLabel?: boolean
}

const ApiEndpointElement = ({
  className,
  text,
  hideLabel = false,
}: ApiEndpointElementProps): JSX.Element => {
  const { copied, copy } = useClipboard({ copiedTimeout: 1_000 })

  return (
    <div className="flex flex-col w-full max-w-screen-lg gap-2">
      {!hideLabel && (
        <h4 className="text-lg font-bold md:text-xl lg:text-2xl opacity-70">
          API Endpoint:
        </h4>
      )}
      <div
        className={clsx(
          'w-full h-14 flex rounded-md overflow-hidden',
          className
        )}
      >
        <input
          type="text"
          className="w-full px-4 text-lg font-bold border border-r-0 bg-slate-50 rounded-l-md"
          value={text}
          readOnly
        />
        <a
          href={text}
          target="_blank"
          className={clsx(
            'w-20 flex items-center justify-center border border-l-0',
            'bg-slate-50'
          )}
        >
          <SpriteIcon id={Icons['tab-external']} width={32} height={32} />
        </a>
        <button
          type="button"
          className={clsx(
            'w-32 text-white font-bold text-lg',
            copied ? 'bg-green-600' : 'bg-blue-500'
          )}
          onClick={() => {
            if (copied) return

            copy(text)
          }}
          disabled={copied}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  )
}

export default ApiEndpointElement
