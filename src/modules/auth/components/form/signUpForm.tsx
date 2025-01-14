import useSignUp from '@/modules/auth/hooks/useSignUp'
import { SignUpSchema } from '@/modules/auth/schemas'
import type { SignUp } from '@/modules/auth/types'
import Button from '@/modules/core/ui/button/basicButton'
import { Input } from '@/modules/core/ui/input'
import { cn } from '@/modules/core/utils'
import { Routes } from '@/routes'
import { useFormik } from 'formik'
import { type ChangeEvent, useState } from 'react'
import { FaRegEye } from 'react-icons/fa'
import { FaRegEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import checkStrength from '../../utils/passwordStrength'

function SignUpForm() {
  const {
    signUp,
    // loading
  } = useSignUp()
  const [passwordStrength, setPasswordStrength] = useState(1)
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
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

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const result = checkStrength(e.target.value)
    setPasswordStrength(result)
    formik.setFieldValue('password', e.target.value)
  }
  return (
    <main className="">
      <div className="mb-4 flex gap-1 justify-center items-center">
        <span className="text-lg font-semibold text-center">Regístrate y comienza</span>
      </div>
      <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
        {/* Input fullName */}
        <label className="flex flex-col gap-1">
          <span className="text-xs text-gray">Nombre completo</span>
          <Input
            onChange={formik.handleChange}
            value={formik.values.fullName}
            onBlur={formik.handleBlur}
            name="fullName"
            placeholder="Nombre"
            type="text"
            required
          />
          {formik.touched.fullName && (
            <span className="border-primary text-primary text-xs text-red-500">{formik.errors.fullName}</span>
          )}
        </label>
        {/* Input fullName */}

        {/* Input email */}
        <label className="flex flex-col gap-1">
          <span className="text-xs text-gray">Correo electrónico</span>
          <Input
            onChange={formik.handleChange}
            value={formik.values.username}
            onBlur={formik.handleBlur}
            name="email"
            placeholder="ejemplo@gmail.com"
            type="text"
            required
          />
          {formik.touched.username && (
            <span className="border-primary text-primary text-xs text-red-500">{formik.errors.username}</span>
          )}
        </label>
        {/* Input email */}

        {/* Input phone */}
        <label className="flex flex-col gap-1">
          <span className="text-xs text-gray">Número de teléfono</span>
          <div className="flex gap-4">
            <Input
              onChange={formik.handleChange}
              value={formik.values.username}
              onBlur={formik.handleBlur}
              name="phone"
              placeholder="+34"
              type="text"
              className="w-16"
              required
            />
            <Input
              onChange={formik.handleChange}
              value={formik.values.username}
              onBlur={formik.handleBlur}
              name="phone"
              placeholder="555 555 55 55"
              type="text"
              className="w-full"
              required
            />
          </div>
          {formik.touched.username && (
            <span className="border-primary text-primary text-xs text-red-500">{formik.errors.username}</span>
          )}
        </label>
        {/* Input phone */}

        {/* Input Password */}
        <label className="flex flex-col gap-1 relative">
          <span className="text-xs text-gray">Contraseña</span>
          <Input
            onChange={(e) => handleCheck(e)}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            name="password"
            placeholder="****************"
            type={showPassword ? 'text' : 'password'}
            required
          />
          {formik.touched.password && (
            <span className="border-primary text-primary text-xs text-red-500">{formik.errors.password}</span>
          )}
          <button type="button" className="absolute right-4 top-7" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </label>
        {/* Input Password */}
        <div className="flex gap-1">
          {Array.from({ length: 6 }, (_, id) => ({ id })).map((l, i) => (
            <div key={l.id} className={cn('h-1 w-10 bg-gray', i <= passwordStrength && 'bg-red-500')} />
          ))}
        </div>
        {/* Input Confirm Password */}
        <label className="flex flex-col gap-1 relative">
          <span className="text-xs text-gray">Confirmar contraseña</span>
          <Input
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            name="password"
            placeholder="****************"
            type={showPassword ? 'text' : 'password'}
            required
          />
          {formik.touched.password && (
            <span className="border-primary text-primary text-xs text-red-500">{formik.errors.password}</span>
          )}
          <button type="button" className="absolute right-4 top-7" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </label>
        {/* Input Confirm Password */}

        <div className="flex text-sm text-gray gap-4 items-start accent-lightBlue">
          <input type="checkbox" />
          <p>He leído y acepto totalmente la política de privacidad y las condiciones generales.</p>
        </div>
        <div className="flex text-sm text-gray gap-4 items-start accent-lightBlue">
          <input type="checkbox" />
          <p>Acepto de modo inequívoco recibir boletines, newsletter o comunicaciones comerciales de esta entidad.</p>
        </div>
        <Button className="w-full" text="Registrarme" />
        <div className="flex gap-1 justify-center text-gray">
          <p>¿Ya tienes una cuenta?</p>
          <Link className="text-lightBlue" to={Routes.logIn}>
            Iniciar sesión
          </Link>
        </div>
      </form>
    </main>
  )
}

export default SignUpForm
