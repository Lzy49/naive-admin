import store from '@/store';
import { PROJECTNAME } from '@/config';
export default (router) => {
  router.afterEach((to, from, next) => {
    // 修改 侧边导航
    store.commit('system/setNavValue', to.path);
    // 修改面包屑
    store.commit('system/setBreadcrumb', to.path);
    // 修改标题
    document.title = `${PROJECTNAME} - ${to.meta.title}`;
  });
};
