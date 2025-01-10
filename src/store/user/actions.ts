import type { Actions, State } from '.'
import type { ZustandGet, ZustandSet } from '..'

// Aquí van las acciones del store si éste es muy grande
// quitar el '_' si se utiliza get
export const setUser = (user: State['user']) => async (set: ZustandSet<State, Actions>, _get?: ZustandGet<State, Actions>) => {
  set(() => ({ user }))
}
