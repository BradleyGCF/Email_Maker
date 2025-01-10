import Search from '@/modules/core/components/search'
import UserList from '@/modules/users/components/userList'
import { getAllUsers } from '@/modules/users/services'

export function loader() {
  const data = getAllUsers()
  return data
}

export default function Home() {
  return (
    <div>
      <h2>Usuarios</h2>
      <Search />
      <UserList />
    </div>
  )
}
