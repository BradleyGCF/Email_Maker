export * from './paths'
import AppLayout from '@/layout/App.layout'
import AuthLayout from '@/layout/Auth.layout'
import HomeLayout from '@/layout/Home.layout'
// import { $UserRole } from '@/modules/auth/enum'
import { createBrowserRouter } from 'react-router-dom'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'
import { HomeRoutes } from './home.routes'

export const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: HomeRoutes,
  },
  {
    element: (
      <AppLayout
      // role={$UserRole.USER}
      />
    ),
    children: AppRoutes,
  },
  {
    element: <AuthLayout />,
    children: AuthRoutes,
  },
  {
    path: '*',
    lazy: () => import('@/screens/404'),
  },
])
