import { useRefStore } from '@/store/refStore'
import { useEffect, useRef, useState } from 'react'
import { cn } from '../../utils'
import { plansNames } from '../../utils/plans'
import { advantages } from '../../utils/plans'
import PlanContent from '../planContent'

const PlansSection = () => {
  const [selected, setSelected] = useState(1)
  const ref = useRef<HTMLElement | null>(null)
  const { setRef } = useRefStore()

  useEffect(() => {
    if (ref.current !== null) setRef(ref)
  }, [setRef])

  return (
    <section ref={ref}>
      <div className="flex gap-12 font-inter mx-28">
        {plansNames.map((p, index) => (
          <div
            key={p.id}
            className={cn(
              'relative p-6 shadow-landing rounded-3xl space-y-6',
              index === selected && 'border-2 border-lightBlue shadow-landingIntense'
            )}
            onClick={() => setSelected(index)}
            onKeyDown={() => setSelected(index)}
          >
            <PlanContent plan={p} advantages={advantages} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default PlansSection
