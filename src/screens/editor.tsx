import ChatBubble from '@/modules/chatbot/components/chatBubble'
import Editor from '@/modules/editor/components'
import IaRecommendationModal from '@/modules/editor/components/iaRecommendation'
import { Routes } from '@/routes'
import { useLocation } from 'react-router-dom'

export const Component = () => {
  const { pathname } = useLocation()
  const { IaChat, IaRecommendation } = Routes

  return (
    <>
      {pathname === IaRecommendation && <IaRecommendationModal />}
      {pathname === IaChat && <ChatBubble />}
      <Editor />
    </>
  )
}
