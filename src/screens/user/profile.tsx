import Title from '@/modules/core/ui/title'
import Plans from '@/modules/users/components/Plans'
import UserData from '@/modules/users/components/UserData'
import Buttons from '@/modules/users/components/buttons'
export const Component = () => {
  return (
    <div className="bg-extraLightBlue space-y-8 rounded-lg px-4 py-6 pb-16">
      <Title text="Mi perfil" />
      <UserData />
      <Plans />
      <Buttons />
    </div>
  )
}
