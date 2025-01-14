import Logo from '@/modules/core/ui/logo'
// import AuthBG from '@/assets/auth_bg.webp'
// import { Arrow } from '@/modules/core/icons'
// import { ButtonVariants } from '@/modules/core/ui/button'
// import { cn } from '@/modules/core/utils'
// import { Routes } from '@/routes'
import {
  // Link,
  Outlet,
  useLocation,
} from 'react-router-dom'

export default function AuthLayout() {
  // useAuth()
  const location = useLocation()
  return (
    <div className="min-h-screen mt-20 mb-10">
      {location.pathname.includes('/plans') ? (
        <div className="w-full px-10 flex flex-col justify-center items-center gap-10">
          <Logo />
          <Outlet />
        </div>
      ) : (
        <div className="grid h-full grid-cols-1 px-4">
          <div className="w-full max-w-md m-auto flex flex-col justify-center items-center gap-10">
            {/* <div className="w-full mb-4">
            <Link className={cn(ButtonVariants(), 'block w-fit')} to={Routes.home}>
              <Arrow direction="left" />
            </Link>
          </div> */}
            <Logo />
            <div className="w-full p-8 rounded-3xl shadow-auth backdrop-blur-sm">
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
