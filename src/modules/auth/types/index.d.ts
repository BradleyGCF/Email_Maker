import type { LogInSchema, SignUpSchema } from '@/modules/auth/schemas'
import type { InferType } from 'yup'

export type LogIn = Pick<InferType<typeof LogInSchema>, 'email' | 'password'>

export type SignUp = Pick<InferType<typeof SignUpSchema>, 'email' | 'password' | 'fullName' | 'username'>
