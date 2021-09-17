import { baseAxios } from '../axios';
export const login = (parse) => {
  return baseAxios.post('api/login', parse, {});
};
