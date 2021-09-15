// import { resultSuccess } from '../_util';
// console.log('吃了吧', resultSuccess);
const menusList = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: 'LAYOUT',
    redirect: '/dashboard/console',
    meta: {
      icon: 'DashboardOutlined',
      title: 'Dashboard'
    },
    children: [
      {
        path: 'console',
        name: 'dashboard_console',
        component: '/dashboard/console/console',
        meta: {
          title: '主控台'
        }
      },
      {
        path: 'monitor',
        name: 'dashboard_monitor',
        component: '/dashboard/monitor/monitor',
        meta: {
          title: '监控页'
        }
      },
      {
        path: 'workplace',
        name: 'dashboard_workplace',
        component: '/dashboard/workplace/workplace',
        meta: {
          hidden: true,
          title: '工作台'
        }
      }
    ]
  }
];

export default [
  {
    url: '/api/getUsers',
    timeout: 1000,
    method: 'get',
    response: () => {
      console.log('我被执行了');
      return menusList;
    }
  }
];
