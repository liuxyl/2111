// import * as api from "@/services";

// 全局
export default {
  namespace: "list", //命名空间 名字必须是唯一

  state: {
    // data: [],
    reList: [], // 总条数
    data: [],
  },

  reducers: {
    // state 就是当前 state 对象
    // payload
    setList(state, { payload }) {
      const Data = state.reList;
      Data.push(payload);
      return {
        ...state,
        reList: Data,
        data: [],
      };
    },
    Delete(state, { payload }) {
      state.data = state.reList.findIndex((item) => {
        return item.id === payload.id;
      });
      state.reList.splice(state.data, 1);
      return {
        ...state,
        reList: state.reList,
        data: [],
      };
    },
    xiugai(state, { payload }) {
      state.data = state.reList.findIndex((item) => {
        return item.id === payload.id;
      });
      state.reList[state.data] = payload;
      return {
        ...state,
        reList: state.reList,
        data: [],
      };
    },
  },

  effects: {
    // 上传
    *upload({ payload }, { call, put, select }) {
      const res = yield call(api.fetchUpload, payload);
      // put
      if (!res.code) {
        return res.result;
      }
    },
  },
};
