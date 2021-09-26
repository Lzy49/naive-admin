import { h } from 'vue';
export const defaultPagination = {
  showSizePicker: true,
  pageSizes: [10, 20, 30, 40],
  prefix: ({ itemCount }) => h('span', null, `共 ${itemCount} 条`)
};
// 表格数据项类型扩展
export const tableTypes = [
  'img', // 会将 value 渲染成 图片
  'ellipsis', // 文字溢出隐藏并移入显示全部
  'link', // 会将 value 渲染成链接
  'tag', // 会将 value 渲染成 标签 （ value 应该是一个 可迭代 )
  'state', // 对 后端传递来的 字符进行对照表处理
  'description', // 展开一个表格，表格中含有一些详细信息。
  'bts' // 会渲染成一组按钮，每个按钮会执行该函数中的 hander 守卫，守卫获取的第一个参数是 raw
];
