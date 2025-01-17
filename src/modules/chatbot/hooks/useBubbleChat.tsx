import { useEffect, useRef, useState } from 'react'

export const UseBubbleChat = () => {
  const ref = useRef<HTMLDivElement>(null)

  const [bubbleBox, setBubbleBox] = useState(false)

  const handleOpenBox = () => {
    setBubbleBox(!bubbleBox)
  }

  // biome-ignore lint:
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setBubbleBox(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [bubbleBox])

  // biome-ignore lint:
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setBubbleBox(false)
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [bubbleBox])

  return {
    ref,
    bubbleBox,
    setBubbleBox,
    handleOpenBox,
  }
}
