import Features from '/landing/features.png'
import { StartButton } from '../../ui/button/startButton'

const featuresDescriptions = [
  {
    id: 1,
    subtitle: 'Diseños personalizables: ',
    text: 'escoge entre plantillas variadas y ajusta colores, fuentes y logos para reflejar tu marca.',
  },
  {
    id: 2,
    subtitle: 'Edición intuitiva: ',
    text: 'arrastra, suelta y crea correos sin complicaciones, con acceso a imágenes libres de derechos.',
  },
  {
    id: 3,
    subtitle: 'Opciones de exportación: ',
    text: 'guarda tus correos en formatos como HTML, PNG o PDF y añade enlaces clicables fácilmente.',
  },
  {
    id: 4,
    subtitle: 'Soporte y funciones premium: ',
    text: 'recibe ayuda técnica siempre que la necesites y accede a herramientas avanzadas con un plan premium.',
  },
]

const features = () => {
  return (
    <section className="flex justify-center items-center gap-8 py-6 px-8 shadow-landing rounded-3xl">
      <img src={Features} alt="features" />
      <div className="space-y-6">
        <h3 className="font-bold text-[33px] leading-[1.1]">
          Funcionalidades para <span className="text-lightBlue">personalizar</span> y exportar tus correos
        </h3>
        <ol className="list-disc space-y-2 mx-8">
          {featuresDescriptions.map((fd) => (
            <li key={fd.id}>
              <p>
                <span className="font-bold">{fd.subtitle}</span>
                {fd.text}
              </p>
            </li>
          ))}
        </ol>
        <StartButton />
      </div>
    </section>
  )
}

export default features
