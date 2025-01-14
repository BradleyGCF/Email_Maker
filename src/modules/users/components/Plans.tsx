import PlanContent from '@/modules/core/components/planContent'
import { plansNames } from '@/modules/core/utils/plans'

const Plans = () => {
  return (
    <div className="flex gap-6">
      <div className="p-8 bg-white grid gap-4 rounded-2xl">
        <h3 className="text-[21px] font-bold">Plan activo</h3>
        <div className="border rounded-lg p-6">
          <PlanContent plan={plansNames[1]} />
        </div>
      </div>
      <div className="flex flex-col bg-white p-8 gap-4 rounded-2xl">
        <h3 className="text-[21px] font-bold">Otros planes</h3>
        <div className="flex gap-2">
          <div className="border rounded-lg p-6">
            <PlanContent plan={plansNames[0]} />
          </div>
          <div className="border rounded-lg p-6">
            <PlanContent plan={plansNames[2]} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plans
