import Button from '@/modules/core/ui/button/basicButton'

const buttons = () => {
  return (
    <div className="flex justify-end gap-4">
      <Button text="Cancelar" className="px-20 font-bold max-w-48 bg-transparent" outline={true} />
      <Button text="Guardar cambios" className="px-10 font-bold max-w-48" />
    </div>
  )
}

export default buttons
