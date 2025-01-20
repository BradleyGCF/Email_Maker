import SearchBar from '@/modules/core/ui/searchBar'
import Title from '@/modules/core/ui/title'
import Container from '@/modules/core/ui/viewContainer'
import { cn } from '@/modules/core/utils'
import NewProjectModal from '@/modules/mails/components/newProjectModal'
import Pagination from '@/modules/mails/components/pagination'
import EmailsStats from '@/modules/mails/components/stats'
import EmailsTable from '@/modules/mails/components/table'
import { Routes } from '@/routes'
import { useLocation } from 'react-router-dom'

export const Component = () => {
  const { pathname } = useLocation()
  const { newProject } = Routes

  return (
    <Container className={cn('relative', newProject && 'max-h-screen max-w-screen overflow-hidden')}>
      {pathname === newProject && <NewProjectModal />}
      <Title text="Lista de E-mails" />
      <SearchBar />
      <EmailsStats />
      <EmailsTable />
      <Pagination />
    </Container>
  )
}
