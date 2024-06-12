import { connect } from 'dva'
import cs from 'classnames'
import './styles.less'

export default connect(({ passenger, dateMore }) => {
  return {
    data: dateMore.data,
  }
})(Xuanzuo)
function Xuanzuo (props) {
  const { 
    data = [],
    dispatch,
  } = props

  const onClick = (opt, value) => {
    dispatch({
      type: 'dateMore/setData',
      payload: data.map(dt => {
        if (dt.id === opt.id) {
          dt.xuanzuo = value
        }
        return dt
      })
    })
  }

  return (
    <div styleName="xuanzuo-box">
      {
        data.map(dt => {
          const { id, xuanzuo } = dt
          return (
            <div key={id}>
              <span styleName={cs({active: xuanzuo === 'A'})} onClick={() => onClick(dt, 'A')}>A</span>
              <span styleName={cs({active: xuanzuo === 'B'})} onClick={() => onClick(dt, 'B')}>B</span>
              <span styleName={cs({active: xuanzuo === 'C'})} onClick={() => onClick(dt, 'C')}>C</span>
              <span styleName={cs({active: xuanzuo === 'D'})} onClick={() => onClick(dt, 'D')}>D</span>
              <span styleName={cs({active: xuanzuo === 'E'})} onClick={() => onClick(dt, 'E')}>E</span>
            </div>
          )
        })
      }
    </div>
  )
}