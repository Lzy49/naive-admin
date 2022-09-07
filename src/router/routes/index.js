// 整个路由树
import admin from "./admin";
const routes = [
  {
    path: "/",
    meta: {
      title: "首页",
    },
    component: () => import("@/pages/index/index.vue"),
  },
  {
    path: "/login",
    component: () => import("@/pages/login/index.vue"),
    meta: {
      title: "登录",
    },
  },
  {
    path: "/admin",
    component: () => import("@/layouts/adminWrap/index.vue"),
    redirect: "/admin/index",
    children: admin,
  },
  {
    path: "/404",
    meta: {
      title: "404",
    },
    component: () => import("@/pages/exception/404.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];
export default routes;
