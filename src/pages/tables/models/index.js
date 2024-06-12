// import { message } from 'antd'
// import request from '@/utils/request'
// import * as api from '@/services'

// // 全局
// export default {
//   namespace: 'tables',

//   state: {
//     data: [], // 表格数据
//     count: 0, // 总条数
//   },

//   reducers: {
//     setData (state, { payload }) {
//       const { count, list } = payload

//       return {
//         ...state,
//         data: list.map(dt => ({ ...dt, ...JSON.parse(dt.info) })),
//         count,
//       }
//     },
//   },

//   effects: {
//     // 表格数据
//     *fetchTable ({ payload }, { call, put, select }) {
//       const res = yield call(api.fetchSampleList, payload)

//       // if (!res.code) {
//       //   yield put({
//       //     type: 'setData',
//       //     payload: res.result,
//       //   })
//       // }
//     },

//     // 编辑
//     *edit ({ payload }, { call, put, select }) {
//       const res = yield call(api.fetchSamplePut, payload)

//       // 修改成功 重新请求 表格数据
//       if (!res.code) {
//         yield put({
//           type: 'fetchTable',
//           payload: {
//             limit: 100,
//             page: 1,
//           },
//         })
//       }
//     },

//     *del ({ payload }, { call, put, select }) {
//       const res = yield call(() => {
//         return request.post('/dev/Home/Apis/Index/_c/sampleDel', payload)
//       })

//       if (!res.code) {
//         message.success('删除成功!')
//         // 获取表格数据
//         yield put({
//           type: 'fetchTable',
//           payload: {
//             limit: 2,
//             page: 1,
//             token: 'WuolDTI9DQgsHzjXS3xTl3GjR2fW70Tk',
//           }
//         })
//       }
//     },
//   },
// }
