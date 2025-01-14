import { useState } from 'react'

export const usePolicies = () => {
  const [isPrivacyPolicyChecked, setIsPrivacyPolicyChecked] = useState(false)
  const [isMarketingChecked, setIsMarketingChecked] = useState(false)

  const handlePrivacyPolicyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPrivacyPolicyChecked(e.target.checked)
  }

  const handleMarketingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsMarketingChecked(e.target.checked)
  }

  const isButtonDisabled = !(isPrivacyPolicyChecked && isMarketingChecked)

  return {
    isButtonDisabled,
    handleMarketingChange,
    handlePrivacyPolicyChange,
  }
}
