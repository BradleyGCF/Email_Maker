import { useSession } from '@/modules/core/hooks/useSession'
import { Routes } from '@/routes'
import type { UserRole } from '@/types'
import { type PropsWithChildren, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

type ProtectedRouteProps = PropsWithChildren & {
  redirect?: string
  rolesAllowed?: UserRole[]
}

export const ProtectedRoute = ({ children, redirect, rolesAllowed }: ProtectedRouteProps) => {
  const { user } = useSession()
  const navigate = useNavigate()

  useEffect(() => {
    const redirectTo = redirect ?? Routes.logIn
    if (!user?.sessionToken || !rolesAllowed?.includes(user?.role)) {
      navigate(redirectTo)
    }
  }, [user, navigate, redirect, rolesAllowed])

  return children
}
