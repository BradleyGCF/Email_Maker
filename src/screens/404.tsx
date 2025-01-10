import { ButtonVariants } from '@/modules/core/ui/button'
import { Link } from '@/modules/core/ui/link'
import { cn } from '@/modules/core/utils'
import { Routes } from '@/routes'

export function Component() {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary underline">404</h1>
        <p className="text-2xl text-gray-600 mt-4">Página no encontrada</p>
        <p className="text-gray-500 mt-2">Lo sentimos, la página que estás buscando no existe.</p>
        <Link href={Routes.home} className={cn(ButtonVariants(), 'mt-4')}>
          <span>Volver al inicio</span>
        </Link>
      </div>
    </div>
  )
}
