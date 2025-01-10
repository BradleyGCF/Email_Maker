// Aquí van las adaptadoras de los datos de la app
// Ejemplo:
import type GetAllUsersResponse from '@/mockData/users/getAllUsers.json'
import type UserResponse from '@/mockData/users/getUserById.json'
import type { Session, UserRole } from '@/types'

export function formatUsers(users: typeof GetAllUsersResponse) {
  return users.map((user) => {
    return {
      id: String(user.id),
      fullName: user.name,
      username: user.username,
      email: user.email,
      role: 'user',
    }
  })
}

export function formatUserSession(data: typeof UserResponse): Session {
  const { user } = data
  const attributes = user?.attributes
  return {
    id: user?.id,
    email: attributes?.email,
    username: attributes?.username,
    fullName: attributes?.fullName,
    sessionToken: attributes?.sessionToken,
    role: attributes?.user_type as UserRole,
  }
}
