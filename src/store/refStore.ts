import type { MutableRefObject } from 'react'
import { create } from 'zustand'
export type State = {
  ref: MutableRefObject<HTMLElement | null> | null
}

export type Actions = {
  setRef: (ref: MutableRefObject<HTMLElement | null>) => void
}

export const useRefStore = create<State & Actions>((set) => ({
  ref: null,
  setRef: (ref) => set({ ref }),
}))
