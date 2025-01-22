import Title from '@/modules/core/ui/title'
import { cn } from '@/modules/core/utils'
import { IoMdClose } from 'react-icons/io'

import Modal from '@/modules/core/ui/modal'
import { Routes } from '@/routes'
import { useModalsStore } from '@/store/modals'
// import { useRefStore } from '@/store/refStore'
import {
  useEffect,
  // useEffect, useRef,
  useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
const newProjectModal = () => {
  const [selected, setSelected] = useState('empty')
  const { setOpen } = useModalsStore()

  const navigate = useNavigate()
  // const handleNavigate = () => {
  //   navigate(Routes.templates)
  // }

  const handleClose = () => {
    navigate(Routes.emails)
  }

  useEffect(() => {
    setOpen('newProject')
    return () => setOpen('')
  }, [setOpen])

  return (
    <Modal name="newProject">
      <div className="bg-white rounded-3xl absolute left-[381px] top-20 p-[92px] max-w-[525px] shadow-landing">
        <button type="button" onClick={handleClose}>
          <IoMdClose className="absolute right-12 top-6 h-6 w-6" />
        </button>
        <div className="text-center font-bold font-inter grid gap-10">
          <Title text="Empieza tu proyecto" cls={'text-[21px]'} />
          <div className="flex gap-[26px]">
            <div
              className={cn(
                'grid gap-6 py-5 px-3 border-2 rounded-xl text-[#828282]',
                selected === 'empty' && 'border-2 border-lightBlue bg-extraLightBlue text-black'
              )}
              onClick={() => setSelected('empty')}
              onKeyDown={() => setSelected('empty')}
            >
              <Title text="Desde cero" cls={'text-base uppercase'} />
              <p className="text-xs font-light">Crea un Proyecto con las herramientas de Email Maker</p>
            </div>
            <div
              className={cn(
                'grid gap-6 py-5 px-3 border-2 rounded-xl text-[#828282]',
                selected === 'template' && 'border-2 border-lightBlue bg-extraLightBlue text-black'
              )}
              onClick={() => setSelected('template')}
              onKeyDown={() => setSelected('template')}
            >
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
    </Modal>
  )
}

export default newProjectModal
