import { defineComponent, h } from 'vue';
export default defineComponent({
  props: {
    state: {
      type: [Object, Array],
      validator(value) {
        for (const key in value) {
          const { text } = value[key];
          !text && console.error(new Error(`必须有 text `));
        }
        return true;
      }
    },
    style: {
      validator(value) {
        // 这个值必须匹配下列字符串中的一个
        return ['circle', 'none'].includes(value);
      },
      default: 'none'
    },
    value: [String, Number, Boolean]
  },
  render() {
    const { text, color } = this.state[this.value];
    const arr = [];
    if (this.style !== 'none') {
      arr.push(
        h('i', {
          style: {
            background: color
          }
        })
      );
    }
    arr.push(
      h(
        'span',
        { style: { color } },
        {
          default: () => text
        }
      )
    );
    return h(
      'p',
      {
        className: 'table-state'
      },
      arr
    );
  }
});
