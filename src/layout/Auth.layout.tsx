// import AuthBG from '@/assets/auth_bg.webp'
// import { Arrow } from '@/modules/core/icons'
// import { ButtonVariants } from '@/modules/core/ui/button'
// import { cn } from '@/modules/core/utils'
// import { Routes } from '@/routes'
import {
  // Link,
  Outlet,
} from 'react-router-dom'
import icon from '/logo_icon.svg'
import logotype from '/logo_logotype.svg'

export default function AuthLayout() {
  // useAuth()

  return (
    <div className="min-h-screen mt-20 mb-10">
      <div className="grid h-full grid-cols-1 px-4">
        <div className="w-full max-w-md m-auto flex flex-col justify-center items-center gap-10">
          {/* <div className="w-full mb-4">
            <Link className={cn(ButtonVariants(), 'block w-fit')} to={Routes.home}>
              <Arrow direction="left" />
            </Link>
          </div> */}
          <div className="flex items-center gap-6">
            <img src={icon} alt="logo" />
            <img src={logotype} alt="logo" />
          </div>
          <div className="w-full p-8 rounded-3xl shadow-auth backdrop-blur-sm">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
