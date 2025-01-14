import useLogIn from '@/modules/auth/hooks/useLogIn'
import { LogInSchema } from '@/modules/auth/schemas'
import Button from '@/modules/core/ui/button/basicButton'
import { Input } from '@/modules/core/ui/input'
import { Routes } from '@/routes'
import { useFormik } from 'formik'
import { useErrorBoundary } from 'react-error-boundary'
import { Link, useNavigate } from 'react-router-dom'
import type { LogIn } from '../../types'

export default function LogInForm() {
  const { logIn } = useLogIn()
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
    <main className="flex flex-col gap-8">
      <h3 className="text-xl font-semibold text-center">Inicio de sesión</h3>
      <form className="flex flex-col gap-8" onSubmit={formik.handleSubmit}>
        <div className="flex flex-col gap-2">
          {/* Input Email */}
          <label className="flex flex-col gap-1">
            <span className="text-xs text-gray">Correo electrónico</span>
            <Input
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              name="email"
              placeholder="ejemplo@gmail.com"
              type="email"
              required
            />
            {formik.touched.email && <span className="border-primary text-primary">{formik.errors.email}</span>}
          </label>
          {/* Input Email */}

          {/* Input Password */}
          <label className="flex flex-col gap-1">
            <span className="text-xs text-gray">Contraseña</span>
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
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <input type="checkbox" />
            <p>Recordarme</p>
          </div>
          <p className="text-lightBlue">¿Olvidé mi contraseña?</p>
        </div>
        <Button className="w-full" text={'Inicio de sesión'} />
        <div className="flex gap-1 justify-center text-gray">
          <p>¿No tienes cuenta?</p>
          <Link className="text-lightBlue" to={Routes.signUp}>
            Regístrate
          </Link>
        </div>
      </form>
    </main>
  )
}
