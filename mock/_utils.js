import Mock from 'mockjs';
export function resultSuccess(data, message = 'ok') {
  return Mock.mock({
    state: 0,
    data,
    message,
    type: 'success'
  });
}
export function resultFail(state = 1, message = 'fail') {
  return Mock.mock({
    state,
    message,
    type: 'fail'
  });
}
