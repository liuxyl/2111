import cs from 'classnames'
import './styles.less'

/*
  1. 容器
  2. 圆角
  3. padding
  4. 背景
  5. 右侧内容
  6. 标题
  7. 外边距
  8. className
  9. style
*/

export default function QBox (props) {
  const {
    raduis = 10, // 圆角
    title = '',
    margin = '15px',
    padding = '0 0 0 20px',
    backgroundColor = '#FFF',
    style = {},
    children,
    className,
    extraContent,
    justifyContent = 'flex-end',
  } = props

  // ...
  const styles = {
    borderRadius: raduis, 
    backgroundColor,
    margin,
    padding,
    ...style,
  }

  const styles2 = {
    justifyContent,
  }

  return (
    <div
      className={cs('commom-qbox', {[className]: className})}
      style={styles}
    >
      <div className="commom-qbox-xxx">
        <h3 className="commom-qbox-title">{title}</h3>
        <div 
          className="commom-qbox-context"
          style={styles2}
        >
          {extraContent}
        </div>
      </div>
      
      {children}
    </div>
  )
}