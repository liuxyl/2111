import { useState } from 'react'
import { Button, Picker } from 'antd-mobile'

export const basicColumns = [
  [
    { label: '男', value: 1 },
    { label: '女', value: 2 },
  ]
]

export default function MyPopup (props) {
  const {
    open = false,
    setOpen = () => {},
  } = props

  // 点击蒙版关闭
  const onMaskClick = () => {
    setOpen(false)
  }

  const onConfirm = value => {
    console.log(value, 1);
  }

  return (
    <Picker
      columns={basicColumns}
      visible={open}
      onClose={onMaskClick}
      onConfirm={onConfirm} // 确认时触发
    />
  )
}
