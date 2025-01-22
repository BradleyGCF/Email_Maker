import { cn } from '@/modules/core/utils'
// import { getPrompt } from '@/services/FAQs.service'
// import { useUserStore } from '@/store/user'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { useRef, useState } from 'react'
import { toast } from 'sonner'
import avatar from '/chatbot/avatar.svg'
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
  // const { user } = useUserStore()
  const [messages, setMessages] = useState<Message[]>([])
  const sendButtonRef = useRef<HTMLDivElement>(null)

  const handleSendMessage = async () => {
    // console.log(input.trim() && user)
    // if (input.trim() && user) {
    setLoading(true)
    try {
      setInput('')
      setMessages((prevState) => [...prevState, { text: input, timestamp: getTime() }])
      // const response = await getPrompt(input)
      // console.log(response)
      // setMessages((prevState) => [...prevState, { text: response.data, timestamp: getTime() }])
      setTimeout(() => sendButtonRef.current?.scrollIntoView({ behavior: 'smooth' }), 0)
    } catch (_error) {
      toast.error('Ocurrió un error al enviar tu pregunta.')
    } finally {
      setLoading(false)
    }
    // }
  }

  return (
    <div
      className={cn(
        'fixed bottom-40 left-32 z-10 flex flex-col items-end transform transition-all duration-150 max-h-96 overflow-y-auto',
        // open ? 'scale-1 opacity-100 translate-y-0 translate-x-0' : 'scale-0 opacity-0 translate-y-20 translate-x-64'
        'scale-1 opacity-100 translate-y-0 translate-x-0'
      )}
    >
      <div className="relative p-4">
        <img src={chatBubbleSideIcon} alt="chatBubbleSideIcon" className="absolute bottom-40 left-0 z-10" />
        <div
          className={cn(
            'flex flex-col gap-3 bg-white shadow-chatbot rounded-lg z-50 w-[300px] md:w-[400px] lg:w-[600px] transform transition-all duration-150 bg-white'
          )}
        >
          <div className="flex flex-col mb-4 text-black pt-6 mx-4">
            <div className="flex flex-col gap-3 min-h-20">
              {messages?.map((message: Message, index) => {
                return (
                  <div key={message.timestamp} className={cn('flex gap-3', index % 2 === 0 && 'justify-end')}>
                    {index % 2 !== 0 && <div className="bg-lightBlue w-8 h-8 rounded-[500px] place-self-end" />}
                    <div
                      key={message.timestamp}
                      className="rounded-[10px] bg-extraLightBlue hover:bg-lightBlue active:bg-lightBlue p-4 w-[240px] grid gap-3"
                    >
                      <h3 className="font-bold">{index % 2 === 0 ? 'Amanda López' : 'Chatbot'}</h3>
                      <p className="text-xs">{message.text}</p>
                    </div>
                    {index % 2 === 0 && (
                      <img src={avatar} alt="avatar" className="bg-lightBlue w-8 h-8 rounded-[500px] place-self-end" />
                    )}
                    {/* <p className={cn('flex', index % 2 === 0 && 'justify-end')}>{message.timestamp}</p> */}
                  </div>
                )
              })}
            </div>
          </div>
          <div ref={sendButtonRef} className="flex p-6 bg-extraLightBlue rounded-b-lg gap-2">
            <input
              type="text"
              className="flex-grow h-6 border border-gray-300 rounded-[100px] bg-white focus:border-secondary focus:ring-0 px-2"
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
