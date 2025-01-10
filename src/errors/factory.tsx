const createErrorFactory = (name: string, message?: string) => {
  return class CustomizedError extends Error {
    constructor(error?: Error) {
      super(error?.message || message)
      this.name = name
      this.stack = ''
    }
  }
}

export const ConnectionError = createErrorFactory(
  'ConnectionError',
  'Conexión fallida. No se pudo establecer conexión con el servidor'
)
export const ValidationError = createErrorFactory('ValidationError')
export const AuthenticationError = createErrorFactory('AuthenticationError', 'Email o contraseña inválidos')
export const AuthorizationError = createErrorFactory('AuthorizationError', 'No tiene permisos suficientes')
export const NotFoundError = createErrorFactory('NotFoundError', 'Página no encontrada')
export const TimeoutError = createErrorFactory('TimeoutError', 'Error de timeout. Intente de nuevo más tarde')
export const ConflictError = createErrorFactory('ConflictError', 'Ya existe un usuario con esas credenciales')
export const ServerError = createErrorFactory('ServerError')
export const ClientError = createErrorFactory(
  'ClientError',
  'Parse recibió un JSON inválido. Puede haber errores de sintaxis, como comillas mal colocadas, comas faltantes, o falta de llaves de apertura o cierre.'
)
export const DatabaseError = createErrorFactory('DatabaseError')
