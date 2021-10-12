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
          this.options
            // 添加是否显示选项
            .filter((item) => {
              if (item.show) {
                return item.show(this.data);
              }
              return true;
            })
            .map((item) =>
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
