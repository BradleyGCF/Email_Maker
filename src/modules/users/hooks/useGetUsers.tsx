import { $OrderBy } from '@/modules/core/enum'
// import { getAllUsers } from '@/services/users'
import type { OrderBy, Pagination, Search, User } from '@/types'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { getAllUsers } from '../services'

const useGetUsers = (props: Pagination & Search & OrderBy = { page: 1, orderBy: $OrderBy.ASC }) => {
  const [data, setData] = useState<Pick<User, 'email' | 'id' | 'fullName' | 'username'>[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)

    const page = props.page || 1

    getAllUsers({
      q: props.q,
      orderBy: props.orderBy,
      page,
    })
      .then((response) => {
        if (response?.error || !response.data) {
          toast.error(response?.error)
          setError(response?.error)
          return
        }
        setError(null)
        setData(response.data)
      })
      .catch((error) => {
        console.error(error)
        setError('Error al obtener los datos')
        toast.error('Server error')
      })
      .finally(() => {
        setLoading(false)
      })

    return () => {
      setData(null)
      setError(null)
    }
  }, [props.page, props.q, props.orderBy])

  return {
    data,
    loading,
    error,
  }
}

export default useGetUsers
