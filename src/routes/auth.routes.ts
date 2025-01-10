import type { RouteObject } from 'react-router-dom'
import { Routes } from './paths'

// Login y SignUp
export const AuthRoutes = [
  {
    path: Routes.logIn,
    // Forma corta de importar - Es importante que este componente no esté exportado por defecto y DEBE que ser llamado "Component":
    // Ejemplo: export function Component() { return <div>Component</div> }
    lazy: () => import('@/screens/auth/logIn'),
  },
  {
    path: Routes.signUp,
    // Forma larga de import
    async lazy() {
      // Forma larga de importar - El componente no debe ser exportado por defecto y no importa el nombre
      const module = await import('@/screens/auth/signUp')
      return { Component: module.SignUpPage }
    },
  },
] as RouteObject[]
