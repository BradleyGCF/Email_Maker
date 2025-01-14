import icon from '/logo_icon.svg'
import logotype from '/logo_logotype.svg'

const logo = () => {
  return (
    <div className="flex items-center gap-6">
      <img src={icon} alt="logo" />
      <img src={logotype} alt="logo" />
    </div>
  )
}

export default logo
