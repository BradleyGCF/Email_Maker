import {
  useEffect,
  // useRef,
  useState,
} from 'react'

export const UseBubbleChat = () => {
  // const ref = useRef<HTMLDivElement>(null)

  const [bubbleBox, setBubbleBox] = useState(false)

  // const handleOpenBox = () => {
  //   setBubbleBox(!bubbleBox)
  // }

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (ref.current && !ref.current.contains(event.target as Node)) {
  //       setBubbleBox(false)
  //     }
  //   }
  //   document.addEventListener('mousedown', handleClickOutside)
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside)
  //   }
  // }, [bubbleBox])

  // useEffect(() => {
  //   const handleEscapeKey = (event: KeyboardEvent) => {
  //     if (event.key === 'Escape') {
  //       setBubbleBox(false)
  //     }
  //   }

  //   document.addEventListener('keydown', handleEscapeKey)
  //   return () => {
  //     document.removeEventListener('keydown', handleEscapeKey)
  //   }
  // }, [bubbleBox])

  useEffect(() => {
    setBubbleBox(true)
    return () => {
      setBubbleBox(false)
    }
  }, [])
  return {
    // ref,
    bubbleBox,
    setBubbleBox,
    // handleOpenBox,
  }
}
