import { createStore } from 'vuex';
import system from './module/system';
const store = createStore({
  modules: {
    system
  }
});
export default store;
