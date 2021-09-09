import { defineComponent, h, handleError } from 'vue';
import { tableTypes } from './default';
import { NAvatar, NPopover } from 'naive-ui';
console.log(NAvatar);
function handler({ type, key, ...options }) {
  console.log('呀哈');
  return defineComponent({
    ...options,
    render(data) {
      switch (type) {
        case 'img': {
          return h(
            NPopover,
            {
              trigger: 'click'
            },
            {
              trigger: () =>
                h(NAvatar, null, {
                  round: true,
                  src: data[key]
                }),
              default: 123
            }
          );
        }
        default: {
          return h('span', null, data[key]);
        }
      }
    }
  });
}
export default (columns) => {
  return columns.map((item) => {
    const { type } = item;
    if (!type || !tableTypes.includes(type)) {
      return item;
    }
    return handler(item);
  });
};
