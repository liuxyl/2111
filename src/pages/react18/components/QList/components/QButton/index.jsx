import { Button, Space, Select } from 'antd'

export default function QButton(props) {
  const handleChange = () => {
    
  }

  const onClick = () => {

  }

  return (
    <div>
      <Space>
        <Button onClick={onClick}>使用选择图片</Button>
        <Button>上传图片</Button>
        <Button>删除图片</Button>
        <Select
          defaultValue="lucy"
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={[
            {
              value: 'jack',
              label: 'Jack',
            },
            {
              value: 'lucy',
              label: 'Lucy',
            },
            {
              value: 'Yiminghe',
              label: 'yiminghe',
            },
            {
              value: 'disabled',
              label: 'Disabled',
              disabled: true,
            },
          ]}
        />
      </Space>
    </div>
  )
}