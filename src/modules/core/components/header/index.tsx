import { Routes } from '@/routes'
import { Link } from 'react-router-dom'
import logo from '/landing/navbar_logo.svg'
import { MenuDesktop } from './menuDesktop'
import { MenuMobile } from './menuMobile'

export function Header() {
  return (
    <header
      className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-3 sm:py-0 dark:bg-neutral-800 dark:border-neutral-700"
      style={{ boxShadow: ' 0px 4px 19.1px 0px rgba(92, 140, 192, 0.13)' }}
    >
      <nav
        className="relative mx-10 w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 sm:py-6"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link className="flex-none text-xl font-semibold dark:text-white" to={Routes.home} aria-label="Brand">
            <img src={logo} alt="navbar_logo" />
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
