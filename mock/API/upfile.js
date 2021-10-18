import { resultSuccess, resultFail } from '../_utils';
export default [
  {
    url: '/api/upload',
    timeout: 1000,
    method: 'post',
    response: () => {
      return resultSuccess('https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg');
    }
  }
];
