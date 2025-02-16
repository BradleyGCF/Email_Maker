import { $ResponseStatus } from '@/modules/core/enum'
import { Services } from '@/services'
import axios from 'axios'
import type { LogIn, SignUp } from '../types'

export const signUp = async ({ username, email, phone, password }: SignUp) => {
  try {
    const response = await axios.post(Services.auth.signUp, {
      username,
      email,
      phone,
      password,
    })

    if (response.data.status === $ResponseStatus.ERROR) {
      return {
        error: 'Ha ocurrido un error',
      }
    }

    return {
      success: 'Registro exitoso',
    }
  } catch (error) {
    console.error(error)
    return {
      error: 'Ha ocurrido un error',
    }
  }
}

export const logIn = async ({ email, password }: LogIn) => {
  try {
    const response = await axios.post(Services.auth.logIn, {
      email,
      password,
    })

    if (response.data.status === $ResponseStatus.ERROR) {
      return {
        error: 'Ha ocurrido un error',
      }
    }

    return {
      success: 'Registro exitoso',
    }
  } catch (error) {
    console.error(error)
    return {
      error: 'Ha ocurrido un error',
    }
  }
}
