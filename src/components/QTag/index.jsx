import { Tag } from 'antd'
import { history } from 'umi'

export default function QTag (props) {
  const {
    data = []
  } = props

  const onClick = path => {
    history.push(path)
  }

  const onClose = id => {
    const x = data.findIndex(dt => dt.id === id)

    // 是不是 第一条, 如果是第一条 要判断数组长度是不是大于 1
    if (!x && data.length > 1) {
      history.push(data[1].path)
    }

    // 如果不是第一条, 往前取一条数据
    if (x) {
      history.push(data[x - 1].path)
    }
  }

  return (
    <>
      {
        data.map(({ id, title, path }) => {
          return (
            <Tag
              onClick={() => onClick(path)}
              onClose={() => onClose(id)}
              closable
              key={id}
            >
              {title}
            </Tag>
          )
        })
      }
    </>
  )
}
