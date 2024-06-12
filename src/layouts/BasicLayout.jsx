import { Outlet } from 'umi'
import './styles.less'

export default function Layout(props) {
  return (
    <div styleName="basic-layout">
      <Outlet />
    </div>
  )
}
