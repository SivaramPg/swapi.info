'use client'

import clsx from 'clsx'
import { useClipboard } from 'use-clipboard-copy'

interface ApiEndpointElementProps {
  className?: string
  text: string
}

const ApiEndpointElement = ({
  className,
  text,
}: ApiEndpointElementProps): JSX.Element => {
  const { copied, copy } = useClipboard({ copiedTimeout: 1_000 })

  return (
    <div className="w-full max-w-screen-lg flex flex-col gap-2">
      <h4 className="font-bold text-lg md:text-xl lg:text-2xl opacity-70">
        API Endpoint:
      </h4>
      <div
        className={clsx(
          'w-full h-14 flex rounded-md overflow-hidden',
          className
        )}
      >
        <input
          type="text"
          className="w-full bg-slate-50 rounded-l-md border px-4 font-bold text-lg"
          value={text}
          readOnly
        />
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
