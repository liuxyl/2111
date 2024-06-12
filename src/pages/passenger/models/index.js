// 全局
export default {
  namespace: 'passenger',

  state: {
    result: [],
  },

  reducers: {
    setResult (state, { payload }) {
      return {
        ...state,
        result: payload,
      }
    },
  },
}

