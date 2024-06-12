import { sampleInfo, samplePut } from "@/services";
import { history } from "umi";
export default {
  namespace: "forms",

  state: {
    obj: {},
  },

  reducers: {
    setObj(state, { payload }) {
      return {
        ...state,
        obj: { ...payload, ...JSON.parse(payload.info) },
      };
    },
  },

  // 异步
  effects: {
    *fetchSubmit({ payload }, { call, put, select }) {
      const res = yield call(samplePut, payload);
      if (!res.code) {
        history.push("/");
      }
    },

    // 提交
    *fetchInfo({ payload }, { call, put, select }) {
      const res = yield call(sampleInfo, payload);
      if (!res.code) {
        yield put({
          type: "setObj",
          payload: res.result,
        });
      }
    },
  },
};
