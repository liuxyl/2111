import { useEffect, useState } from 'react'
import useWebsoket from '../../components/useWebsoket'
import api from '@/services/api'
import _ from 'lodash'

export default function useData (props) {
  const [x, setX] = useState([])
  const [y, setY] = useState([]) // x 轴数据
  const [legend, setLegend] = useState([])
  // 请求 websocket
  const { data } = useWebsoket({
    url: api.websockets,
  })

  const getX = () => {
    setY([...new Array(7).fill('').map((dt, index) => {
      const times = new Date().getTime() - index * 30 * 1000 // 获取当前时间戳
      const date = new Date(times)
      const hours = date.getHours() // 小时
      const minutes = date.getMinutes() // 小时
      const seconds = date.getSeconds() // 秒
      return `${hours}:${minutes}:${seconds}`
    })].reverse())
  }

  useEffect(() => {
    if (!_.get(data, 'seriesData')) return () => {}

    const { legendData, seriesData } = data

    setX([...seriesData.map((dt, index) => {
      return {
        name: legendData[index],
        type: 'line',
        data: dt,
        smooth: true,
        symbol: 'none',
      }
    })])

    setLegend(legendData)

    // 获取 x 轴坐标
    getX()
  }, [data])
  
  const option = {
    title: {
      text: 'Stacked Line'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: legend
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisPointer: {
        label: {
          // axisPointer.label.autoSplitNumber 属性来指定 x 轴显示的数量 该属性控制 x 轴上的标签数量
          // 如果数量过多 则会自动计算出一个合适的数量
          autoSplitNumber: 4
        }
      },
      data: y,
    },
    yAxis: {
      type: 'value'
    },
    series: x,
  }

  return {
    option,
  }
}