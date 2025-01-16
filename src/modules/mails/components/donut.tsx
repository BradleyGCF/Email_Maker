import { PieChart, type PieSeriesOption } from 'echarts/charts'
import { LegendComponent, type LegendComponentOption } from 'echarts/components'
//source: https://msemihcelik.medium.com/creating-a-simple-donut-chart-in-react-with-echarts-a1f4ced96106
import * as echarts from 'echarts/core'
import { LabelLayout } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { useEffect, useRef } from 'react'

echarts.use([LegendComponent, PieChart, CanvasRenderer, LabelLayout])

type EChartsOption = echarts.ComposeOption<LegendComponentOption | PieSeriesOption>

interface DonutChartProps {
  data: { state: string; count: number }[]
  colors?: string[] // Customizable color palette
  height?: number // Customizable chart height
  width?: string // Customizable chart width
}
// Register the required components
echarts.use([PieChart, CanvasRenderer])

const DonutChart: React.FC<DonutChartProps> = ({
  data,
  colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#9A97F7', '#FF928B', '#FFC971', '#91C788', '#7BDFF2', '#B5EAEA'], // New appealing color palette
  height = 400, // Default height
  width = '100%', // Default width
}) => {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = echarts.init(chartRef.current)

      const option: EChartsOption = {
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          left: 'right',
          itemWidth: 14,
          itemHeight: 14,
          textStyle: {
            fontSize: 14,
          },
        },
        series: [
          {
            name: 'Sales Data',
            type: 'pie',
            radius: ['40%', '70%'], // Inner and outer radius for donut shape
            data: data.map((item, index) => ({
              value: item.count,
              name: item.state,
              itemStyle: {
                color: colors[index % colors.length], // Use custom colors or default palette
              },
            })),
            label: {
              fontSize: 13,
              formatter: '{b}',
            },
            labelLine: {
              length: 20,
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      }

      chartInstance.setOption(option)

      const resizeChart = () => {
        chartInstance.resize()
      }
      window.addEventListener('resize', resizeChart)

      return () => {
        window.removeEventListener('resize', resizeChart)
        chartInstance.dispose()
      }
    }
  }, [data, colors])

  return <div ref={chartRef} style={{ width, height: `${height}px` }} />
}

export default DonutChart
