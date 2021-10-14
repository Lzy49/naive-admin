import storage from './storage'
import router from '../router'
export default () => {
  storage.local.remove('token');
  router.replace('/login');
};
