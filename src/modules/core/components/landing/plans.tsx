import { useRefStore } from '@/store/refStore'
import { useEffect, useRef, useState } from 'react'
import recommended from '/landing/recommended.svg'
import tick from '/landing/tick.svg'
import Button from '../../ui/button/basicButton'
import { cn } from '../../utils'
const plansNames = [
  { id: 1, name: 'FREE', price: '0' },
  { id: 2, name: 'PRO', price: '100' },
  { id: 3, name: 'CLÁSICO', price: '50' },
]
const advantages = [
  { id: 1, text: 'Lorem ipsum' },
  { id: 2, text: 'Lorem ipsum dolor' },
  { id: 3, text: 'Lorem ipsum ad' },
  { id: 4, text: 'Lorem ipsum dolor sit am' },
  { id: 5, text: 'Lorem ipsum labore' },
]
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
            <h3 className={cn('text-darkBlue font-black text-[32px]', index === 1 && 'mt-1')}>Plan {p.name}</h3>
            <p>
              <span className="text-[32px] font-bold">{p.price}$</span>/mes
            </p>
            <p className="text-gray text-[15px] font-Avenir">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam
            </p>
            {index === 1 && (
              <div
                className="absolute right-0 top-2 py-2"
                style={{ backgroundImage: `url(${recommended})`, backgroundRepeat: 'no-repeat' }}
              >
                <p className="text-white uppercase text-sm ml-2 px-2 font-bold font-inter self-center mt-1">Recomendado</p>
              </div>
            )}
            {advantages.map((a) => (
              <div key={a.id} className="flex gap-2 mx-6 text-gray text-[15px] font-Avenir">
                <img src={tick} alt="tick" />
                {a.text}
              </div>
            ))}
            <Button text="Comprar ahora" className="w-full" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default PlansSection
