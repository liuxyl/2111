// 全局
export default {
  namespace: 'error',

  state: {

  },

  reducers: {
    setUserInfo(state, { payload }) {
      return {
        ...state,
        userInfo: payload,
      }
    },
  },

  effects: {
    *fetch({ payload }, { call, put, select }) {
      console.log('我是以全局的');
    },
  },
};

