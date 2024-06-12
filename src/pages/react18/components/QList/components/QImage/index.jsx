import { useState } from 'react'
import { Image, Input } from 'antd'
import cs from 'classnames'
import { QIcon } from '@@@'
import useData from './useData'
import error from '@/assets/error.png' // 本地的图片
import './styles.less'

export default function QImage(props) {
  const { data, setData } = useData()

  const onBlur = id => {
    setData(data.map(dt => {
      if (dt.att_id === id) {
        dt.edit = false
      }
      return dt
    }))
  }

  // 图片的点击事件
  const onClick = (id, num) => {
    // 判断当前点击的图片 num 是否有值
    // num 没有值 表示没点过 所以要给num 正常 + 1
    // num 有值, 直接 赋给 0, 不走 + 1流程
    if (num) {
      setData(data.map(dt => {
        if (Number(dt.att_id) === Number(id)) {
          dt.num = 0
        }
        // 大于当前点击点击的 num 给他 -1
        if (dt.num > num) {
          dt.num--
        }
        return dt
      }))

      return false
    }

    // 获取当前数组 num 最大值 
    const x1 = data.reduce((max, value) => {
      if (max.num > value.num) {
        return max

      } else {
        return value
      }
    })

    // +1 流程
    setData(data.map(dt => {
      if (Number(dt.att_id) === Number(id)) {
        dt.num = x1.num + 1
      }
      return dt
    }))
  }

  const onClick2 = id => {
    setData(data.map(dt => {
      if (dt.att_id === id) {
        dt.edit = true
      }
      return dt
    }))
  }

  const xxx = str => str.split('.')

  return (
    <div styleName="q-image-box">
      {
        data.map(dt => {
          const { 
            att_id, 
            real_name, 
            att_dir,
            num, // 点击的红圈数字
            edit, // 是否可编辑
          } = dt

          return (
            <div styleName="q-image" key={att_id}>
              <Image
                styleName={cs('image', {'image2': num})}
                fallback={error}
                preview={false}
                src={att_dir}
                width={100}
                height={100}
                onClick={() => onClick(att_id, num)}
              />
              
              {
                edit
                  ? <Input size="small" onBlur={() => onBlur(att_id)} />
                  : (
                    <div
                      styleName="title"
                      title={real_name}
                    >
                      <span styleName="xxx">{xxx(real_name)[0]}</span>
                      <span>{xxx(real_name)[1]}</span>
                    </div>
                  )
              }

              <QIcon
                onClick={() => onClick2(att_id)}
                size={17}
                className="x1"
                type="bangqiu"
              />

              {num && <em styleName="num">{num}</em>}
            </div>
          )
        })
      }
    </div>
  )
}