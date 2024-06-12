import { useMemo, useEffect, useState } from 'react'
import cs from 'classnames'
import { createFromIconfontCN } from '@ant-design/icons'

/* 
 * 状态管理工具 不能封装到组件里
 * 特殊的东西 styleName
 * 基于 antd element 进行二次封装
 * 首先肯定基于当前的业务, 额外的联想其他可能的接口
    1. 支持 antd icon 所有接口
    2. 
    <QIcon
      type="icon-bangqiu" // 图标
      fontSize="" // 字体大小
      color="" // 字体颜色
      scriptUrl="" // 
    />

 * RM || 文档
*/

export default function QIcon (props) {
  const {
    type, // icon 图标类型
    size = 48, // 图标大小
    color = '#000', // 图标颜色
    style = {},
    qianzhui = 'icon-',
    className = '',
    onClick = () => {},
    scriptUrl = '//at.alicdn.com/t/c/font_4450339_6tup2meizon.js', // 图标 URL
    ...item // 获取所有 antd 剩余属性
  } = props

  // const [IconFont] = useState(createFromIconfontCN({
  //   scriptUrl,
  // }))

  const onSubmit = () => {
    onClick('xxxxx')
  }

  const IconFont = useMemo(() => {
    return createFromIconfontCN({
      scriptUrl,
    })
  }, [])

  return (
    <IconFont
      onClick={onSubmit}
      className={cs('q-icon', {[className]: className})}
      type={`${qianzhui}${type}`}
      style={{fontSize: size, color, ...style}}
      {...item}
    />
  )
}
