import { pathToCanNavPath, pathToBreadcrumb } from '@/router/export';
export default {
  namespaced: true,
  state: {
    navValue: '', // 右侧导航
    isDark: true,
    theme: {
      common: {
        primaryColor: '#18A058FF',
        primaryColorHover: '#36AD6AFF',
        primaryColorPressed: '#0C7A43FF',
        invertedColor: '#18A058FF'
      },
      LoadingBar: {
        colorLoading: 'gray'
      }
    }
  },
  mutations: {
    setNavValue(state, path) {
      state.navValue = pathToCanNavPath(path);
    },
    setBreadcrumb(state, path) {
      state.breadcrumb = pathToBreadcrumb(path);
    },
    setTheme(state, isDark = !state.isDark) {
      state.isDark = isDark;
    }
  }
};
