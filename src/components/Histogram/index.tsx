import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import _ from 'lodash'

// 初始化之后 echarts 类型
type EChartsType = echarts.EChartsType

export default function Histogram (props) {
  const { 
    option = {}, // 数据
    el = document.body, // DOM 节点
  } = props

  const ref = useRef<EChartsType>()

  useEffect(() => {
    const fn = _.throttle(() => {
      // resize 重复渲染
      ref.current && ref.current.resize()
    }, 500)

    window.addEventListener('resize', fn)

    return () => {
      window.removeEventListener('resize', fn)
    }
  }, [])

  useEffect(() => {
    // 初始化 canvas
    ref.current = echarts.init(document.querySelector(`#${el}`))
    ref.current.setOption(option)
  }, [option])

  return <></>
}
