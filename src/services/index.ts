import request from "../utils/request"; // 引入 axios
import api from "./api";

export const samplePut = (payload) => request.post(api.samplePut, payload); // 提交修改
// export const fetchSamplePut = (payload) => request.post(api.samplePut, payload); // 提交修改
export const sampleLogin = (payload) => request.post(api.sampleLogin, payload); // 登录
export const fetchSampleList = (payload) =>
  request.get(api.sampleList, payload); // 获取表格数据
export const fetchUpload = (payload) => request.uploadPost(api.upload, payload); // 图片上传
export const dataTop = (payload) => request.get(api.dataTop, payload); 
export const index = (payload) => request.get(api.index, payload); 
export const sampleReg = (payload) => request.post(api.sampleReg, payload); // 注册
export const sampleInfo = (payload) => request.post(api.sampleInfo, payload); // 详情
export const sampleDel = (payload) => request.post(api.sampleDel, payload); // 删除
