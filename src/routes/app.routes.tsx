// import { $UserRole } from '@/modules/auth/enum'
// import { ProtectedRoute } from '@/modules/core/context/ProtectedRoute.provider'
import Profile from '@/screens/user/profile'
// import type { UserRole } from '@/types'
import type { RouteObject } from 'react-router-dom'
import { Routes } from './paths'

// Los roles permitidos para acceder a la ruta
// const rolesAllowed: UserRole[] = [$UserRole.USER]

// Rutas de la aplicación
export const AppRoutes = [
  {
    path: Routes.home,
    async lazy() {
      // Forma larga de importar - El componente no debe ser exportado por defecto y no importa el nombre
      const module = await import('@/screens/home')
      return { Component: module.default, loader: module.loader }
    },
  },
  {
    path: Routes.user.profile,
    element: (
      // <ProtectedRoute redirect={Routes.logIn as unknown as string} rolesAllowed={rolesAllowed}>
      <Profile />
      // </ProtectedRoute>
    ),
  },
] as RouteObject[]
