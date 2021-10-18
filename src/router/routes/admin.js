/**
 * 自定义字段说明
 * - noSearch 默认 false 表示可以被搜索，如禁止搜索 则可以设置为 true
 */
// 在该 js 中 路由 都必须是登陆的，且会渲染到 后台框架中。
import { ROOTPATH } from '../constant';
import { BookOutline as BookIcon } from '@vicons/ionicons5';
import { renderIcon } from '@/utils/icon';
import { routesHander } from '../utils';
const noSearch = true;
const noNav = true;
export const routes = [
  {
    path: 'index',
    component: () => import('@/pages/index/index.vue'),
    meta: {
      title: '首页',
      icon: renderIcon(BookIcon)
    },
    noSearch
  },
  {
    path: 'user',
    component: () => import('@/pages/user/index.vue'),
    meta: {
      title: '用户中心',
      icon: renderIcon(BookIcon)
    }
  },
  {
    path: 'system',
    meta: {
      title: '系统管理',
      icon: renderIcon(BookIcon)
    },
    redirect: `${ROOTPATH}/system/menu`,
    children: [
      {
        path: 'menu',
        component: () => import('@/pages/system/menu.vue'),
        meta: {
          title: '菜单权限管理',
          icon: renderIcon(BookIcon)
        }
      }
    ]
  },
  {
    path: 'component',
    meta: {
      title: '组件',
      icon: renderIcon(BookIcon)
    },
    redirect: `${ROOTPATH}/component/listPage`,
    children: [
      {
        path: 'listPage',
        component: () => import('@/pages/component/list.vue'),
        meta: {
          title: '列表页'
        }
      },
      {
        path: 'detalPage',
        component: () => import('@/pages/component/detal.vue'),
        meta: {
          title: '详情页'
        }
      },
      {
        path: 'configPage-complex',
        component: () => import('@/pages/component/config-complex.vue'),
        meta: {
          title: '编辑页-复杂表单'
        }
      },
      {
        path: 'configPage',
        component: () => import('@/pages/component/config.vue'),
        meta: {
          title: '编辑页-简单表单'
        }
      },
      {
        path: 'upfilePage',
        component: () => import('@/pages/component/upfile-dome.vue'),
        meta: {
          title: '上传文件'
        }
      }
    ]
  }
];
console.log(routesHander(routes, ROOTPATH));
export default routesHander(routes, ROOTPATH);
