import { history } from 'umi'
import { Button, Form, Select, Input, DatePicker } from 'antd'

const { Option } = Select

export default function useData (props) {
  const { dispatch, form, result, setResult } = props

  // 失去焦点 实时修改当前的表单值
  const fun1 = (cid, key, evt) => {
    setResult(result.map(dt => {
      if (dt.cid === cid) {
        // 属性名表达式
        dt[key] = evt.target ? evt.target.value : evt
      }
      // map 必须有返回值
      return dt
    }))
  } 

  // 触发提交
  const fun2 = (id, all) => {
    // 判断失去焦点 这条数据有没有空值
    // return true 会返回当前的 dt
    const x1 = !Object.values(all).includes('')
    // x1 是判断 当前行的所有表单都有值
    if (x1) {
      // id 判断是否是修改, id 有值 带入, 没有值 给个空
      const obj = id ? { id } : {}
      // 修改
      dispatch({
        type: 'tables/edit',
        payload: {
          info: { ...all, ...obj }
        }
      })
    } 
  }

  // 失去焦点验证
  const onBlur = (cid, evt, key, id, all) => {
    // 触发表单验证
    form.validateFields()
    // 失去焦点 实时修改当前的表单值
    fun1(cid, key, evt)
    // 触发提交
    fun2(id, all)
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'full',
      width: 200,
      render: (txt, all) => {
        const { cid, id } = all

        return (
          <Form.Item
            name={`full${cid}`}
            rules={[{ required: true, message: 'Missing first name' }]}
          >
            <Input 
              onBlur={evt => onBlur(cid, evt, 'full', id, all)}
            />
          </Form.Item>
        )
      }
    },
    {
      title: 'Age',
      dataIndex: 'age',
      width: 200,
      render: (text, all) => {
        const { cid, id } = all

        return (
          <Form.Item
            name={`age${cid}`}
            rules={[{ required: true, message: 'Missing first name' }]}
          >
            <Input 
              onBlur={evt => onBlur(cid, evt, 'age', id, all)}
            />
          </Form.Item>
        )
      }
    },
    {
      title: 'Column1',
      dataIndex: 'c1',
      width: 200,
      render: (text, all) => {
        const { cid, id } = all

        return (
          <Form.Item
            name={`c1${cid}`}
            rules={[{ required: true, message: 'Please select your country!' }]}
          >
            <Select 
              placeholder="Please select a country"
              onChange={evt => onBlur(cid, evt, 'c1', id, all)}
            >
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          </Form.Item>
        )
      }
    },
    {
      title: 'Column2',
      width: 200,
      dataIndex: 'c2',
      render: (text, all) => {
        const { cid, id } = all

        return (
          <Form.Item 
            name={`c2${cid}`}
            onBlur={evt => onBlur(cid, evt, 'c2', id, all)}
            rules={[{ required: true, message: 'Please select your country!' }]}
          >
            <DatePicker />
          </Form.Item>
        )
      }
    },
  ]

  return {
    columns,
  }
}