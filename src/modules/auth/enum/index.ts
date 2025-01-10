export const $SessionStatus = {
  UNAUTHENTICATED: 'UNAUTHENTICATED',
  AUTHENTICATED: 'AUTHENTICATED',
  UNAUTHENTICATED_ERROR: 'UNAUTHENTICATED_ERROR',
  LOADING: 'LOADING',
} as const

export const $UserRole = {
  USER: 'user',
  ADMIN: 'admin',
} as const
