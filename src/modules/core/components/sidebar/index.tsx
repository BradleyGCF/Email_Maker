import type { SidebarItem } from '@/types/sidebar'
// import { $UserRole } from '@/modules/auth/enum'
// import { useUserStore } from '@/store'
// import { Routes } from '@/routes'
// import { useSidebarStore } from '@/store/sidebar'
import {
  // useEffect,
  useRef,
} from 'react'
// import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs'
import { useLocation } from 'react-router-dom'
// import { useSession } from '../../hooks/useSession'
//import { useStore } from 'zustand'
// import { Logout } from '../../icons'
import { cn } from '../../utils'
import MenuItem from './menuItem'
import { getLinks } from './sidebarLinks'

const Sidebar = () => {
  const { pathname } = useLocation()
  // const { signOut } = useSession()
  const { mainlinks, bottomLinks } = getLinks()
  // const { open, setOpen } = useSidebarStore()
  const ref = useRef<HTMLDivElement>(null)
  // const { user } = useUserStore()

  // // biome-ignore lint/correctness/useExhaustiveDependencies:
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (ref.current && !ref.current.contains(event.target as Node)) {
  //       setOpen(false)
  //     }
  //   }

  //   document.addEventListener('mousedown', handleClickOutside)

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside)
  //   }
  // }, [ref.current, setOpen])

  return (
    <div
      ref={ref}
      className={cn(
        'lg:sticky lg:top-3',
        'fixed z-50 left:0 -translate-x-100 flex transition-transform',
        'w-[91px] h-[calc(100vh-24px)]',
        'flex-col justify-between items-center py-6 px-4',
        'rounded-md border'
        // open ? 'translate-x-0' : '-translate-x-[100%] lg:translate-x-0'
      )}
    >
      <div className="flex flex-col items-center gap-8">
        {/* <button
          type="button"
          onClick={() => setOpen(!open)}
          className="absolute lg:hidden flex p-1 bg-foreground -right-[33px] top-1 rounded-e-full border border-l-0 border-white"
        >
          {open ? (
            <BsChevronDoubleLeft className="h-6 w-6 text-white" />
          ) : (
            <BsChevronDoubleRight className="h-6 w-6 text-white" />
          )}
        </button> */}
        {/* <div className="w-full flex items-center gap-4">
          <div className="avatar">
            <div className="h-20 ring-white ring-offset-base-100 w-20 rounded-full ring ring-offset-2 overflow-hidden">
              {imgUrl ? (
                <img src={imgUrl} alt="imagen de perfil" />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-white font-bold text-3xl">
                  <p>DM</p>
                </div>
              )}
            </div>
          </div>
          <div className="w-[60%]">
            <p className="text-sm">Nombre y apellido</p>
            <button type="button" className="text-xs">
              Editar perfil
            </button>
          </div>
        </div> */}
        <nav className="flex flex-col items-center justify-center gap-4">
          {mainlinks?.map((sbi: SidebarItem) => {
            return (
              <div key={sbi.title} className={cn('flex gap-4 items-center rounded-lg p-2', sbi.title === 'home' && 'p-0')}>
                <MenuItem sbi={sbi} pathname={pathname} />
              </div>
            )
          })}
          {/* {pathname.includes(dashboard.creator.home) && (
            <>
              {creatorSidebarLinks.map((sbl) => {
                return (
                  <div
                    key={sbl.title}
                    className={cn(
                      'flex gap-4 items-center rounded-lg p-2',
                      pathname === sbl.link ? 'bg-tertiary text-cuaternary' : 'text-primary'
                    )}
                  >
                    {sbl.icon}
                    <MenuItem name={sbl.title} pathname={pathname} path={sbl.link} />
                  </div>
                )
              })}
            </>
          )} */}
        </nav>
      </div>
      {/* <button onClick={signOut} type="button" className="flex gap-4 items-center justify-end w-full font-bold text-lg">
        <Logout className="h-8 w-8" />
        <p>Logout</p>
      </button> */}
      <div className="flex flex-col gap-4">
        {bottomLinks?.map((sbi: SidebarItem) => {
          return (
            <div key={sbi.title} className={cn('flex gap-4 items-center rounded-lg p-2', sbi.title === 'home' && 'p-0')}>
              <MenuItem sbi={sbi} pathname={pathname} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
