import { Routes } from '@/routes'
import logo from '/landing/navbar_logo.svg'
import { cn } from '../utils'

const aboutUs = [
  { id: 1, name: 'Sobre nosotros' },
  { id: 2, name: 'Plataforma' },
  { id: 3, name: 'Contacto' },
]

const services = [
  { id: 1, name: 'Servicios' },
  { id: 2, name: 'Audiencia' },
  { id: 3, name: 'Funcionalidades' },
  { id: 4, name: 'Beneficios' },
]

const legals = [
  { id: 1, name: 'Legales' },
  { id: 2, name: 'Términos y condiciones' },
  { id: 3, name: 'Política de privacidad' },
]

export function Footer() {
  return (
    <footer className="pt-20 pb-8 w-full px-4 sm:px-6 lg:px-[120px] mx-auto bg-[#F9F9F9]">
      <div className="text-center container flex justify-between">
        <div>
          <a className="flex-none text-xl font-semibold text-black dark:text-white" href={Routes.home} aria-label="Brand">
            <img src={logo} alt="footer_logo" />
          </a>
        </div>
        <div className="flex w-full">
          <div className="w-full">
            {aboutUs.map((a) => (
              <div key={a.id} className={cn('text-darkBlue', a.id === 1 && 'font-bold')}>
                {a.name}
              </div>
            ))}
          </div>
          <div className="w-full">
            {services.map((a) => (
              <div key={a.id} className={cn('text-darkBlue', a.id === 1 && 'font-bold')}>
                {a.name}
              </div>
            ))}
          </div>
          <div className="w-full">
            {legals.map((a) => (
              <div key={a.id} className={cn('text-darkBlue', a.id === 1 && 'font-bold')}>
                {a.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center mt-10 text-darkBlue">Copyright 0000 Nombre all rights reserved</p>
    </footer>
  )
}
