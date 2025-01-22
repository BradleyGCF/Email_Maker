import Modal from '@/modules/core/ui/modal'
import Title from '@/modules/core/ui/title'
import { cn } from '@/modules/core/utils'
import { Routes } from '@/routes'
import { useModalsStore } from '@/store/modals'
import { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const keywords = [
  { id: 1, name: 'Formal' },
  { id: 2, name: 'Divertido' },
  { id: 3, name: 'Informal' },
  { id: 4, name: 'Informativo' },
  { id: 5, name: 'Suave' },
  { id: 6, name: 'Creativo' },
  { id: 7, name: 'Directo' },
]

const IaRecommendation = () => {
  const { setOpen } = useModalsStore()
  const [checked, setChecked] = useState([{}])
  const navigate = useNavigate()

  const handleClose = () => {
    navigate(Routes.editor)
  }

  useEffect(() => {
    setOpen('iaRecommendation')
    return () => setOpen('')
  }, [setOpen])

  return (
    <Modal name="iaRecommendation">
      <div className="bg-white rounded-3xl absolute left-[381px] top-20 p-[92px] max-w-[525px] shadow-landing">
        <button type="button" onClick={handleClose}>
          <IoMdClose className="absolute right-12 top-6 h-6 w-6" />
        </button>
        <div className="text-center font-bold font-inter grid gap-10 place-items-center">
          <div>
            <Title text="Mejora tu contenido con IA" cls={'text-[21px]'} />
          </div>
          <div
            className="flex justify-center rounded-xl w-fit"
            style={{ background: 'linear-gradient(to right, #C2A7FF, #F394FA, #FAB1B4, #FAED34, #9EE651, #0AC9A7)' }}
          >
            <input
              type="text"
              placeholder="Describe el contenido que quieres generar"
              className="px-6 py-2.5 rounded-xl my-0.5 mx-0.5 text-xs outline-none"
              style={{
                minWidth: `${'Describe el contenido que quieres generar'.length + 4}ch`,
              }}
            />
          </div>
          <div className="flex gap-[26px]">
            <p className="text-xs font-light">
              Refuerza tu material seleccionando las palabras claves que se adapten al tono de tu mensaje:
            </p>
          </div>
          <div className="flex justify-center gap-3 flex-wrap">
            {keywords.map((k) => (
              <div
                key={k.id}
                className={cn(
                  'flex gap-2 px-2.5 border rounded-md border-[#A0AEC0] text-[#A0AEC0]',
                  checked[k.id] && 'text-black border-lightBlue'
                )}
              >
                <input
                  type="checkbox"
                  value={k.name}
                  style={{ outline: '[#A0AEC0]' }}
                  // className='border border-[#A0AEC0] w-3 h-3 rounded-[2px] appearance-none checked:accent-lightBlue'
                  className="checked:accent-lightBlue"
                  onChange={() => setChecked((prevState) => ({ ...prevState, [k.id]: !prevState[k.id] }))}
                />
                <p className="text-xs leading-5">{k.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default IaRecommendation
