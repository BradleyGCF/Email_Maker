import type { SidebarItem } from '@/types/sidebar'
import { Link } from 'react-router-dom'
import { cn } from '../../utils'

const menuItem = ({ sbi, pathname }: { sbi: SidebarItem; pathname: string }) => {
  const { iconFilled, iconDefault, link, title } = sbi
  return (
    <Link
      to={link}
      className={cn(
        'transition-colors rounded-md flex justify-center items-center p-1.5',
        pathname === link ? 'bg-lightBlue' : title === 'Search' ? 'bg-[#F1F1F1]' : title !== 'home' ? 'bg-extraLightBlue' : 'p-1'
      )}
    >
      {pathname === link ? iconFilled : iconDefault}
    </Link>
  )
}

export default menuItem
