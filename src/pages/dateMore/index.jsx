import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { Button, Space, Form, Input, Grid, PickerView, Popup } from 'antd-mobile'
import { connect } from 'dva'
import { history } from 'umi'
import MyPopup from './components/myPopup'
import Xuanzuo from './components/xuanzuo'
import './styles.less'

export default connect(({ passenger, dateMore }) => {
  return {
    result: passenger.result,
    data: dateMore.data,
  }
})(DateMore)
function DateMore (props) {
  const { 
    result = [],
    data = [],
    dispatch,
  } = props
  const ref = useRef(1)
  const [open, setOpen] = useState(false) // 性别弹窗
  const [form] = Form.useForm()

  // 监听 result 是否改变
  useEffect(() => {
    dispatch({
      type: 'dateMore/setData',
      payload: [...data, ...result]
    })
    // setData(pre => {
    //   form.setFieldsValue(pre.reduce((obj, value) => {
    //     const { username, id, shenfenzheng } = value
    //     obj = {
    //       ...obj,
    //       [`username${id}`]: username,
    //       [`shenfenzheng${id}`]: shenfenzheng,
    //     }
    //     return obj
    //   }, {}))
    //   return pre
    // })
  }, [result])

  useEffect(() => {
    if (data.length) {
      form.setFieldsValue(data.reduce((obj, value) => {
        const { username, id, shenfenzheng } = value
        obj = {
          ...obj,
          [`username${id}`]: username,
          [`shenfenzheng${id}`]: shenfenzheng,
        }
        return obj
      }, {}))
    }
  }, [data])

  // 添加成人
  const onClick = () => {
    data.push({
      id: ref.current++,
      username: '',
      shenfenzheng: undefined,
      flag: 2, // 1 学生 / 2 成人
      xuanzuo: '',
    })
    dispatch({
      type: 'dateMore/setData',
      payload: [...data]
    })
  }

  const onClick2 = opt => {
    history.push('/passenger')
  }

  // dt: 数组里的每一条数据
  // value: 当前的表单值
  // key: 我要改对象里的哪个字段
  const onChange = (dt, value, key) => {
    const { id } = dt
    dispatch({
      type: 'dateMore/setData',
      payload: data.map(dt => {
        if (id === dt.id) {
          dt[key] = value
        }
        return dt
      })
    })
  }

  // 性别下拉
  const onAdd = () => {
    setOpen(true)
  }

  // 返回学生的 jsx
  const getXs = () => {
    return (
      <>
        <Form.Item
          label='性别'
          rules={[{ required: true, message: '姓名不能为空' }]}
        >
          <Input
            onClick={onAdd}
            onChange={console.log}
            placeholder='性别'
          />
        </Form.Item>

        <Form.Item
          label='出生日'
          rules={[{ required: true, message: '姓名不能为空' }]}
        >
          <Input
            onChange={console.log}
            placeholder='身份证'
          />
        </Form.Item>

        <Form.Item
          label='同行人'
          rules={[{ required: true, message: '姓名不能为空' }]}
        >
          <Input
            onChange={console.log}
            placeholder='同行人'
          />
        </Form.Item>
      </>
    )
  }

  // 返回成人的 jsx
  const getCr = dt => {
    const { id } = dt
    return (
      <Form.Item
        name={`shenfenzheng${id}`}
        label='身份证'
        rules={[{ required: true, message: '姓名不能为空' }]}
      >
        <Input 
          onChange={value => onChange(dt, value, 'shenfenzheng')}
          placeholder='身份证' 
        />
      </Form.Item>
    )
  }

  const getEl = dt => {
    return dt.flag === 1 ? getXs(dt) : getCr(dt)
  }

  return (
    <>
      <Form
        layout='horizontal'
        form={form}
      >
        {
          data.map(dt => {
            const { id } = dt
            return (
              <Grid columns={12} key={id}>
                <Grid.Item>
                  -
                </Grid.Item>
                <Grid.Item span="11">
                  <div styleName="username">
                    <Form.Item
                      name={`username${id}`}
                      label='姓名'
                      rules={[{ required: true, message: '姓名不能为空' }]}
                    >
                      <Input
                        onChange={value => onChange(dt, value, 'username')}
                        placeholder='乘客姓名'
                      />
                    </Form.Item>
                    <span>成</span>
                  </div>
                  {
                    getEl(dt)
                  }
                </Grid.Item>
              </Grid>
            )
          })
        }
      </Form>

      <Space wrap>
        <Button color='primary' fill='solid' onClick={onClick}>
          添加成人
        </Button>

        <Button color='primary' fill='outline' onClick={onClick2}>
          选择乘客
        </Button>
      </Space>

      {/* 选座 */}
      <Xuanzuo />

      {/* 性别弹层 */}
      <MyPopup
        open={open}
        setOpen={setOpen}
      />
    </>
  )
}
