import React, { useState, useRef, useEffect } from 'react'
import { Form, Upload, Modal, Image, Button, Spin } from 'antd'
import { connect } from 'dva'
import { PlusOutlined } from '@ant-design/icons'

// 只有上传成功了 才有预览, 如果失败 不应该有预览
// 上传的时候 如果正在上传 必须有 loading
// 格式 大小 必须有验证
// 删除必须有

// 脏数据 
// 二进制流 FileReady
export default connect(({ home, loading }) => {
  return {
    loading: !!loading.effects['home/upload'], // 监听详情
  }
})(Home)
function Home (props) {
  const { 
    label = '',
    render = () => {},
    list = [],
  } = props
  const ref = useRef(0)
  const ref2 = useRef()
  // fileList 图片上传预览的列表
  const [fileList, setFileList] = useState([])

  const [open, setOpen] = useState(false)
  const { dispatch, loading } = props

  useEffect(() => {
    if (fileList.length) {
      render(fileList)
    }
  }, [fileList])

  useEffect(() => {
    if (list.length) {
      setFileList(list)
    }
  }, [list])

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  )
  
  // 上传之前的监听
  // file 二进制 文件流
  const beforeUpload = async file => {
    const { type, size, name } = file

    // if (type !== 'image/png') {
    //   message.error('图片不对')
    //   return false
    // }

    // 1M = 1024K 1Kb = 1024字节
    // if (size > 5 * 1024) {
    //   message.error('大小不对')
    //   return false
    // }

    // 请求接口
    // 图片上传 必须 Form Data
    // FormData 是 HTML5 的方法, 让上传格式是 Form Data
    const formData = new FormData()
    // 第一个名字 是后台给我们的 名字
    // 第二个参数 上传的文件
    formData.append('file', file)

    // dispatch 返回一个 Promise
    const url = await dispatch({
      type: 'home/upload',
      payload: formData,
    })

    // 如果 url 有值预览列表
    if (!url) return false
    
    ref.current += 1

    fileList.push({
      uid: ref.current + 1,
      name,
      status: 'done',
      url,
    })

    setFileList([...fileList])

    // 必须加 阻止默认上传
    return false
  }

  // 删除
  const onRemove = file => {
    setFileList(fileList.filter(dt => dt.uid !== file.uid))
  }

  // 预览
  const onPreview = file => {
    ref2.url = file.url
    setOpen(true)
  }

  const onClick = () => {
    console.log(fileList.map(dt => dt.url), 1111)
  }

  return (
    <div>
      <Form.Item
        label={label}
      >
        <Upload
          fileList={fileList} // 图片预览列表
          listType="picture-card"
          beforeUpload={beforeUpload} // 上传之前的监听
          onRemove={onRemove}
          onPreview={onPreview}
        >
          {loading ? <Spin /> : fileList.length !== 2 && uploadButton}
        </Upload>
      </Form.Item>

      <Modal
        title="预览"
        open={open}
        footer={null}
      >
        <Image src={ref2.url} />
      </Modal>
    </div>
  )
}
