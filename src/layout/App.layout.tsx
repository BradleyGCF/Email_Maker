import Sidebar from '@/modules/core/components/sidebar'
// import { $UserRole } from '@/modules/auth/enum'
// import { ProtectedRoute } from '@/modules/core/context/ProtectedRoute.provider'
// import { Container } from '@/modules/core/ui/container'
// import { Routes } from '@/routes'
// import type { UserRole } from '@/types'
import { Outlet } from 'react-router-dom'

const Common = () => {
  return (
    <>
      <div className="flex m-3 gap-3">
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default function AppLayout(
  //   { role }
  // : { role: UserRole }
) {
  // useAuth()
  // if (role === $UserRole.ADMIN) {
  //   return (
  //     <ProtectedRoute redirect={Routes.logIn as unknown as string} rolesAllowed={[$UserRole.ADMIN]}>
  // <Common />
  //     </ProtectedRoute>
  //   )
  // }

  // if (role === $UserRole.USER) {
  //   return (
  //     <ProtectedRoute redirect={Routes.logIn as unknown as string} rolesAllowed={[$UserRole.USER]}>
  return <Common />
  //     </ProtectedRoute>
  //   )
  // }

  // return <span>No tiene permisos</span>
}
