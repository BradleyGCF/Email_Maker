import recommended from '/landing/recommended.svg'
import tick from '/landing/tick.svg'
import Button from '../ui/button/basicButton'
import { cn } from '../utils'

interface ContentProps {
  plan: { id: number; name: string; price: string }
  advantages?: { id: number; text: string }[]
}

const planContent = ({ plan, advantages }: ContentProps) => {
  return (
    <>
      <div className={(!advantages && 'flex items-center justify-between') || ''}>
        <h3
          className={cn('text-darkBlue font-black text-[32px]', plan.id === 2 && advantages && 'mt-1', !advantages && 'text-2xl')}
        >
          Plan {plan.name}
        </h3>
        <p>
          <span className={cn('font-bold text-[32px]')}>{plan.price}$</span>/mes
        </p>
      </div>
      <p className="text-gray text-[15px] font-Avenir">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam
      </p>
      {plan.id === 2 && advantages && (
        <div
          className="absolute right-0 top-2 py-2"
          style={{ backgroundImage: `url(${recommended})`, backgroundRepeat: 'no-repeat' }}
        >
          <p className="text-white uppercase text-sm ml-2 px-2 font-bold font-inter self-center mt-1">Recomendado</p>
        </div>
      )}
      {advantages?.map((a) => (
        <div key={a.id} className="flex gap-2 mx-6 text-gray text-[15px] font-Avenir">
          <img src={tick} alt="tick" />
          {a.text}
        </div>
      ))}
      <Button text={advantages ? 'Comprar ahora' : 'Cambiar plan'} className="w-full" />
    </>
  )
}

export default planContent
