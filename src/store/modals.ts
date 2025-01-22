import { create } from 'zustand'

export type ModalState = {
  open: string
  setOpen: (open: string) => void
}
export const useModalsStore = create<ModalState>((set) => ({
  open: '',
  setOpen: (open: string) => set({ open }),
}))
