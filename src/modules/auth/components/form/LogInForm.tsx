import useLogIn from '@/modules/auth/hooks/useLogIn'
import { LogInSchema } from '@/modules/auth/schemas'
import { Button } from '@/modules/core/ui/button'
import { Input } from '@/modules/core/ui/input'
import { Routes } from '@/routes'
import { useFormik } from 'formik'
import { useErrorBoundary } from 'react-error-boundary'
import { Link, useNavigate } from 'react-router-dom'
import type { LogIn } from '../../types'

export default function LogInForm() {
  const { logIn, loading } = useLogIn()
  const navigate = useNavigate()
  const { showBoundary } = useErrorBoundary()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    } as LogIn,
    validationSchema: LogInSchema,
    onSubmit: async ({ email, password }) => {
      try {
        const result = await logIn({
          email,
          password,
        })
        if (result?.success) navigate(Routes.home)
      } catch (error) {
        return showBoundary(error)
      }
    },
  })

  return (
    <main>
      <div className="mb-4 flex gap-1 items-center">
        <span className="text-xl font-semibold text-center">Iniciar sesión</span>
      </div>
      <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
        {/* Input Email */}
        <label className="flex flex-col gap-1">
          <span>Correo</span>
          <Input
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            name="email"
            placeholder="email@gmail.com"
            type="email"
            required
          />
          {formik.touched.email && <span className="border-primary text-primary">{formik.errors.email}</span>}
        </label>
        {/* Input Email */}

        {/* Input Password */}
        <label className="flex flex-col gap-1">
          <span>Password</span>
          <Input
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            name="password"
            placeholder="****************"
            type="password"
            required
          />
          {formik.touched.password && <span className="border-primary text-primary">{formik.errors.password}</span>}
        </label>
        {/* Input Password */}
        <div className="flex gap-1">
          <p>¿No tienes una cuenta?</p>
          <Link className="underline" to={Routes.signUp}>
            Crear cuenta
          </Link>
        </div>

        <Button loading={loading} type="submit" className="w-full">
          Ingresar
        </Button>
      </form>
    </main>
  )
}
