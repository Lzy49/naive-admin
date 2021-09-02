import { pathToCanNavPath , pathToBreadcrumb} from '@/router/export';
export default {
  namespaced: true,
  state: {
    navValue: '' // 右侧导航
  },
  mutations: {
    setNavValue(state, path) {
      state.navValue = pathToCanNavPath(path);
    },
    setBreadcrumb(state, path) {
      state.breadcrumb = pathToBreadcrumb(path)
    }
  }
};
