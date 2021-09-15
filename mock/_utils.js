import Mock from 'mockjs';

export function resultSuccess(result) {
  return Mock.mock({
    code: 200,
    result,
    message,
    type: 'success',
  });
}
