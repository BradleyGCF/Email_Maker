const checkStrength = (password: string) => {
  let strength = 1
  const hasLowerCase = /[a-z]/.test(password)
  const hasUpperCase = /[A-Z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?':{}|<>]/.test(password)
  const passedChecks = [hasLowerCase, hasUpperCase, hasNumber, hasSpecialChar].filter(Boolean).length
  strength += passedChecks
  if (password.length >= 8) strength += 1

  return strength
}

export default checkStrength
