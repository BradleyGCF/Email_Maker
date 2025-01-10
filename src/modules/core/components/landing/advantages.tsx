import Advantages from '/landing/advantages.png'
import { StartButton } from '../../ui/button/startButton'

const advantagesDescriptions = [
  {
    id: 1,
    text: [
      { frag: 'Crear correos electrónicos profesionales es más fácil que nunca con una herramienta que combina ' },
      { frag: 'plantillas personalizables', highlight: true },
      { frag: ' e interfaz intuitiva. Diseñar mensajes atractivos ya no requiere conocimientos técnicos avanzados, lo que ' },
      { frag: 'ahorra tiempo', highlight: true },
      { frag: ' y permite producir correos de forma rápida y eficiente. ' },
    ],
  },
  {
    id: 2,
    text: [
      { frag: 'Además, esta ' },
      { frag: 'simplicidad', highlight: true },
      {
        frag: ' mejora la comunicación, ayudando a que más personas lean y respondan a los correos. Tanto principiantes como expertos pueden crear mensajes que destacan, asegurando un equilibrio perfecto entre ',
      },
      { frag: 'profesionalismo y practicidad.', highlight: true },
    ],
  },
]

const advantages = () => {
  return (
    <section className="flex justify-center items-center gap-8 py-6 px-8 shadow-landing rounded-3xl">
      <div className="space-y-6">
        <h3 className="font-bold text-[33px] leading-[1.1]">
          Las ventajas que <span className="text-lightBlue">transformarán</span> tu comunicación
        </h3>
        <ol className="space-y-2">
          {advantagesDescriptions.map((fd) => (
            <li key={fd.id}>
              <p>
                {fd.text.map((f) =>
                  f.highlight ? (
                    <span key={f.frag} className="font-bold">
                      {f.frag}
                    </span>
                  ) : (
                    f.frag
                  )
                )}
              </p>
            </li>
          ))}
        </ol>
        <StartButton />
      </div>
      <img src={Advantages} alt="advantages" />
    </section>
  )
}

export default advantages
