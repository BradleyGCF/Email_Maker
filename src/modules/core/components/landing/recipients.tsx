import recipients1 from '/landing/recipients-1.png'
import recipients2 from '/landing/recipients-2.png'
import recipients3 from '/landing/recipients-3.png'
const images = [recipients1, recipients2, recipients3]

const recipientsCopy = [
  {
    id: 1,
    title: 'Pequeñas y medianas empresas (PYMES)',
    subtitle: 'Mejora tu comunicación por email de forma accesible y económica.',
  },
  {
    id: 2,
    title: ' Especialistas y profesionales del marketing digital',
    subtitle: 'Diseña campañas efectivas y atractivas de forma sencilla y rápida.',
  },
  {
    id: 3,
    title: 'Trabajadores independientes y emprendedores',
    subtitle: 'Proyecta una imagen profesional sin complicaciones ni conocimientos técnicos.',
  },
]
const recipients = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-8">
      <h3 className="font-bold text-[31.41px] font-inter mx-80 text-center">
        Una herramienta pensada para profesionales de todos los sectores
      </h3>
      <div className="flex mx-32 text-center">
        {recipientsCopy.map((r) => (
          <div key={r.id} className="flex flex-col items-center p-6 gap-16">
            <img src={images[r.id - 1]} alt={r.title} />
            <div className="flex flex-col gap-5 mx-4">
              <h3 className="font-bold mx-4">{r.title}</h3>
              <h6>{r.subtitle}</h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default recipients
