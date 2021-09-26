import { defineComponent, h } from 'vue';
import { NTag, NEllipsis, NSpace } from 'naive-ui';
export default defineComponent({
  props: {
    value: [Array, Object],
    options: Object,
    width: [String, Number]
  },
  render() {
    const children = [];
    const tooltip = [];
    for (const k in this.value) {
      const value = this.value[k];
      children.push(
        h(
          'span',
          {
            ...this.options,
            className: 'item'
          },
          { default: () => value }
        )
      );
      tooltip.push(h(NTag, null, { default: () => value }));
    }
    return h(
      'div',
      {
        className: 'table-tags'
      },
      [
        h(NEllipsis, null, {
          default: () => children,
          tooltip: () =>
            h(
              NSpace,
              {
                style: {
                  width: '250px'
                }
              },
              {
                default: () => tooltip
              }
            )
        })
      ]
    );
  }
});
