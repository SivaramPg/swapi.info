import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full h-12 border">
      <div className="h-full container mx-auto flex items-center justify-between gap-4">
        <div className="">
          <p className="inline-flex items-center gap-1">
            Made with{' '}
            <Image src="/icons/heart.svg" alt="" width={20} height={20} /> by
            <span className="font-bold underline underline-offset-4">
              Sivaram Pandariganthan
            </span>{' '}
            <span className="font-mono ml-4 font-bold">2023</span>
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
    </footer>
  )
}
