import { cn } from '@/modules/core/utils'
import { array } from '@/modules/core/utils/array'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'

const pagination = () => {
  return (
    <footer className="flex w-full justify-between">
      <p className="text-[#666] ml-12">Mostrando 1 a 10 datos</p>
      <div className="flex gap-2.5 place-items-center">
        <div>
          <ChevronLeftIcon className="py-1 px-2 bg-white rounded-sm w-8 h-9" />
        </div>
        {array(4).map((i) => (
          <div key={i.i} className={cn('py-1.5 px-2.5 bg-white rounded-sm', i.i === 0 && 'bg-lightBlue text-white')}>
            {i.i}
          </div>
        ))}
        <ChevronRightIcon className="py-1 px-2 rounded-sm w-8 h-9" />
      </div>
    </footer>
  )
}

export default pagination
