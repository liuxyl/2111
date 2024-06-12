import React, { useTransition, startTransition } from 'react'

/*
  startTransition(() => {
    所有的调用 都是低优先级
    调用1
    调用2
  })
*/
export default function Button (props) {
  const [loading, startTransition] = useTransition()
  const { onClick } = props

  return (
    <button 
    >
      点我
    </button>
  )
}


