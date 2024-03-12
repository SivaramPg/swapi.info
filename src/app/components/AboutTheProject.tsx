import clsx from 'clsx'

type AboutTheProjectProps = {
  className?: string
}

export function AboutTheProject({ className }: AboutTheProjectProps) {
  return (
    <div className="w-full bg-gray-50 border-y-2">
      <div
        className={clsx(
          'w-full container mx-auto px-4 flex flex-wrap py-10 items-start gap-10 md:gap-4 justify-between',
          className
        )}
      >
        <Block title="What is this ?">
          The Star Wars API, or &quot;swapi&quot; (Swah-pee) is the
          world&lsquo;s first quantified and programmatically-accessible data
          source for all the data from the Star Wars canon universe!
          <br />
          <br /> We&lsquo;ve taken all the rich contextual stuff from the
          universe and formatted into something easier to consume with software.
          Then we went and stuck an API on the front so you can access it all!
        </Block>
        <Block title="How can I use it ?">
          All the data is accessible through our HTTP web API. Consult our
          explorer pages if you&lsquo;d like to get started.
        </Block>
        <Block title="Promise of longevity">
          Swapi.info is here to stay!. Created as service which runs solely via
          static files, this service does not require database or expensive
          hosting to run. Currently hosted on the generosity of Cloudflare
          Pages, the only barrier to utilization is a public facing domain. No
          other costs associated with running this project yourself as well.
          Created as a self-owned alternative to keep my older projects alive,
          now publicly available and Open Source allows it to be perpetually
          available to the community.
        </Block>
      </div>
    </div>
  )
}

function Block({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-4 w-full max-w-[100%] md:max-w-[calc(31%)]">
      <h6 className="text-2xl font-bold">{title}</h6>
      <p>{children}</p>
    </div>
  )
}
