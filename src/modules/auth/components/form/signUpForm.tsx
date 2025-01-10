import useSignUp from '@/modules/auth/hooks/useSignUp'
import { SignUpSchema } from '@/modules/auth/schemas'
import type { SignUp } from '@/modules/auth/types'
import { Button } from '@/modules/core/ui/button'
import { Input } from '@/modules/core/ui/input'
import { Routes } from '@/routes'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

function SignUpForm() {
  const { signUp, loading } = useSignUp()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      fullName: '',
      username: '',
    } as SignUp,
    validationSchema: SignUpSchema,
    onSubmit: async ({ email, password, fullName, username }) => {
      const result = await signUp({
        email,
        password,
        fullName,
        username,
      })

      if (result.success) navigate(Routes.logIn)

      if (result.error) toast.error(result.error)
    },
  })

  return (
    <main className="">
      <div className="mb-4 flex gap-1 items-center">
        <span className="text-xl font-semibold text-center">Crear cuenta</span>
      </div>
      <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
        {/* Input fullName */}
        <label className="flex flex-col gap-1">
          <span>Nombre y Apellido</span>
          <Input
            onChange={formik.handleChange}
            value={formik.values.fullName}
            onBlur={formik.handleBlur}
            name="fullName"
            placeholder="Nombre y Apellido"
            type="text"
            required
          />
          {formik.touched.fullName && <span className="border-primary text-primary">{formik.errors.fullName}</span>}
        </label>
        {/* Input fullName */}

        {/* Input username */}
        <label className="flex flex-col gap-1">
          <span>Correo</span>
          <Input
            onChange={formik.handleChange}
            value={formik.values.username}
            onBlur={formik.handleBlur}
            name="username"
            placeholder="my_username02"
            type="text"
            required
          />
          {formik.touched.username && <span className="border-primary text-primary">{formik.errors.username}</span>}
        </label>
        {/* Input username */}

        {/* Input Password */}
        <label className="flex flex-col gap-1">
          <span>Contraseña</span>
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
          <p>¿Ya tienes una cuenta?</p>
          <Link className="underline" to={Routes.logIn}>
            Iniciar sesión
          </Link>
        </div>

        <Button loading={loading} type="submit" className="w-full">
          Registrarse
        </Button>
      </form>
    </main>
  )
}

export default SignUpForm
