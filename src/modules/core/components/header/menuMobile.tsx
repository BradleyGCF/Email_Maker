import { useSession } from '@/modules/core/hooks/useSession'
import { Popover, PopoverContent, PopoverTrigger } from '@/modules/core/ui/popover'
import { Routes } from '@/routes'
import { Link } from 'react-router-dom'
import { $SessionStatus } from '../../enum'
import { Logout } from '../../icons'
import { ButtonVariants } from '../../ui/button'
import { cn } from '../../utils'
import { Avatar } from '../avatar'
import { NavLinks } from './links'

export const MenuMobile = () => {
  const { user, signOut, status } = useSession()

  return (
    <Popover>
      <PopoverTrigger className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700">
        <svg className="hs-collapse-open:hidden size-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <title>Menu</title>
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        <svg
          className="hs-collapse-open:block flex-shrink-0 hidden size-4"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <title>Menu</title>
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </PopoverTrigger>
      <PopoverContent className="w-60 flex flex-col bg-white text-black">
        <div className="flex flex-col gap-y-4">
          {status === $SessionStatus.AUTHENTICATED && (
            <Link to={Routes.user.profile} className="flex justify-center font-semibold">
              <Avatar src="" alt={user?.email || 'U'} />
            </Link>
          )}

          {NavLinks.map((link) => (
            <Link
              key={link.label}
              className={cn(
                'font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-neutral-400 dark:hover:text-neutral-500',
                location.pathname.includes(link.href) ? 'text-blue-600 sm:py-6 dark:text-blue-500' : ''
              )}
              to={link.href}
            >
              {link.label}
            </Link>
          ))}

          {status === $SessionStatus.UNAUTHENTICATED ? (
            <Link to={Routes.logIn} className={cn(ButtonVariants(), 'flex justify-center font-semibold')}>
              Iniciar sesión
            </Link>
          ) : (
            <button
              onClick={signOut}
              type="button"
              className="flex items-center justify-center gap-2 text-white bg-red-400 hover:bg-white border border-white hover:text-red-400 hover:border-red-400 duration-200 w-full py-1 px-3 rounded text-center"
            >
              <span>Cerrar sesión</span>
              <Logout />
            </button>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
