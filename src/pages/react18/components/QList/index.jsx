import QImage from './components/QImage'
import QButton from './components/QButton'
import './styles.less'

export default function QList (props) {
  return (
    <div styleName="pages-react18-qlist">
      {/* 按钮组 */}
      <QButton />
      
      {/* 图片列表 */}
      <QImage />
    </div>
  )
}
