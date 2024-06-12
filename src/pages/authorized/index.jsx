import { history, Outlet, useLocation, Navigate } from 'umi'

export default function Authorized (props) {
  const token = localStorage.getItem('token')

  // 所有的路由

  // 第一种情况 只考虑 路由守卫里的
  // 判断 当前时间 和 local 时间, 比较过没过 7天
  const time = new Date().getTime() // 当前系统的时间戳
  const xxx = localStorage.getItem('xxx') // 

  const y = (time - xxx) / (24 * 3600 * 1000)

  if (y > 7) {
    // 清空local
  }
 
  function fun () {
    if (1) {
      return (
        <Outlet />
      )
      
    } else {
      history.push("/user/login")
      return <></>
    }
  }
  
  return fun()
}
