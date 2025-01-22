import { cn } from '@/modules/core/utils'
import CheckMark from '/templates/CheckMark.png'
import Discount from '/templates/Discount.png'
import Email from '/templates/Email.png'
import EmailOpen from '/templates/EmailOpen.png'
import Enter from '/templates/Enter.png'
import EventAccepted from '/templates/EventAccepted.png'
import Launch from '/templates/Launch.png'
import Plus from '/templates/Plus.svg'

const templates = [
  {
    id: 1,
    icon: Plus,
    title: 'Nueva Plantilla',
    description: 'Crea una nueva plantilla desde cero. Utiliza los componentes',
  },
  {
    id: 2,
    icon: Discount,
    title: 'Promociones y Ofertas',
    description: 'Ofertas especiales, descuentos, promociones por tiempo limitado, y ventas estacionales.',
  },
  {
    id: 3,
    icon: EmailOpen,
    title: 'Boletines Informativos (Newsletters)',
    description: 'Actualizaciones periódicas, artículos destacados, noticias de la empresa o la industria.',
  },
  {
    id: 4,
    icon: Launch,
    title: 'Lanzamiento de Productos o Servicios',
    description: 'Anuncios de nuevos productos, características o servicios.',
  },
  {
    id: 5,
    icon: EventAccepted,
    title: 'Eventos y Webinars',
    description: 'Invitaciones a eventos, recordatorios y seguimientos post-evento.',
  },
  {
    id: 6,
    icon: Enter,
    title: 'Correo de Bienvenida y Onboarding',
    description: 'Mensajes para nuevos suscriptores, guías de introducción, o tours de productos.',
  },
  {
    id: 7,
    icon: CheckMark,
    title: 'Recordatorios y Confirmaciones',
    description: 'Recordatorios de citas, vencimientos, carritos abandonados o confirmaciones de compra.',
  },
  {
    id: 8,
    icon: Email,
    title: 'Correo de Reenganche (Re-Engagement)',
    description: 'Mensajes para recuperar usuarios inactivos, encuestas de satisfacción o recompensas.',
  },
]

const index = () => {
  return (
    <div className="w-full flex flex-wrap gap-x-4 gap-y-8 justify-center">
      {templates.map((t) => (
        <div
          key={t.id}
          className="flex flex-col place-items-center text-center p-8 rounded-lg bg-white grid gap-[42px] max-w-[306px] max-h-[366px]"
        >
          <img src={t.icon} alt="icon" className={cn('h-20', t.id === 1 && 'p-2')} />
          <h3 className={cn('font-bold text-[21px] h-10', t.id === 1 && 'text-lightBlue')}>{t.title}</h3>
          <p className={cn('text-[#666] h-16', t.id === 1 && 'text-[#D0D0D0]')}>{t.description}</p>
        </div>
      ))}
    </div>
  )
}

export default index
