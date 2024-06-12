import { makeAutoObservable } from 'mobx'
// import { fetchSampleList } from '@/services'
import axios from 'axios'

class HomeStore {
  constructor () {
    // 构造函数
    this.count = 0
    this.data = []
    // 自动把属性 对象 数组 Maps 和 Sets 转化成 observable
    makeAutoObservable(this)
  }

  add = opt => {
    this.count += opt
    console.log(this.count, 1);
  }

  fetchData = async opt => {
    const res = await axios({
      url: '/dev/API/yyjhss.php',
      method: 'GET',
      params: {
        id: 2140038547,
        type: 'wy',
      },
    })
    this.data = res
  }
}

// 导出实例
export default new HomeStore()