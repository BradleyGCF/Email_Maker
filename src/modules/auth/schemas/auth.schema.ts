import * as yup from 'yup'

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#.*%&@\$%\^&\*])(?=.{8,})/
const usernameSignUp = /^(\S+$)/g
const emailRules = /^[^@]+@[^@]+\.[^@]+$/

export const SignUpSchema = yup.object().shape({
  // fullName: yup
  //   .string()
  //   .min(5, 'Full Name must be at least 5 characters long')
  //   .max(65, 'Full name  must contain a maximum of 65 characters')
  //   .required('Required, Please Enter your Full Name'),
  username: yup
    .string()
    .min(5, 'Username must be at least 5 characters long')
    .max(25, 'User name  must contain a maximum of 25 characters')
    .required('Required, Please Enter your User Name ')
    .matches(usernameSignUp, 'spaces not allowed'),
  email: yup.string().max(255).email('Must be a valid email').required('Email is required'),
  countryCode: yup.number().max(100).integer('Must be a valid country code').required('countryCode is required'),
  phoneNumber: yup.number().max(999999999).integer('Must be a valid phone').required('phoneNumber is required'),
  phone: yup.number().max(999999999999).integer('Must be a valid phone').required('Phone is required'),
  password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      passwordRules,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character: ! @ # . * % & @'
    ),
  confirmPassword: yup
    .string()
    .test('password-match', 'passwords must match', function (value) {
      return this.parent.password === value
    })
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
})

export const LogInSchema = yup.object().shape({
  email: yup
    .string()
    .min(5, 'El nombre de usuario debe contener al menos 5 caracteres')
    .max(25, 'El nombre de usuario debe tener un máximo de 25 caracteres')
    .required('Requerido, por favor introduzca su nombre de usuario')
    .matches(emailRules, 'Debe ser un mail'),
  password: yup
    .string()
    .required('Requerido, por favor ingrese la contraseña')
    .matches(
      passwordRules,
      'Debe contener 8 caracteres, una mayúscula, una minúscula, un numero y un carácter especial: : ! @ # . * % & @'
    ),
})
