import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full h-48 border py-4 flex flex-col items-center justify-around bg-slate-200">
      <div className="h-auto container px-4 mx-auto flex flex-wrap items-center justify-between gap-8">
        <div className="">
          <p className="inline-flex items-center gap-1 whitespace-nowrap">
            Made with{' '}
            <Image src="/icons/heart.svg" alt="" width={20} height={20} /> by
            <span className="font-bold">Sivaram P</span>{' '}
            <span className="font-mono ml-2 font-bold hidden md:block">
              2023
            </span>
          </p>
        </div>
        <div className="flex gap-8 items-center justify-center">
          <Link href="https://sivaramp.com" target="_blank">
            <div className="flex items-center justify-center gap-1 opacity-80 hover:opacity-100 hover:drop-shadow-md">
              <Image src="/icons/website.svg" alt="" width={24} height={24} />
            </div>
          </Link>

          <Link href="https://github.com/SivaramPg" target="_blank">
            <div className="flex items-center justify-center gap-1 opacity-80 hover:opacity-100 hover:drop-shadow-md">
              <Image src="/icons/github.svg" alt="" width={24} height={24} />
            </div>
          </Link>

          <Link href="https://sivarampg.medium.com/" target="_blank">
            <div className="flex items-center justify-center gap-1 opacity-80 hover:opacity-100 hover:drop-shadow-md">
              <Image src="/icons/medium.svg" alt="" width={24} height={24} />
            </div>
          </Link>

          <Link
            href="https://www.linkedin.com/in/sivaram-pandariganthan-b753a2145/"
            target="_blank"
          >
            <div className="flex items-center justify-center gap-1 opacity-80 hover:opacity-100 hover:drop-shadow-md">
              <Image src="/icons/linkedin.svg" alt="" width={24} height={24} />
            </div>
          </Link>

          <Link href="https://codepen.io/kaizoku_95" target="_blank">
            <div className="flex items-center justify-center gap-1 opacity-80 hover:opacity-100 hover:drop-shadow-md">
              <Image src="/icons/codepen.svg" alt="" width={24} height={24} />
            </div>
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 flex items-center justify-end">
        <p className="flex items-center gap-2 sm:gap-4 md:gap-6 font-bold text-normal font-mono whitespace-nowrap">
          Powered by{' '}
          <Link href="https://nextjs.org/" target="_blank">
            <Image
              src="/icons/nextjs.svg"
              alt=""
              width={96}
              height={96}
              className="hover:drop-shadow-md"
            />
          </Link>
          on{' '}
          <Link href="https://cloudflare.com" target="_blank">
            <Image
              src="/icons/cloudflare.svg"
              alt=""
              width={150}
              height={150}
              className="hover:drop-shadow-md"
            />
          </Link>
        </p>
      </div>
    </footer>
  )
}
