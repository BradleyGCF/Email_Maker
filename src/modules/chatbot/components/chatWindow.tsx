import { cn } from '@/modules/core/utils'
// import { getPrompt } from '@/services/FAQs.service'
import { useUserStore } from '@/store/user'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { toast } from 'sonner'
import chatBubbleSideIcon from '/chatbot/index.svg'

// type Props = {
//   open: boolean
// }

type Message = {
  text: string
  timestamp: string
}

const getTime = () => {
  const date = new Date()
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')
  return `${hours}:${minutes}:${seconds}`
}

const ChatWindow = (
  // { open }: Props
) => {
  const [input, setInput] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const { user } = useUserStore()
  const [messages, setMessages] = useState<Message[]>([])

  const handleSendMessage = async () => {
    if (input.trim() && user) {
      setLoading(true)
      try {
        setInput('')
        setMessages((prevState) => [...prevState, { text: input, timestamp: getTime() }])
        // const response = await getPrompt(input)
        // console.log(response)
        // setMessages((prevState) => [...prevState, { text: response.data, timestamp: getTime() }])
      } catch (_error) {
        toast.error('Ocurrió un error al enviar tu pregunta.')
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <div
      className={cn(
        'fixed bottom-40 left-32 z-10 flex flex-col items-end transform transition-all duration-150',
        // open ? 'scale-1 opacity-100 translate-y-0 translate-x-0' : 'scale-0 opacity-0 translate-y-20 translate-x-64'
        'scale-1 opacity-100 translate-y-0 translate-x-0'
      )}
    >
      <div className="relative p-4">
        <img src={chatBubbleSideIcon} alt="chatBubbleSideIcon" className="absolute top-20 left-0" />
        <div
          className={cn(
            'flex flex-col gap-3 bg-white shadow-chatbot rounded-lg z-50 w-[300px] md:w-[400px] lg:w-[600px] transform transition-all duration-150 bg-white'
          )}
        >
          <div className="flex flex-col mb-4 text-black">
            <div className="flex flex-col gap-8 min-h-20">
              {messages?.map((message: Message, index) => {
                return (
                  <div key={message.timestamp}>
                    <div
                      key={message.timestamp}
                      className="rounded-[10px] bg-secondary hover:bg-orange-600 active:bg-orange-600 p-2"
                    >
                      <p>{message.text}</p>
                    </div>
                    <p className={cn('flex', index % 2 === 0 && 'justify-end')}>{message.timestamp}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex p-6 bg-extraLightBlue rounded-b-lg">
            <input
              type="text"
              className="flex-grow h-full h-6 border border-gray-300 rounded-lg bg-white focus:border-secondary focus:ring-0"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage()
                }
              }}
            />
            <button
              className={`flex items-center h-full ${loading ? 'bg-gray-400' : ''} text-white rounded-r-lg`}
              onClick={handleSendMessage}
              type="button"
              disabled={loading}
            >
              {loading ? (
                <div className="loading loading-spinner w-6" />
              ) : (
                <PaperAirplaneIcon className="w-6" style={{ transform: 'rotate(-35deg)' }} fill="#5C8CC0" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatWindow
