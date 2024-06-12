import React from 'react'
import axios from 'axios'

function wrapPromise (promise) {
  let status = 'pending'
  let result
  let suspender = promise
    .then(res => {
      status = 'success'
      result = res
    })
    .catch(error => {
      status = 'error'
      result = error
    })

  return {
    read: () => {
      if (status === 'pending') {
        throw suspender
        
      } else if (status === 'error') {
        throw result

      } else if (status === 'success') {
        return result
      }
    }
  }
}

function fetchUser () {
  return axios.get('https://blogs.zdldove.top/Home/Apis/listWithPage')
    .then(res => {
      return res.data
    })
}

function fetchNum () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3333)
    }, 5000)
  })
}

export function fetchData () {
  return {
    user: wrapPromise(fetchUser()),
    num: wrapPromise(fetchNum()),
  }
}

// 函数组件没有错误边界
export class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error) {
    // 更新 state 使下一次渲染可以显示降级 UI
    return { hasError: true }
  }

  render () {
    if (this.state.hasError) {
      // 你可以渲染任何自定义的降级 UI
      return <h1>Something went wrong.</h1>
    }

    return this.props.children
  }
}
