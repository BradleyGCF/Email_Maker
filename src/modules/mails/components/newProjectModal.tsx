import Title from '@/modules/core/ui/title'
const newProjectModal = () => {
  return (
    <div className="w-screen h-screen absolute backdrop-blur-sm overflow-hidden top-0">
      <div className="bg-white rounded-3xl absolute left-[381px] top-20 p-[92px] max-w-[525px]">
        <div className="text-center font-bold font-inter grid gap-10">
          <Title text="Empieza tu proyecto" cls={'text-[21px]'} />
          <div className="flex gap-[26px]">
            <div className="grid gap-6 py-5 px-3 border-2 rounded-xl">
              <Title text="Desde cero" cls={'text-base uppercase'} />
              <p className="text-xs font-light">Crea un Proyecto con las herramientas de Email Maker</p>
            </div>
            <div className="grid gap-6 py-5 px-3 border-2 rounded-xl">
              <Title text="Con plantilla" cls={'text-base uppercase'} />
              <p className="text-xs font-light">Crea un Proyecto con las plantillas predeterminadas</p>
            </div>
          </div>
          <p className="text-xs">
            ¿Te falta inspiración? <span className="text-lightBlue">Prueba nuestras Plantillas</span> y disfruta de los mejores
            diseños
          </p>
        </div>
      </div>
    </div>
  )
}

export default newProjectModal
