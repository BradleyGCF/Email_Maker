import { useState } from 'react'
import { signUp as signUpService } from '../services'
import type { SignUp } from '../types'

function useSignUp() {
  const [loading, setLoading] = useState(false)

  const signUp = async ({ email, phone, password, username }: SignUp) => {
    try {
      const result = await signUpService({ email, phone, password, username })

      return result
    } catch (error) {
      console.error(error)
      return {
        error: 'Ha ocurrido un error',
      }
    } finally {
      setLoading(false)
    }
  }

  return {
    signUp,
    loading,
  }
}

export default useSignUp
