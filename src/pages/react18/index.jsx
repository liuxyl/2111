import { useState, useTransition, useDeferredValue, startTransition, useId } from 'react'
import { Input } from 'antd'
import { QBox } from '@@@'
import './styles.less'

export default function React18 (props) {
  return (
    <div styleName="pages-react18-box">
      <QBox
        // raduis={10}
        title="小花"
        // padding="0 10px 0 50px"
        // margin="0 10px 0 20px"
        // backgroundColor="#8F9"
        // style={{border: '5px #000 solid'}}
        className="xxx"
        extraContent={
          <div>
            <span>222222</span>
            <Input style={{width: 100}} />
          </div>
        }
      >
        <h1>小蓝</h1>
      </QBox>
    </div>
  )
}
