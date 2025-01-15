import Title from '@/modules/core/ui/title'
import Container from '@/modules/core/ui/viewContainer'
import Plans from '@/modules/users/components/Plans'
import UserData from '@/modules/users/components/UserData'
import Buttons from '@/modules/users/components/buttons'
export const Component = () => {
  return (
    <Container>
      <Title text="Mi perfil" />
      <UserData />
      <Plans />
      <Buttons />
    </Container>
  )
}
