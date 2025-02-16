import PlanContent from '@/modules/core/components/planContent'
import Title from '@/modules/core/ui/title'
import { plansNames } from '@/modules/core/utils/plans'
import { Routes } from '@/routes'
import { useNavigate } from 'react-router-dom'

const Plans = () => {
  const navigate = useNavigate()

  const handler = () => {
    navigate(Routes.plans)
  }
  return (
    <div className="flex gap-6 ">
      <div className="p-8 bg-white grid gap-8 rounded-2xl">
        <Title text="Plan activo" />
        <div className="border rounded-lg p-6 space-y-6">
          <PlanContent plan={plansNames[1]} handler={handler} />
        </div>
      </div>
      <div className="flex flex-col bg-white p-8 gap-8 rounded-2xl">
        <Title text="Otros planes" />
        <div className="flex gap-2">
          <div className="border rounded-lg p-6 space-y-6">
            <PlanContent plan={plansNames[0]} handler={handler} />
          </div>
          <div className="border rounded-lg p-6 space-y-6">
            <PlanContent plan={plansNames[2]} handler={handler} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plans
