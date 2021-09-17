import createAxios from '../createAxios';

// 处理网络编码错误
const stateHandler = (state, statusText) => {
  switch (state) {
    case 400:
      return `${statusText}`;
    case 401:
      return '用户没有权限（令牌、用户名、密码错误）!';
    case 403:
      return '用户得到授权，但是访问是被禁止的。!';
    case 404:
      return '网络请求错误,未找到该资源!';
    case 405:
      return '网络请求错误,请求方法未允许!';
    case 408:
      return '网络请求超时!';
    case 500:
      return '服务器错误,请联系管理员!';
    case 501:
      return '网络未实现!';
    case 502:
      return '网络错误!';
    case 503:
      return '服务不可用，服务器暂时过载或维护!';
    case 504:
      return '网络超时!';
    case 505:
      return 'http版本不支持该请求!';
    default:
      return statusText;
  }
};
// 处理服务器与后台约定的编码错误
const serverStateHandler = ({ state, data, message, type }) => {
  switch (state) {
    case 0:
      return Promise.resolve(data);
    case -1:
      return Promise.reject({ state, message });
    default:
      return Promise.reject({ state, message });
  }
};
const baseAxios = createAxios(
  {
    baseURL: import.meta.env.VITE_PATH_BASE
  },
  (config) => {
    return config;
  },
  (res) => {
    if (res.status === 200) {
      return serverStateHandler(res.data);
    } else {
      window.$message.error(stateHandler(res.status));
    }
  }
);
export default baseAxios;
