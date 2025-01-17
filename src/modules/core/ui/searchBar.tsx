import { FaMagnifyingGlass as SearchIcon } from 'react-icons/fa6'
import Button from './button/basicButton'

const searchBar = ({ searchBtn }: { searchBtn?: boolean }) => {
  return (
    <div className="flex gap-4">
      <div className="flex gap-2 w-full bg-white border rounded-lg p-2.5 items-center">
        <SearchIcon fill="#828282" className="w-2.5 h-2.5" />
        <input type="text" className="text-sm text-[#828282] w-full" placeholder="Search" />
      </div>
      {searchBtn && <Button text="Buscar" className="p-2.5 w-56" />}
    </div>
  )
}

export default searchBar
