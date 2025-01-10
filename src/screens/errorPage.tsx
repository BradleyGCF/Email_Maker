import type { FallbackProps } from 'react-error-boundary'

const ItemsFetchingError = (props: FallbackProps) => {
  const { error, resetErrorBoundary } = props

  return (
    <div className="error-page min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-semibold mb-4">Error!</h1>
        <p className="text-2xl text-red-600 font-semibold">{error.message}</p>
        <button type="button" className="mt-4" onClick={resetErrorBoundary}>
          Reload Page
        </button>
      </div>
    </div>
  )
}

export default ItemsFetchingError
