import axios from 'axios';
import { defaultConfig } from './config';
const createAxios = (
  config = {},
  request = (config) => config,
  response = (res) => res
) => {
  const newConfig = {
    ...defaultConfig
  };
  // 合并所有配置项
  Object.keys(config).forEach((key) => {
    if (key in newConfig && typeof newConfig[key] === 'object') {
      Array.isArray(newConfig[key])
        ? (newConfig[key] = [...newConfig[key], ...config[key]])
        : (newConfig[key] = { ...newConfig[key], ...config[key] });
    } else {
      newConfig[key] = config[key];
    }
  });
  // 创建新的 axios
  const vaxios = axios.create(newConfig);
  // 请求拦截器
  vaxios.interceptors.request.use(function (config) {
    config = request(config);
    return config;
  });
  // 响应拦截器
  vaxios.interceptors.response.use(function (res) {
    res = response(res);
    return res;
  });
  return {
    get(path, data, config = {}) {
      console.log(config);
      return vaxios({
        method: 'get',
        url: path,
        params: data,
        ...config
      });
    },
    post(path, data, config = {}) {
      return vaxios({
        method: 'post',
        url: path,
        data,
        ...config
      });
    }
  };
};
export default createAxios;
