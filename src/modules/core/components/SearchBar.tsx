import { Input } from '@/modules/core/ui/input'
import { FiSearch } from 'react-icons/fi'
import BasicButton from '../ui/button/basicButton'

const SearchBar = () => {
  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const input = form.get('templates-searchbar')
    alert(input)
  }

  return (
    <form
      id="templates-searchbar"
      name="templates-searchbar"
      onSubmit={(e) => handlerSubmit(e)}
      className="w-full gap-3 flex h-[2.8em] items-center relative"
    >
      <FiSearch className="absolute left-3" />
      <Input
        id="templates-searchbar"
        name="templates-searchbar"
        autoComplete="off"
        placeholder="Buscar"
        className=" h-full w-full border border-gray-300 rounded-md pl-9"
      />
      <BasicButton className="h-full px-10" text="Buscar" type="submit" />
    </form>
  )
}

export default SearchBar
