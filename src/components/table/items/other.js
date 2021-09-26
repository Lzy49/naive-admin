import { defineComponent, h } from 'vue';
import { NTooltip, NTable } from 'naive-ui';
export default defineComponent({
  props: {
    data: Object,
    value: String,
    options: Array
  },
  render() {
    const children = this.options.map(({ title, key }) =>
      h('tr', null, [h('th', null, title), h('td', null, this.data[key])])
    );
    return h(NTooltip, null, {
      trigger: () => this.value,
      default: () =>
        h(NTable, null, {
          default: () => h('tbody', null, children)
        })
    });
  }
});
