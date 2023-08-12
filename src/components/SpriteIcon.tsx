import clsx from 'clsx'
import { SVGProps } from 'react'

// keep a list of the icon ids we put in the symbol
export enum Icons {
  'caret-right' = 'caret-right',
  'github' = 'github',
  'people' = 'people',
  'tab-external' = 'tab-external',
  'heart' = 'heart',
  'planet' = 'planet',
  'vehicle' = 'vehicle',
  'codepen' = 'codepen',
  'home' = 'home',
  'species' = 'species',
  'website' = 'website',
  'eye-close' = 'eye-close',
  'linkedin' = 'linkedin',
  'eye-open' = 'eye-open',
  'medium' = 'medium',
  'star-wars' = 'star-wars',
  'film' = 'film',
  'starship' = 'starship',
}

// then define an Icon component that references the
export default function SpriteIcon({
  id,
  ...props
}: Omit<SVGProps<SVGSVGElement>, 'id'> & { id: Icons }) {
  return (
    <svg {...props} className={clsx(props.className)}>
      <use href={`/icons/sprite.svg#${id}`} />
    </svg>
  )
}
