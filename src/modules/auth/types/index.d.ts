import type { LogInSchema, SignUpSchema } from '@/modules/auth/schemas'
import type { InferType } from 'yup'

export type LogIn = Pick<InferType<typeof LogInSchema>, 'email' | 'password'>

export type SignUp = Omit<InferType<typeof SignUpSchema>, 'confirmPassword' | 'countryCode' | 'phoneNumber'> & {
  confirmPassword?: string
  countryCode?: number
  phoneNumber?: number
}
