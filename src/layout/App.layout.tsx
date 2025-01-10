import { $UserRole } from '@/modules/auth/enum'
import { Footer } from '@/modules/core/components/footer'
import { Header } from '@/modules/core/components/header'
import { ProtectedRoute } from '@/modules/core/context/ProtectedRoute.provider'
import { Container } from '@/modules/core/ui/container'
import { Routes } from '@/routes'
import type { UserRole } from '@/types'
import { Outlet } from 'react-router-dom'

const Common = () => {
  return (
    <>
      <Header />
      <Container component="main" className="min-h-[80dvh] my-4 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}

export default function AppLayout({ role }: { role: UserRole }) {
  // useAuth()
  if (role === $UserRole.ADMIN) {
    return (
      <ProtectedRoute redirect={Routes.logIn as unknown as string} rolesAllowed={[$UserRole.ADMIN]}>
        <Common />
      </ProtectedRoute>
    )
  }

  if (role === $UserRole.USER) {
    return (
      <ProtectedRoute redirect={Routes.logIn as unknown as string} rolesAllowed={[$UserRole.USER]}>
        <Common />
      </ProtectedRoute>
    )
  }

  return <span>No tiene permisos</span>
}
