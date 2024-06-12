import { connect } from 'echarts'
import { useEffect, useState } from 'react'

export default function useTime (props) {
  const { dispatch, time } = props
  // const [time, setTime] = useState(60)

  // const fun = async opt => {
  //   await new Promise(res => {
  //     setTimeout(() => {
  //       // opt-- === (opt = opt - 1)
  //       setTime(opt--)
  //       // 1s 以后变为成功
  //       res()
  //     }, 1000)
  //   })
  //   fun(opt)
  // }

  const fun = async (opt = time) => {
    let x = opt
    await new Promise(res => {
      setTimeout(() => {
        if (opt) {
          res()
          x = opt - 1
          console.log(x, 'x');
          dispatch({
            type: 'login/setTime',
            payload: x
          })

        } else {
          // 0 走这里
          return time
        }
      }, 1000)
    })
    fun(x)
  }

  // 返回一个 数字
  return {
    time2: time,
    fun, // 启动倒计时
  }
}
