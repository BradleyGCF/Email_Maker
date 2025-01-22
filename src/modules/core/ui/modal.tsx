import { useModalsStore } from '@/store/modals'
import type React from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../utils'

const Modal = ({ children, name }: { children: React.ReactNode; name: string }) => {
  const { open } = useModalsStore()

  if (typeof document === 'undefined' || !document.body) {
    return null
  }

  return createPortal(
    <div className={cn(open === name ? 'flex' : 'hidden', 'fixed top-0 right-0 backdrop-blur-sm z-10 h-screen w-full')}>
      {children}
    </div>,
    document.body
  )
}

export default Modal
