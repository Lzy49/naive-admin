import store from '@/store';
import { PROJECTNAME } from '@/config';
import storage from '@/utils/storage';
import { isGuardRouter, isAdminRouter } from './export';
export default (router) => {
  router.beforeEach((to, from) => {
    window.$loading.start();
    // 登录鉴权
    return storage.local.get('token')
      ? true
      : isGuardRouter(to.path)
      ? '/login'
      : true;
  });
  router.afterEach((to, from, next) => {
    if (isAdminRouter(to.path)) {
      // 修改 侧边导航
      store.commit('system/setNavValue', to.path);
      // 修改面包屑
      store.commit('system/setBreadcrumb', to.path);
      // 修改标题
      document.title = `${PROJECTNAME} - ${to.meta.title}`;
    }
    window.$loading.finish();
  });
};
