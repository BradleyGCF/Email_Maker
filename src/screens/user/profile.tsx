import Plans from '@/modules/users/components/Plans'
import UserData from '@/modules/users/components/UserData'
import Buttons from '@/modules/users/components/buttons'
export const Component = () => {
  return (
    <div className="bg-extraLightBlue grid gap-4 rounded-lg">
      <h1>Mi perfil</h1>
      <UserData />
      <Plans />
      <Buttons />
    </div>
  )
}
