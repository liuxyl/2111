// 全局
import _ from "lodash";
import { sampleLogin } from "@/services";
export default {
  namespace: "login",

  state: {
    token: "",
  },

  reducers: {
    setToken(state, { payload }) {
      return {
        ...state,
        token: payload,
      };
    },
  },

  effects: {
    *fetchLogin({ payload }, { call, put, select }) {
      const res = yield call(sampleLogin, payload);

      if (!res.code) {
        const token = _.get(res, "result.userInfo.token");
        yield put({
          type: "setToken",
          payload: token,
        });

        localStorage.setItem("token", token);
      }
    },
  },
};
