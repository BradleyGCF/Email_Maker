import { PaginationComponent as Pagination } from '@/modules/core/components/pagination'
import type { $OrderBy } from '@/modules/core/enum'
import { Loader } from '@/modules/core/icons'
import useGetUsers from '@/modules/users/hooks/useGetUsers'
import { useLocation } from 'react-router-dom'
import { CardUser } from './card'

function UserList() {
  const { search } = useLocation()
  const query = Object.fromEntries(new URLSearchParams(search))

  const { data, loading, error } = useGetUsers({
    q: query.q,
    page: Number(query.page),
    orderBy: query.orderBy as $OrderBy,
  })

  if (loading)
    return (
      <div className="w-full flex place-content-center my-8 h-80">
        <Loader />
      </div>
    )

  if (error) return <div>Error: {error}</div>

  return (
    <>
      <ul className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 py-5">
        {data?.map((user) => (
          <CardUser key={user.id} fullName={user.fullName} username={user.username} />
        ))}
      </ul>
      <Pagination />
    </>
  )
}

export default UserList
