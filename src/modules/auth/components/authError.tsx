import type { FallbackProps } from 'react-error-boundary'

const AuthError = (props: FallbackProps) => {
  const { error, resetErrorBoundary } = props

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <p className="text-red-500 p-4">
        {error.name}: {error.message}
      </p>
      <button type="button" className="bg-black text-white rounded-lg p-4" onClick={resetErrorBoundary}>
        Recargar página
      </button>
    </div>
  )
}

export default AuthError
