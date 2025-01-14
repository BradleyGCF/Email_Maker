// import useSignUp from '@/modules/auth/hooks/useSignUp'
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
// import { toast } from 'sonner'
import { usePolicies } from '../../hooks/usePolicies'
import checkStrength from '../../utils/passwordStrength'

function SignUpForm() {
  // const {
  //   signUp,
  //   // loading
  // } = useSignUp()
  const [passwordStrength, setPasswordStrength] = useState(1)
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      countryCode: 0,
      phoneNumber: 0,
      phone: 0,
      password: '',
      confirmPassword: '',
    } as SignUp,
    validationSchema: SignUpSchema,
    validateOnMount: true,
    onSubmit: async () => {
      // { username, email, phone, password }

      // const result = await signUp({
      //   username,
      //   email,
      //   phone,
      //   password,
      // })
      // if (result.success)
      navigate(Routes.plans)

      // if (result.error) toast.error(result.error)
    },
  })

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const result = checkStrength(e.target.value)
    setPasswordStrength(result)
    formik.setFieldValue('password', e.target.value)
  }
  const { isButtonDisabled, handleMarketingChange, handlePrivacyPolicyChange } = usePolicies()
  const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    formik.setFieldValue(field, e.target.value)
    if (field === 'countryCode') formik.setFieldValue('phone', `+${e.target.value}${formik.values.phoneNumber || ''}`)
    if (field === 'phoneNumber') formik.setFieldValue('phone', `+${formik.values.countryCode || ''}${e.target.value}`)
  }

  return (
    <main>
      <div className="mb-4 flex gap-1 justify-center items-center">
        <span className="text-lg font-semibold text-center">Regístrate y comienza</span>
      </div>
      <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
        {/* Input fullName */}
        <label className="flex flex-col gap-1">
          <span className="text-xs text-gray">Nombre completo</span>
          <Input
            onChange={formik.handleChange}
            value={formik.values.username}
            onBlur={formik.handleBlur}
            name="username"
            placeholder="Nombre"
            type="text"
            required
          />
          {formik.touched.username && (
            <span className="border-primary text-primary text-xs text-red-500">{formik.errors.username}</span>
          )}
        </label>
        {/* Input fullName */}

        {/* Input email */}
        <label className="flex flex-col gap-1">
          <span className="text-xs text-gray">Correo electrónico</span>
          <Input
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            name="email"
            placeholder="ejemplo@gmail.com"
            type="text"
            required
          />
          {formik.touched.email && (
            <span className="border-primary text-primary text-xs text-red-500">{formik.errors.email}</span>
          )}
        </label>
        {/* Input email */}

        {/* Input phone */}
        <label className="flex flex-col gap-1">
          <span className="text-xs text-gray">Número de teléfono</span>
          <div className="flex gap-4">
            <Input
              onChange={(e) => handlePhoneInput(e, 'countryCode')}
              value={formik.values.countryCode}
              onBlur={formik.handleBlur}
              name="phone"
              placeholder="+34"
              type="number"
              className="w-16"
              maxLength={2}
              required
            />
            {formik.touched.countryCode && (
              <span className="border-primary text-primary text-xs text-red-500">{formik.errors.countryCode}</span>
            )}
            <Input
              onChange={(e) => handlePhoneInput(e, 'phoneNumber')}
              value={formik.values.phoneNumber}
              onBlur={formik.handleBlur}
              name="phone"
              placeholder="555 555 55 55"
              type="number"
              className="w-full"
              required
            />
          </div>
          {formik.touched.phoneNumber && (
            <span className="border-primary text-primary text-xs text-red-500">{formik.errors.phoneNumber}</span>
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
          {Array.from({ length: 6 }, (_, id) => ({ id })).map((l) => (
            <div key={l.id} className={cn('h-1 w-[16%] bg-gray', l.id + 1 <= passwordStrength && 'bg-red-500')} />
          ))}
        </div>
        {/* Input Confirm Password */}
        <label className="flex flex-col gap-1 relative">
          <span className="text-xs text-gray">Confirmar contraseña</span>
          <Input
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            onBlur={formik.handleBlur}
            name="confirmPassword"
            placeholder="****************"
            type={showPassword ? 'text' : 'password'}
            required
          />
          {formik.touched.confirmPassword && (
            <span className="border-primary text-primary text-xs text-red-500">{formik.errors.confirmPassword}</span>
          )}
          <button type="button" className="absolute right-4 top-7" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </label>
        {/* Input Confirm Password */}

        <div className="flex text-sm text-gray gap-4 items-start accent-lightBlue">
          <input type="checkbox" id="privacy-policy" onChange={handlePrivacyPolicyChange} />
          <p>He leído y acepto totalmente la política de privacidad y las condiciones generales.</p>
        </div>
        <div className="flex text-sm text-gray gap-4 items-start accent-lightBlue">
          <input type="checkbox" id="marketing" onChange={handleMarketingChange} />
          <p>Acepto de modo inequívoco recibir boletines, newsletter o comunicaciones comerciales de esta entidad.</p>
        </div>
        <Button
          className={cn('w-full', isButtonDisabled || !formik.isValid ? 'bg-[#ccc] cursor-not-allowed' : 'cursor-pointer')}
          type="submit"
          text="Registrarme"
        />
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
