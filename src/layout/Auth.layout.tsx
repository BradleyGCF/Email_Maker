import AuthBG from '@/assets/auth_bg.webp'
import { Arrow } from '@/modules/core/icons'
import { ButtonVariants } from '@/modules/core/ui/button'
import { cn } from '@/modules/core/utils'
import { Routes } from '@/routes'
import { Link, Outlet } from 'react-router-dom'

export default function AuthLayout() {
  // useAuth()

  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(${AuthBG})`,
        backgroundPosition: '0 0%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="grid h-full grid-cols-1 px-4">
        <div className="w-full max-w-md m-auto">
          <div className="w-full mb-4">
            <Link className={cn(ButtonVariants(), 'block w-fit')} to={Routes.home}>
              <Arrow direction="left" />
            </Link>
          </div>
          <div className="w-full p-5 border-2 border-black rounded-lg shadow-lg bg-white/80 backdrop-blur-sm">
            <header className="mb-8 text-center">
              <h1 className="text-5xl font-bold text-primary">LOGO</h1>
            </header>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
