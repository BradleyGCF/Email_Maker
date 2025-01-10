import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from '@/modules/core/ui/pagination'
import type { FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { cn } from '../utils'

export function PaginationComponent({ maxPages }: { maxPages?: number }) {
  const { search } = useLocation()
  const query = Object.fromEntries(new URLSearchParams(search))
  const page = Number.parseInt(query.page) || 1
  const lastPage = maxPages || 6

  const navigate = useNavigate()
  const url = new URL(globalThis.location.href)

  const handlerNextPage = () => {
    if (page >= lastPage) {
      return
    }
    url.searchParams.set('page', (page + 1).toString())
    navigate(url.pathname + url.search)
  }

  const handlerPreviousPage = () => {
    if (page === 1) {
      url.searchParams.delete('page')
      navigate(url.pathname + url.search)
      return
    }
    url.searchParams.set('page', (page - 1).toString())
    navigate(url.pathname + url.search)
  }

  const handlerGoToPage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const inputPage = Number(form.get('page'))
    if (inputPage > lastPage || inputPage < 1) {
      return
    }
    url.searchParams.set('page', inputPage.toString())
    navigate(url.pathname + url.search)
  }

  return (
    <form onSubmit={handlerGoToPage}>
      <Pagination className="text-sm">
        <PaginationContent className="p-1">
          <PaginationItem className={cn(page === 1 ? 'cursor-not-allowed' : 'cursor-pointer')} onClick={handlerPreviousPage}>
            <PaginationPrevious />
          </PaginationItem>

          <PaginationItem>
            {/* <input
              name="page"
              placeholder={page.toString()}
              min={1}
              className="w-12 bg-transparent outline-none appearance-none border-b border-b-primary text-center"
              type="number"
              max={maxPages}
            /> */}
            <span className="py-2 px-4 bg-white rounded-md">{page}</span>
          </PaginationItem>
          {/* <PaginationItem>
            <Button type="submit" variant="ghost">
              ir
            </Button>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>{maxPages}</PaginationLink>
          </PaginationItem> */}
          <PaginationItem className={cn(page === maxPages ? 'cursor-not-allowed' : 'cursor-pointer')} onClick={handlerNextPage}>
            <PaginationNext />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </form>
  )
}
