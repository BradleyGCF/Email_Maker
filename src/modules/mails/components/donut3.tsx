import DonutChart from 'react-donut-chart'

const donut3 = () => {
  return (
    <DonutChart
      data={[
        {
          label: '',
          value: 75,
        },
        {
          label: '',
          value: 25,
        },
      ]}
      colors={['#5C8CC0', '#F3F3F4']}
      width={100}
      height={100}
      legend={false}
    />
  )
}

export default donut3
