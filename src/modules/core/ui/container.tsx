import { cn } from '@/modules/core/utils'
import { type AllHTMLAttributes, type ElementType, type ReactNode, createElement } from 'react'

type Props = AllHTMLAttributes<ElementType> & {
  children: ReactNode
  component?: ElementType
}

export function Container({ component, children, className, ...props }: Props) {
  return createElement(component || 'div', { ...props, className: cn('container', className) }, children)
}
