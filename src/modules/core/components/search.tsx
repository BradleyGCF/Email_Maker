import { Search as SearchIcon } from '@/modules/core/icons'
import { useNavigate } from 'react-router-dom'

export default function Search() {
  const navigate = useNavigate()
  const url = new URL(globalThis.location.href)

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = new FormData(event.currentTarget)

    const q = form.get('q') as string

    console.log(q)

    q?.length > 0 ? url.searchParams.set('q', q) : url.searchParams.delete('q')

    navigate(url.pathname + url.search)
  }

  return (
    <form
      onSubmit={(e) => handlerSubmit(e)}
      className="bg-white shadow-lg border rounded-md max-w-lg w-full flex gap-1 items-center py-1 pr-1 pl-3"
    >
      <input
        placeholder="Buscar"
        type="search"
        className="bg-transparent outline-none w-full"
        defaultValue={String(url.searchParams.get('q') || '')}
        name="q"
      />
      <button type="submit" className="bg-neutral-50 text-neutral-500 rounded-lg p-2">
        <SearchIcon />
      </button>
    </form>
  )
}
