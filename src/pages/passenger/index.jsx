import { useState } from 'react'
import { Checkbox, Button } from 'antd'
import { connect } from 'dva'
import { history } from 'umi'

export default connect(state => {
  return {
    
  }
})(Passenger)
function Passenger (props) {
  const { dispatch } = props
  const [value, setValue] = useState([])

  const onChange = val => {
    setValue(val)
  }

  const onSubmit = () => {
    dispatch({
      type: 'passenger/setResult',
      payload: data.filter(dt => {
        if (value.includes(dt.id)) {
          return dt
        }
      })
    })
    history.push('/dateMore')
  }

  const data = [
    {
      id: 111,
      username: '小花',
      shenfenzheng: 1111,
      flag: 2, // 1 学生 / 2 成人
      xuanzuo: 'A',
    },
    {
      id: 222,
      username: '小蓝',
      shenfenzheng: 2222,
      flag: 2, // 1 学生 / 2 成人
      xuanzuo: '',
    },
    {
      id: 333,
      username: '小白',
      shenfenzheng: 3333,
      flag: 2, // 1 学生 / 2 成人
      xuanzuo: '',
    },
    {
      id: 444,
      username: '学生',
      flag: 1, // 1 学生 / 2 成人
      xuanzuo: '',
      sex: '',
      date: '',
      tx: '',
    },
  ]

  return (
    <div>
      <Checkbox.Group
        value={value}
        onChange={onChange}
      >
        <ul>
          {
            data.map(dt => {
              const { username, id } = dt

              return (
                <li key={id}>
                  {username}
                  <Checkbox value={id} />
                </li>
              )
            })
          }
        </ul>
      </Checkbox.Group>

      <Button onClick={onSubmit}>提交</Button>
    </div>
  )
}
