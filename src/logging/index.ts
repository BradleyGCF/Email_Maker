import type { ErrorInfo } from 'react'

const logError = (error: Error, info: ErrorInfo) => {
  // Do something with the error, e.g. log to an external API
  console.log(error, info)
}

export default logError
