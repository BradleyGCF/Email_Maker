import { cn } from '@/modules/core/utils'
import { type AllHTMLAttributes, type ElementType, type ReactNode, createElement } from 'react'

type Props = AllHTMLAttributes<ElementType> & {
  children: ReactNode[] | ReactNode
  component?: ElementType
}
export function Card({ component, children, ...props }: Props) {
  return createElement(
    component || 'div',
    {
      ...props,
      className: cn('rounded-lg border bg-white p-4 shadow-lg', props.className),
    },
    children
  )
}
