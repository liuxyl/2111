import React, { useState } from 'react'
import { Tree, Tooltip, Dropdown } from 'antd'
import './styles.less'

const items = [
  {
    key: '1',
    label: '编辑',
  },
  {
    key: '2',
    label: '回填',
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
]


export default function QTree() {
  const [top, setTop] = useState(0)

  const onClick = evt => {
    evt.stopPropagation()
    setTop(evt.currentTarget.getBoundingClientRect().top)
  }

  const fun = user => {
    return (
      <div styleName="x1" onClick={onClick}>
        {user}
        <Dropdown
          trigger={['click']}
          overlayStyle={{ top: top }}
          menu={{
            items,
          }}
          placement="bottomRight"
        >
          <span>
            ...
          </span>
        </Dropdown>
      </div>
    )
  }

  const treeData = [
    {
      title: '全部图片',
      key: '1',
    },
    {
      title: '远程下载',
      name: '小花',
      key: '2',
      children: [
        {
          title: fun('小花'),
          key: '2-1',
        },
        {
          title: fun('小花2'),
          key: '2-3',
        },
      ],
    },
  ]


  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info)
  }

  return (
    <Tree
      styleName="tree"
      expandedKeys={['2']} // 展开指定的树节点
      onSelect={onSelect} // 点击树节点触发
      treeData={treeData}
    // titleRender={() => <h1 styleName="xxx">hhhh</h1>}
    />
  )
}
