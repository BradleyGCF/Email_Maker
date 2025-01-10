import { cn } from '@/modules/core/utils'
import type { InputHTMLAttributes } from 'react'
// className='border-1 block h-12 w-full rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)]	bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none'
const InputVariants = {
  // primary: 'w-full appearance-none rounded-md dark:text-white/80 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-indigo-900 dark:focus:border-indigo-800 focus:border-indigo-400 focus:shadow-indigo-800/20 shadow-indigo-700 focus:shadow-lg outline-none px-3 py-2 focus:bg-indigo-50/40 dark:focus:bg-neutral-950 duration-200',
  primary: 'input input__primary',
  card: 'w-full appearance-none placeholder:text-black/80 p-2 rounded-md bg-slate-50 focus:shadow-black/20 focus:shadow-xl outline-none border-b focus:border-b-black focus:bg-slate-100 duration-200',
}

type InputVariant = keyof typeof InputVariants

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant
}

export function Input({ className = '', variant = 'primary', ...props }: InputProps) {
  if (props.type === 'range') {
    return <input className={cn(className)} {...props} />
  }
  return <input className={cn(InputVariants[variant], className)} {...props} />
}
