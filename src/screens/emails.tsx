import SearchBar from '@/modules/core/ui/searchBar'
import Title from '@/modules/core/ui/title'
import Container from '@/modules/core/ui/viewContainer'
import Pagination from '@/modules/mails/components/pagination'
import EmailsStats from '@/modules/mails/components/stats'
import EmailsTable from '@/modules/mails/components/table'

export const Component = () => {
  return (
    <Container>
      <Title text="Lista de E-mails" />
      <SearchBar />
      <EmailsStats />
      <EmailsTable />
      <Pagination />
    </Container>
  )
}
