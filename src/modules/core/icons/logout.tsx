import { cn } from '@/modules/core/utils'
import type { SVGAttributes } from 'react'

interface Props extends SVGAttributes<SVGSVGElement> {
  class?: string
}

export const Logout = ({ ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="12"
      viewBox="0 0 14 12"
      fill="none"
      {...props}
      className={cn('h-[1.2rem] w-[1.2rem]', props.className)}
    >
      <title>Logout</title>
      <path
        d="M8.5 8.5V9.75C8.5 10.0815 8.3683 10.3995 8.13388 10.6339C7.89946 10.8683 7.58152 11 7.25 11H2.25C1.91848 11 1.60054 10.8683 1.36612 10.6339C1.1317 10.3995 1 10.0815 1 9.75V2.25C1 1.91848 1.1317 1.60054 1.36612 1.36612C1.60054 1.1317 1.91848 1 2.25 1H7C7.69031 1 8.5 1.55969 8.5 2.25V3.5M10.5 8.5L13 6L10.5 3.5M4.5 6H12.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
