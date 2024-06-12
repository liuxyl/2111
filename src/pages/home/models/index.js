import { fetchSampleList, sampleDel, samplePut } from "@/services";
import { message } from "antd";
export default {
  namespace: "home",

  state: {
    data: [], //数据
    count: 0,
  },

  reducers: {
    setData(state, { payload }) {
      const { count, list } = payload;
      return {
        ...state,
        data: list.map((dt) => ({ ...dt, ...JSON.parse(dt.info) })),
        count,
      };
    },
  },

  // 异步
  effects: {
    *fetchList({ payload }, { call, put, select }) {
      const res = yield call(fetchSampleList, payload);
      if (!res.code) {
        yield put({
          type: "setData",
          payload: res.result,
        });
      }
    },
    *fetchDel({ payload }, { call, put, select }) {
      const res = yield call(sampleDel, payload);
      if (!res.code) {
        message.success("删除成功");
      }
    },
    // 修改
    *submit({ payload }, { call, put, select }) {
      const res = yield call(samplePut, payload);
      // 重新拉列表接口
      if (!res.code) {
        yield put({
          type: "fetchList",
          payload: {
            limit: 3,
            page: 1,
          },
        });
      }
    },
  },
};
