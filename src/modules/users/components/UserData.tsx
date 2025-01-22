import Button from '@/modules/core/ui/button/basicButton'
import { Input } from '@/modules/core/ui/input'
import { getSimpleImageUrl } from '@/modules/core/utils/imageUrl'
import { useRef } from 'react'
import { FaRegTrashCan } from 'react-icons/fa6'
import { GoImage } from 'react-icons/go'
import { toast } from 'sonner'

function Profile() {
  const avatarInputRef = useRef<HTMLInputElement>(null)

  const handleAvatarChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    // if (user && file)
    if (file) {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('upload_preset', 'gravitad_preset')
      // setLoading(true)
      try {
        const imageUrl = await getSimpleImageUrl(formData)
        console.log(imageUrl)
        // await updateUser(user.objectId, { userImage: imageUrl })
        // biome-ignore lint:
      } catch (error: any) {
        console.error(error.message)
        toast.error('No se pudo cargar la imagen')
      } finally {
        // setLoading(false)
      }
    }
  }

  const openAvatarFileSelector = () => {
    avatarInputRef.current?.click()
  }

  return (
    <div className="bg-white p-4 flex flex-col gap-8 items-center rounded-xl">
      <h3 className="text-[21px] font-bold text-left w-full">Datos de usuario</h3>
      <div className="flex gap-8 w-full">
        <div className="grid gap-2">
          <div className="bg-[#F6F6F6] w-[187px] h-[176px] rounded-[14px] flex justify-center items-center">
            <GoImage className="w-16 h-[54px]" fill="#B3B3B3" />
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0"
                onChange={handleAvatarChange}
                ref={avatarInputRef}
              />
              <Button text="Subir foto" className="px-10" onClick={openAvatarFileSelector} />
            </div>
            <div className="bg-lightBlue rounded-lg flex justify-center items-center w-full">
              <FaRegTrashCan className="w-6 h-6" fill="white" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 text-xs text-gray font-inter w-full">
          <div className="flex gap-6 w-full">
            <div className="flex flex-col gap-2 w-full">
              <h6>Nombre completo</h6>
              <Input type="text" placeholder={'Nombre'} className="h-12" />
              <h6>Contraseña</h6>
              <Input type="password" placeholder={'***********'} className="h-12" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h6>Correo electrónico</h6>
              <Input type="text" placeholder={'Nombre'} className="h-12" />
              <h6>Número de teléfono</h6>
              <div className="flex gap-2">
                <Input type="string" placeholder={'+34'} className="h-12 w-12" />
                <Input type="string" placeholder={'555 555 55 55'} className="w-full h-12" />
              </div>
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
