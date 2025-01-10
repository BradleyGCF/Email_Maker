import { Link } from 'react-router-dom'
import { cn } from '../../utils'
import { NavLinks } from './links'
import { UserNavar } from './userNav'

export function MenuDesktop() {
  return (
    <div className="hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
      <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
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
        <div className="sm:border-s sm:border-gray-300 sm:ps-6">
          <UserNavar />
        </div>
      </div>
    </div>
  )
}
