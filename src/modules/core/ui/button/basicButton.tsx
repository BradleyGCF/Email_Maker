import { cn } from '../../utils'
import { Button } from './shadcn'

const BasicButton = ({
  text,
  className,
  outline,
  type,
}: { text: string; className?: string; outline?: boolean; type?: 'submit' | 'reset' }) => (
  <Button
    className={cn('bg-lightBlue p-2.5 h-12 rounded-xl', className, outline && 'bg-white border border-lightBlue text-lightBlue')}
    loading={false}
    type={type || 'button'}
  >
    {text}
  </Button>
)

export default BasicButton
