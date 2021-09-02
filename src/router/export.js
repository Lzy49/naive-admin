// 该文件中存放的是 通过 routes 处理出的 提供给组件的 各种对象
import { ROOTPATH } from './constant';
import adminRoutes from './routes/admin';
// 拼装 所有节点 和 所有关系
const flatRoutes = (routes, parent = null) => {
  return routes.map(({ path, meta, noSearch, noNav, children }) => {
    const { icon, title } = meta;
    const item = {
      value: parent.value + '/' + path, // path
      label: title, // title
      icon: icon, // ico
      noSearch, // 该路由不进行搜索
      noNav, // 该路由不现实在侧边导航
      parent
    };
    nodes.push(item);
    item.key = item.value;
    return { ...item, children: children && flatRoutes(children, item) };
  });
};
// 筛选 noNav !== true 的节点
const getNav = (links) => {
  links = links.filter((item) => !item.noNav);
  return links.length
    ? links.map((item) => ({
        ...item,
        children: item.children && getNav(item.children)
      }))
    : undefined;
};
// 关系 和 每个点
export const nodes = [];
// 所有关系
export const link = flatRoutes(adminRoutes, { value: ROOTPATH });
/* --------------------- heander  --------------------- */
// 可搜索的节点
export const searchNode = nodes.filter((item) => !item.noSearch);
/* --------------------- nav  --------------------- */
// 菜单关系
export const navLink = getNav(link);
export const getCanNavItem = ({ parent }) =>
  parent.noNav ? getCanNavItem(parent) : parent;
// 通过 路由 找 侧导航可展示的 路由
export const pathToCanNavPath = (path) => {
  const item = nodes.find(({ value }) => value === path);
  return item.noNav ? getCanNavItem(item).value : item.value;
};
/* --------------------- breadcrumb --------------------- */
// 通过 item 返回 它 和 它 所有父级
const getParentList = (item) => {
  return [
    item,
    ...(item.parent && item.parent.label ? getParentList(item.parent) : [])
  ].reverse();
};
// 通过 路由 找 面包屑
export const pathToBreadcrumb = (path) => {
  const item = nodes.find(({ value }) => value === path);
  return getParentList(item)
};
