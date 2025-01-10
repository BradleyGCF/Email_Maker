import type { $UserRole } from '@/modules/auth/enum'

export type AuthToken = {
  sessionToken: string
}

export type UserRole = (typeof $UserRole)[keyof typeof $UserRole]

export type Session = {
  email: string
  id: string
  username: string
  fullName: string
  role: UserRole
} & AuthToken
