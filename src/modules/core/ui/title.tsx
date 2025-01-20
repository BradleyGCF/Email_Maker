import { cn } from '../utils'

const title = ({ text, cls }: { text: string; cls?: string }) => {
  return <h3 className={cn('text-[23px] font-bold', cls)}>{text}</h3>
}

export default title
