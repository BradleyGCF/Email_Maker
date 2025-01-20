import ChatBubble from '@/modules/chatbot/components/chatBubble'
import Editor from '@/modules/editor/components'
import { Routes } from '@/routes'
import { useLocation } from 'react-router-dom'

export const Component = () => {
  const { pathname } = useLocation()
  const { IaChat } = Routes

  return (
    <>
      {pathname === IaChat && <ChatBubble />}
      <Editor />
    </>
  )
}
