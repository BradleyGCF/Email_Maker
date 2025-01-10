// biome-ignore lint/suspicious/noConstEnum: <explanation>
export const enum $OrderBy {
  ASC = 'asc',
  DESC = 'desc',
}

export const $SessionStatus = {
  UNAUTHENTICATED: 'UNAUTHENTICATED',
  AUTHENTICATED: 'AUTHENTICATED',
  UNAUTHENTICATED_ERROR: 'UNAUTHENTICATED_ERROR',
  LOADING: 'LOADING',
} as const

export const $ResponseStatus = {
  SUCCESS: 'success',
  ERROR: 'error',
} as const
