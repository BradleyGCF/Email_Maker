import HeroImage from '/landing/hero_image.png'
import { StartButton } from '../../ui/button/startButton'

const header = () => {
  return (
    <header className="flex mt-[92px] mx-20">
      <div>
        <h2 className="font-inter text-[64px] font-bold leading-[1.1]">
          <span className="text-lightBlue">Diseña correos</span> que marquen la <span className="text-lightBlue">diferencia</span>
        </h2>
        <p className="pr-48 mr-10 mt-8">
          Crea correos electrónicos atractivos y profesionales de forma sencilla, sin necesidad de conocimientos técnicos.
        </p>
        <StartButton />
      </div>
      <div className="w-[50vw]">
        <img src={HeroImage} alt="heroImage" />
      </div>
    </header>
  )
}

export default header
