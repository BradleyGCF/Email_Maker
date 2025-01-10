import { useState } from 'react'

export const $CookieKey = {
  SessionToken: 'SessionToken',
} as const

type CookieKey = (typeof $CookieKey)[keyof typeof $CookieKey]

export const getCookie = ({
  key,
  cookie,
}: {
  key: CookieKey
  cookie: string | undefined
}) => {
  if (!cookie) {
    return null
  }
  const decodedCookie = decodeURIComponent(cookie)
  const listOfCookies = decodedCookie.split(';')
  const cookieKeyValue = listOfCookies.find((cookie) => cookie.startsWith(key))
  return cookieKeyValue?.split('=').at(1)
}

type CookieOptions = {
  name: CookieKey
  value?: string | null
  expires?: string | Date
  maxAge?: number
  path?: string
  secure?: boolean
  httpOnly?: boolean
}

export const setCookieFn = ({ name, value, maxAge = 7, expires, path }: CookieOptions) => {
  const day = 60 * 60 * 24
  const baseCookie = {
    value: `${name}=${value};SameSite=strict;Secure;path=${path}`,
  }
  if (maxAge >= 0) {
    baseCookie.value += `;max-age=${day * maxAge}`
  }
  if (expires) {
    baseCookie.value += `;expires=${expires}`
  }

  if (path) {
    baseCookie.value += `;path=${path}`
  }
  document.cookie = baseCookie.value
}

export default function useCookies() {
  const [cookies, setCookie] = useState<Record<CookieKey, string | null | undefined>>(() => {
    const cookies = document.cookie.split('; ').reduce(
      (acc, cookie) => {
        const { 0: key, 1: value } = cookie.split('=') as [CookieKey, string]
        acc[key] = value
        return acc
      },
      {} as Record<CookieKey, string | null | undefined>
    )
    return cookies
  })
  console.log(document.cookie, 'document')

  const setCookieHandler = (cookie: CookieOptions) => {
    console.log({ cookie })
    setCookieFn(cookie)
    setCookie((prev) => ({ ...prev, [cookie.name]: cookie.value }))
  }

  return {
    cookies,
    setCookie: setCookieHandler,
    // remove,
    // clear
  }
}
