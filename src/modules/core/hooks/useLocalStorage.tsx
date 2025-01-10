import { useState } from 'react'

export const $LocalStorageKey = {
  SessionToken: 'SessionToken',
} as const

type LocalStorageKey = (typeof $LocalStorageKey)[keyof typeof $LocalStorageKey]

export const useLocalStorage = (key: LocalStorageKey, initialValue?: string) => {
  const [storedValue, setStoredValue] = useState(() => {
    let item: string | null = null
    try {
      item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (_) {
      return item || initialValue
    }
  })

  const setValue = (value: string) => {
    try {
      const valueToStore = value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(error)
    }
  }

  return {
    value: storedValue,
    setValue,
  }
}
