const checkStrength = (password: string) => {
  let strength = 1
  const hasLowerCase = /[a-z]/.test(password)
  const hasUpperCase = /[A-Z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?':{}|<>]/.test(password)
  const passedChecks = [hasLowerCase, hasUpperCase, hasNumber, hasSpecialChar].filter(Boolean).length
  if (password.length >= 8) {
    if (passedChecks === 4 || password.length >= 12) {
      strength = 6
    } else if (passedChecks >= 3) {
      strength = 5
    } else if (passedChecks >= 2) {
      strength = 4
    }
  }
  return strength
}

export default checkStrength
