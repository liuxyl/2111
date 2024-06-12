// 全局
export default {
  namespace: 'dateMoreXuanzuo',

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
