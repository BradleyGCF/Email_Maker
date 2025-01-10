import type { UserRole } from '@/types'

export type User = {
  id: string
  username: string
  email: string
  fullName: string
  userType: UserRole
}
