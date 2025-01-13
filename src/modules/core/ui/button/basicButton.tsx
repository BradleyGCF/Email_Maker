import { cn } from '../../utils'
import { Button } from './shadcn'

const BasicButton = ({ text, className, outline }: { text: string; className?: string; outline?: boolean }) => (
  <Button
    className={cn('bg-lightBlue p-2.5 h-12 rounded-xl', className, outline && 'bg-white border border-lightBlue text-lightBlue')}
    loading={false}
  >
    {text}
  </Button>
)

export default BasicButton
