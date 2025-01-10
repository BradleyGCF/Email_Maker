import Recipients from '/landing/recipients.png'

const recipients = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-8">
      <h3 className="font-bold text-[31.41px] font-inter mx-80 text-center">
        Una herramienta pensada para profesionales de todos los sectores
      </h3>
      <img src={Recipients} alt="recipients" />
    </section>
  )
}

export default recipients
