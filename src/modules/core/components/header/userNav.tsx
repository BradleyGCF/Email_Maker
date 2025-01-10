import { useSession } from '@/modules/core/hooks/useSession'
import { Popover, PopoverContent, PopoverTrigger } from '@/modules/core/ui/popover'
import { Routes } from '@/routes'
import { Link } from 'react-router-dom'
import { Logout, Person } from '../../icons'
import { Avatar } from '../avatar'

export const UserNavar = () => {
  const { user, signOut } = useSession()

  if (!user)
    return (
      <Link className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600" to={Routes.logIn}>
        <Person />
        Log in
      </Link>
    )

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar src="" alt={user?.email || 'U'} />
      </PopoverTrigger>
      <PopoverContent className="w-60 flex flex-col bg-white text-black">
        <div>
          <div className="space-y-2 flex justify-around items-center ">
            <div className="flex items-center font-semibold">
              <Link to={Routes.user.profile}>{user?.email}</Link>
            </div>
          </div>
          <div className="flex justify-around items-center mt-3">
            <button
              onClick={signOut}
              type="button"
              className="flex items-center justify-center gap-2 text-white bg-red-400 hover:bg-white border border-white hover:text-red-400 hover:border-red-400 duration-200 w-full py-1 px-3 rounded text-center"
            >
              <span>Cerrar session</span>
              <Logout />
            </button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
