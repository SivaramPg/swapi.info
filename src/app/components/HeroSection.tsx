import clsx from 'clsx'

interface HeroSectionProps {
  className?: string
}

const HeroSection = ({ className }: HeroSectionProps): JSX.Element => {
  return <section className={clsx(className)}></section>
}

export default HeroSection
