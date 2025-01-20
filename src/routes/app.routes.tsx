// import { $UserRole } from '@/modules/auth/enum'
// import { ProtectedRoute } from '@/modules/core/context/ProtectedRoute.provider'
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
    lazy: () => import('@/screens/user/profile'),
  },
  {
    path: Routes.editor,
    lazy: () => import('@/screens/editor'),
  },
  {
    path: Routes.templates,
    lazy: () => import('@/screens/templates'),
  },
  {
    path: Routes.newProject,
    lazy: () => import('@/screens/emails'),
  },
  {
    path: Routes.emails,
    lazy: () => import('@/screens/emails'),
  },
  {
    path: Routes.IaChat,
    lazy: () => import('@/screens/editor'),
  },
] as RouteObject[]
