import Advantages from '@/modules/core/components/landing/advantages'
import Features from '@/modules/core/components/landing/features'
import Header from '@/modules/core/components/landing/header'
import Plans from '@/modules/core/components/landing/plans'
import Recipients from '@/modules/core/components/landing/recipients'
import { getAllUsers } from '@/modules/users/services'

export function loader() {
  const data = getAllUsers()
  return data
}

export default function Home() {
  return (
    <div className="space-y-[92px]">
      <Header />
      <Recipients />
      <Features />
      <Advantages />
      <Plans />
    </div>
  )
}
