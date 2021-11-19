import { defineComponent, h } from 'vue';
import { NEllipsis } from 'naive-ui';
export default defineComponent({
  props: {
    text: {
      type: [String, Number],
      default: ''
    }
  },
  render() {
    return h(
      NEllipsis,
      {
        className: 'table-ellipsis',
        ...this.$attrs
      },
      {
        default: () => this.text
      }
    );
  }
});
