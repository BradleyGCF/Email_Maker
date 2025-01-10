// import { $UserRole } from '@/modules/auth/enum'
import type { Session } from '@/types'
import { create } from 'zustand'
import { setUser } from './actions'

export type State = {
  user: Session | null
}

export type Actions = {
  setUser: (user: State['user']) => void
}

export const useUserStore = create<State & Actions>((set) => ({
  user: null,
  setUser: (user) => setUser(user)(set),
}))
