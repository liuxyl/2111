import React, { useMemo, useState, useRef, useEffect } from 'react'

// HOC: 高阶组件是 参数为组件 返回值为新组件的函数
export default function Hoc (Abc) {
  return function () {
    const [x, setX] = useState({
      x: 0,
      y: 0,
    })

    useEffect(() => {
      document.addEventListener('mousemove', ({ clientX, clientY }) => {
        setX({
          x: clientX,
          y: clientY,
        })
      })
    }, [])

    return <Abc xxx={x} />
  }
}
