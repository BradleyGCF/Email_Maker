import type { RouteObject } from 'react-router-dom'
import { Routes } from './paths'

export const HomeRoutes = [
  {
    path: Routes.home,
    async lazy() {
      // Forma larga de importar - El componente no debe ser exportado por defecto y no importa el nombre
      const module = await import('@/screens/home')
      return { Component: module.default, loader: module.loader }
    },
  },
] as RouteObject[]
