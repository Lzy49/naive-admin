import { users } from '../_data';
import { resultSuccess, resultFail } from '../_utils';
export default [
  {
    url: '/api/login',
    timeout: 1000,
    method: 'post',
    response: (req) => {
      const item = users.find(
        ({ username, password }) =>
          req.body.username === username && req.body.password === password
      );
      if (item) {
        return resultSuccess({
          token: item.token
        });
      } else {
        return resultFail(-1, '用户名或密码错误');
      }
    }
  }
];
