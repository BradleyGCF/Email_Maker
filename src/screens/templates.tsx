import SearchBar from '@/modules/core/ui/searchBar'
import Title from '@/modules/core/ui/title'
import Container from '@/modules/core/ui/viewContainer'
import Templates from '@/modules/templates/components'

export const Component = () => {
  return (
    <Container>
      <Title text="Plantillas" />
      <SearchBar searchBtn={true} />
      <Templates />
    </Container>
  )
}
