import type { ReactNode } from 'react'
import { cn } from '../utils'

const viewContainer = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div
      className={cn(
        'bg-extraLightBlue space-y-8 rounded-lg px-4 py-6 pb-16 w-screen min-h-[calc(100vh-24px)] max-w-[calc(100vw-150px)]',
        className
      )}
    >
      {children}
    </div>
  )
}

export default viewContainer
