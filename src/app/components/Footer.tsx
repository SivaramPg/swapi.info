import SpriteIcon, { Icons } from '@/components/SpriteIcon'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full h-48 border py-4 flex flex-col items-center justify-around bg-slate-200">
      <div className="h-auto container px-4 mx-auto flex flex-wrap items-center justify-between gap-8">
        <div className="">
          <p className="inline-flex items-center gap-1 whitespace-nowrap">
            Made with
            <SpriteIcon id={Icons['heart']} width={20} height={20} />
            by
            <span className="font-bold">Sivaram P</span>
            <span className="font-mono ml-2 font-bold hidden md:block">
              2023
            </span>
          </p>
        </div>
        <div className="flex gap-8 items-center justify-center">
          <a href="https://sivaramp.com" target="_blank">
            <div className="flex items-center justify-center gap-1 opacity-80 hover:opacity-100 hover:drop-shadow-md">
              <SpriteIcon id={Icons['website']} width={24} height={24} />
            </div>
          </a>

          <a href="https://github.com/SivaramPg" target="_blank">
            <div className="flex items-center justify-center gap-1 opacity-80 hover:opacity-100 hover:drop-shadow-md">
              <SpriteIcon id={Icons['github']} width={24} height={24} />
            </div>
          </a>

          <a href="https://sivarampg.medium.com/" target="_blank">
            <div className="flex items-center justify-center gap-1 opacity-80 hover:opacity-100 hover:drop-shadow-md">
              <SpriteIcon id={Icons['medium']} width={24} height={24} />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/sivaram-pandariganthan-b753a2145/"
            target="_blank"
          >
            <div className="flex items-center justify-center gap-1 opacity-80 hover:opacity-100 hover:drop-shadow-md">
              <SpriteIcon id={Icons['linkedin']} width={24} height={24} />
            </div>
          </a>

          <a href="https://codepen.io/kaizoku_95" target="_blank">
            <div className="flex items-center justify-center gap-1 opacity-80 hover:opacity-100 hover:drop-shadow-md">
              <SpriteIcon id={Icons['codepen']} width={24} height={24} />
            </div>
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 flex items-center justify-end">
        <p className="flex items-center gap-2 sm:gap-4 md:gap-6 font-bold text-normal font-mono whitespace-nowrap">
          Powered by{' '}
          <a href="https://nextjs.org/" target="_blank">
            <Image
              priority
              src="/icons/nextjs.svg"
              alt="Nextjs"
              width={96}
              height={96}
              className="hover:drop-shadow-md"
            />
          </a>
          on{' '}
          <a href="https://cloudflare.com" target="_blank">
            <Image
              priority
              src="/icons/cloudflare.svg"
              alt="Cloudflare"
              width={150}
              height={150}
              className="hover:drop-shadow-md"
            />
          </a>
        </p>
      </div>
    </footer>
  )
}
