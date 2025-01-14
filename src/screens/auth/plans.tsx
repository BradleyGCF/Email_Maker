import Plans from '@/modules/core/components/landing/plans'
export const Component = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[74px]">
      <div className="space-y-12">
        <h4 className="font-bold text-[21px] text-center">Planes y servicios</h4>
        <Plans />
      </div>
    </div>
  )
}
