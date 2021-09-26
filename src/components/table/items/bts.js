import { defineComponent, h } from 'vue';
import { NSpace, NButton } from 'naive-ui';
export default defineComponent({
  props: {
    options: Array,
    data: Object
  },
  render() {
    return h(
      NSpace,
      {
        style: {
          justifyContent: 'center'
        }
      },
      {
        default: () =>
          this.options.map((item) =>
            h(
              NButton,
              {
                onClick: () => {
                  item.hander(this.data);
                },
                type: item.type,
                size: 'small'
              },
              {
                default: () => item.title
              }
            )
          )
      }
    );
  }
});
