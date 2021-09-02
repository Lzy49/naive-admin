/**
 * 自定义字段说明
 * - noSearch 默认 false 表示可以被搜索，如禁止搜索 则可以设置为 true
 */
// 在该 js 中 路由 都必须是登陆的，且会渲染到 后台框架中。
import { RouterView } from 'vue-router';
import { ROOTPATH } from '../constant';
import { BookOutline as BookIcon } from '@vicons/ionicons5';
import { renderIcon } from '@/utils/icon';
const noSearch = true;
const noNav = true;
const component = RouterView;

export default [
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
    component,
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
    path: 'news',
    meta: {
      title: '新闻中心',
      icon: renderIcon(BookIcon)
    },
    component,
    redirect: `${ROOTPATH}/news/list`,
    children: [
      {
        path: 'list',
        component: () => import('@/pages/news/list.vue'),
        meta: {
          title: '新闻列表'
        },
        noNav
      },

      {
        path: 'add',
        component: () => import('@/pages/news/config.vue'),
        meta: {
          title: '添加新闻'
        },
        noNav
      },

      {
        path: 'alert',
        component: () => import('@/pages/news/config.vue'),
        meta: {
          title: '编辑新闻'
        },
        noNav
      }
    ]
  }
];
