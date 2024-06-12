import React, { useState, useEffect, useRef } from 'react';
import { Button, Space, Tabs, Popover } from 'antd'
import { connect } from 'dva'
import _ from 'lodash'
import * as echarts from 'echarts'
import './styles.less'

export default function BaseForm(props) {
  const [x, setX] = useState()

  const ref = useRef()
  const ref2 = useRef()

  useEffect(() => {
    const myChart = ref2.current = echarts.init(ref.current)

    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          // 改变颜色
          itemStyle: {
            normal: {
              label: { show: true },
              color: params => {
                console.log(params, 'params');
                //通过判断选中的名字改变柱子的颜色样式
                if (x === params.name) {
                  return '#0F0';

                } else {
                  return '#c23531';
                }
              }
            }
          },
        }
      ]
    };

    myChart.setOption(option)
  }, [x])

  useEffect(() => {
    if (ref2.current) {
      ref2.current.on('click', function (params) {
        // 控制台打印数据的名称
        console.log(params, 1);
        setX(params.name)
      })
    }
  }, [])

  return (
    <div style={{ width: '100%', height: 500 }} ref={ref}>

    </div>
  )
}
