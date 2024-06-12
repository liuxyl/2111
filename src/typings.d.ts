import 'umi/typings';
import React, { MutableRefObject } from 'react'
import * as antd from 'antd'

// AriaAttributes 残疾人
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    styleName?: string
    xxx?: string
  }
}
