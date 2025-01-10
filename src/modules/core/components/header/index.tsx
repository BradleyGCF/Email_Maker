import { Routes } from '@/routes'
import { Link } from 'react-router-dom'
import { MenuDesktop } from './menuDesktop'
import { MenuMobile } from './menuMobile'

export function Header() {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-neutral-800 dark:border-neutral-700">
      <nav
        className="relative container w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link className="flex-none text-xl font-semibold dark:text-white" to={Routes.home} aria-label="Brand">
            Brand
          </Link>
          <div className="sm:hidden">
            <MenuMobile />
          </div>
        </div>

        <MenuDesktop />
      </nav>
    </header>
  )
}
