import { cn } from '@/modules/core/utils'
import type { SVGAttributes } from 'react'

const Rotations = {
  top: 'rotate-90',
  bottom: '-rotate-90',
  right: 'rotate-180',
  left: 'rotate-40',
}

type Directions = keyof typeof Rotations

interface Props extends SVGAttributes<SVGSVGElement> {
  class?: string
  direction?: Directions
}

export const Arrow = ({ direction = 'right', ...props }: Props) => {
  return (
    <svg
      {...props}
      className={cn('h-4 w-4', props.className, Rotations[direction])}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Arrow</title>
      <g>
        <path
          d="M8.125 12.5L3.625 8L8.125 3.5M4.25 8H13.375"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
