import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import _ from 'lodash'

// 初始化之后 echarts 类型
type EChartsType = echarts.EChartsType

export default function FoldLine (props) {
  const { 
    option = [],
    el = document.body, // DOM 节点
  } = props

  const ref = useRef<EChartsType>()

  useEffect(() => {
    // 初始化 canvas
    ref.current = echarts.init(document.querySelector(`#${el}`))
    ref.current.setOption(option)
  }, [option])

  return <></>
}
