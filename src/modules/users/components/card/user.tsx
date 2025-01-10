import { Person } from '@/modules/core/icons'
import { Card } from '@/modules/core/ui/card'
import type { User } from '@/types'

export const CardUser = ({ fullName, username }: Pick<User, 'fullName' | 'username'>) => {
  return (
    <Card component="li" className="h-96 flex flex-col justify-between relative overflow-hidden p-0">
      <div className="w-full h-full grid place-content-center">
        <Person className="w-40 h-40" />
      </div>

      <picture className="w-full grid place-content-center mt-4 absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="avatar"
          className="object-cover -z-[1]"
        />
      </picture>
      <div />
      <div className="flex flex-col gap-1 backdrop-blur-[2px] px-4 py-2 bg-neutral-200/10 border-t">
        <h2 className="font-semibold text-lg">{fullName}</h2>
        <span className="text-green-500">{username}</span>
      </div>
    </Card>
  )
}
