// 全局
export default {
  namespace: 'dateMore',

  state: {
    data: [],
  },

  reducers: {
    setData (state, { payload }) {
      return {
        ...state,
        data: payload,
      }
    },
  },
}

