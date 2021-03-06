import { createHash } from '@/utils/hash';
import { RouterView } from 'vue-router';
const component = RouterView;
export const routesHander = (routes, PATH) => {
  return routes.map((i) => {
    // 当 路由有子路由则需要给该路由设置 component 为空 component
    const item = { ...i };
    const path = item.path.startsWith('/') ? item.path : PATH + '/' + item.path;
    if ('children' in item) {
      // 如果 item.component 存在的将 item.component 设置为子路由其中之一
      if ('redirect' in item) {
        item.component = component;
      } else if ('component' in item) {
        item.children = [
          ...item.children,
          {
            // ...item,
            component: item.component,
            path,
            meta: item.meta
          }
        ];
        item.component = component;
        item.redirect = path;
        item.path = '==' + path + '==' + createHash(5);
      }
      item.children = [...routesHander(item.children, path)];
    } else {
      item.path = path;
    }
    return item;
  });
};
