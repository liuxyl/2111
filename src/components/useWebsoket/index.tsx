import { useEffect, useState } from 'react'

export default function useWebsoket (props) {
  const {
    url = '',
  } = props
  
  const [data, setData] = useState()

  useEffect(() => {
    // 页面渲染完成
    const ws = new WebSocket(url)

    ws.addEventListener('open', () => {
      
    })

    ws.addEventListener('message', opt => {
      setData(JSON.parse(opt.data))
    })

    ws.addEventListener('close', () => {

    })

    ws.addEventListener('error', () => {

    })
  }, [])

  return {
    data,
  }
}
