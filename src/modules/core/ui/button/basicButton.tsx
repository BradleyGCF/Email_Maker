import { cn } from '../../utils'
import { Button } from './shadcn'

const BasicButton = ({
  text,
  className,
  outline,
  type,
  onClick,
}: { text: string; className?: string; outline?: boolean; type?: 'submit' | 'reset'; onClick?: (() => void) | undefined }) => (
  <Button
    className={cn('bg-lightBlue p-2.5 h-12 rounded-xl', outline && 'bg-white border border-lightBlue text-lightBlue', className)}
    loading={false}
    type={type || 'button'}
    onClick={onClick}
  >
    {text}
  </Button>
)

export default BasicButton
