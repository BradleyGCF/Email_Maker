import Button from '@/modules/core/ui/button/basicButton'
import { Input } from '@/modules/core/ui/input'
import { FaRegTrashCan } from 'react-icons/fa6'
import { GoImage } from 'react-icons/go'

function Profile() {
  return (
    <div className="bg-white p-2 flex flex-col gap-8 items-center rounded-xl">
      <h3 className="text-[21px] font-bold text-left w-full">Datos de usuario</h3>
      <div className="flex gap-8 w-full">
        <div className="grid gap-2">
          <div className="bg-[#F6F6F6] w-[187px] h-[176px] rounded-[14px] flex justify-center items-center">
            <GoImage className="w-16 h-[54px]" fill="#B3B3B3" />
          </div>
          <div className="flex gap-2">
            <Button text="Subir foto" className="px-10" />
            <div className="bg-lightBlue rounded-lg flex justify-center items-center w-full">
              <FaRegTrashCan className="w-6 h-6" fill="white" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 text-xs text-gray font-inter w-full">
          <div className="flex gap-6 w-full">
            <div className="flex flex-col gap-2 w-full">
              <h6>Nombre completo</h6>
              <Input type="text" value={'Nombre'} className="h-12" />
              <h6>Contraseña</h6>
              <Input type="password" value={'***********'} className="h-12" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h6>Correo electrónico</h6>
              <Input type="text" value={'Nombre'} className="h-12" />
              <h6>Número de teléfono</h6>
              <Input type="number" value={'***********'} className="h-12" />
            </div>
          </div>
          <div className="self-end">
            <Button text="Cambiar contraseña" className="px-10" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
