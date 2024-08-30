import { useState, useEffect, useRef } from 'react'
import { Input, Menu, Button, Table, Image } from 'antd'
import _ from 'lodash'
import './styles.less'

const data = [
  {
    id: 1,
    context: '',
    flag: '', // text | img
    position: 'right',
  }
]

export default function Tables() {
  const ref = useRef(1)
  const [x, setX] = useState()
  const [data, setData] = useState([])
  const [x2, setX2] = useState(false)

  const onChange = evt => {
    setX(evt.target.value)
  }

  const onClick = type => {
    data.push({
      id: ref.current++,
      context: x,
      flag: type, // text | img
      position: 'right',
    })
    setData([...data])
  }

  const onClick2 = () => {
    setX2(!x2)
  }

  const onClick3 = (type, context) => {
    data.push({
      id: ref.current++,
      context,
      flag: type, // text | img
      position: 'right',
    })
    setData([...data])
  }

  return (
    <div>
      <ul>
        {
          data.map(dt => {
            const { id, context, flag, position } = dt
            return (
              <li key={id} styleName="right">
                {flag === 'text' ? context : <Image src={context} />}
              </li>
            )
          })
        }
      </ul>

      <Input onChange={onChange} />
      <Button>王大龙999</Button>
      <Button>亚娟宝宝666</Button>
      <Button onClick={onClick2}>icon</Button>
      <Button onClick={() => onClick('text')}>发送1234324234</Button>

      <div style={{ display: x2 ? 'block' : 'none' }}>
        <Image
          preview={false}
          src="http://localhost:3000/src/pages/services/assets/Images/Expression/smilea_thumb.gif"
          onClick={() => onClick3('img', 'http://localhost:3000/src/pages/services/assets/Images/Expression/smilea_thumb.gif')}
        />
        <Image src="http://localhost:3000/src/pages/services/assets/Images/Expression/tootha_thumb.gif" />
      </div>
    </div>
  )
}
