import { cn } from '@/modules/core/utils'
import { array } from '@/modules/core/utils/array'
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons'

const table = () => {
  return (
    <table className="grid rounded-lg bg-white">
      <thead className="text-[#B5B7C0] w-full">
        <tr className="w-full flex justify-between py-6 px-[56px] border-b">
          <th className="w-56 text-left">Nombre</th>
          <th>Fecha</th>
          <th>Usuarios alcanzados</th>
          <th className="w-48 text-left">Opciones</th>
        </tr>
      </thead>
      <tbody className="w-full">
        {array(8).map((i) => {
          return (
            <tr
              key={i.i}
              className={cn('flex gap-4 py-6 px-[56px] bg-white w-full justify-between border-b', i.i === 7 && 'rounded-b-lg')}
            >
              <td>
                <p>Total E-mails enviados</p>
              </td>
              <td>
                <p>09/12/2025</p>
              </td>
              <td>
                <p>2300</p>
              </td>
              <td className="flex gap-2 w-48 text-left">
                <Pencil1Icon className="h-6 w-6" />
                <TrashIcon className="h-6 w-6" />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default table
