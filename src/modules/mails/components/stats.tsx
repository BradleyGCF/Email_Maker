import { array } from '@/modules/core/utils/array'
import DonutChart from '@/modules/mails/components/donut3'

const stats = () => {
  return (
    <div className="flex gap-4">
      {array(3).map((i) => {
        return (
          <div key={i.i} className="flex p-4 gap-4 rounded-lg bg-white justify-between w-full">
            <div>
              <h6 className="text-[#B5B7C0]">Total E-mails enviados</h6>
              <p className="text-[30px] font-bold">4506</p>
              <p className="text-[#C6C7F0] font-Poppins text-sm">+%40.20</p>
            </div>
            <DonutChart />
          </div>
        )
      })}
    </div>
  )
}

export default stats
