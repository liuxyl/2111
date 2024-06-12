import { dataTop } from '@/services'

// 全局
export default {
  namespace: 'baseForm',

  state: {
    data: {},
  },

  reducers: {
    setData (state, { payload }) {
      return {
        ...state,
        data: payload,
      }
    },
  },

  effects: {
    *fetch({ payload }, { call, put, select }) {
      const res = yield call(dataTop)

      if (res.code === 200) {
        yield put({
          type: 'setData',
          payload: res.data.result[0]
        })
      }
    },
  },
};

