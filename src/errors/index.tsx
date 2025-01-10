import {
  AuthenticationError,
  AuthorizationError,
  ClientError,
  ConflictError,
  ConnectionError,
  DatabaseError,
  NotFoundError,
  ServerError,
  TimeoutError,
  ValidationError,
} from './factory'

const errorHandler = (error: unknown) => {
  if (error instanceof Error) {
    if (error.message === 'XMLHttpRequest failed: "Unable to connect to the Parse API"') {
      throw new ConnectionError()
    }
    if (error.message.includes('XMLHttpRequest failed:')) {
      throw new ConnectionError(error)
    }
    if (error.message.includes('Received an error with invalid JSON from Parse:')) {
      throw new ServerError(error)
    }
    if (error.message === '') {
      throw new ValidationError()
    }
    if (error.message === '') {
      throw new AuthenticationError()
    }
    if (error.message === '') {
      throw new AuthorizationError()
    }
    if (error.message === '') {
      throw new NotFoundError()
    }
    if (error.message === '') {
      throw new TimeoutError()
    }
    if (error.message === '') {
      throw new ConflictError()
    }
    if (error.message === '') {
      throw new ServerError()
    }
    if (error.message === '') {
      throw new ClientError()
    }
    if (error.message === '') {
      throw new DatabaseError()
    }
  }
  throw new Error()
  // defaultErrorHandler(error)
}

export default errorHandler
