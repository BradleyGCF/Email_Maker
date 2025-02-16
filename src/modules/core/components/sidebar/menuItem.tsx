import { Routes } from '@/routes'
import type { SidebarItem } from '@/types'
import { Link } from 'react-router-dom'
import { cn } from '../../utils'

const menuItem = ({ sbi, pathname }: { sbi: SidebarItem; pathname: string }) => {
  const { iconFilled, iconDefault, link, title } = sbi
  const { IaChat, home, newProject, emails, IaRecommendation, editor } = Routes

  return (
    <Link
      to={link}
      className={cn(
        'transition-colors rounded-md flex justify-center items-center p-1.5',
        pathname === link && title !== IaChat
          ? 'bg-lightBlue'
          : title === 'Search'
            ? 'bg-[#F1F1F1]'
            : title === home
              ? '1'
              : pathname === newProject && link === emails
                ? 'bg-lightBlue'
                : pathname === IaRecommendation && link === editor
                  ? 'bg-lightBlue'
                  : pathname !== link && title === IaChat
                    ? 'bg-extraLightBlue'
                    : title !== IaChat
                      ? 'bg-extraLightBlue'
                      : ''
      )}
    >
      {pathname === link
        ? iconFilled
        : pathname === newProject && link === emails
          ? iconFilled
          : pathname === IaRecommendation && link === editor
            ? iconFilled
            : iconDefault}
    </Link>
  )
}

export default menuItem
