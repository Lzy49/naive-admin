import { defineComponent, h } from 'vue';
import Image from '@/components/image.jsx';
import { NButton, NEllipsis } from 'naive-ui';
import { renderIcon } from '@/utils/icon';
import { LinkOutlined, CopyOutlined } from '@vicons/antd';
import { NTag, NSpace, NTooltip, NTable } from 'naive-ui';
import copy from '@/utils/copy.js';
export const TableImage = defineComponent({
  props: {
    src: String
  },
  render() {
    return h(
      Image,
      {
        round: true,
        size: 40,
        src: this.$props.src,
        ...this.$attrs
      },
      null
    );
  }
});
export const TableEllipsis = defineComponent({
  props: {
    text: String
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
export const TableLink = defineComponent({
  props: {
    href: String
  },
  render() {
    return h(
      NEllipsis,
      {
        className: 'table-link',
        ...this.$attrs
      },
      {
        tooltip: () =>
          h(
            'div',
            {
              style: {
                width: '300px',
                wordBreak: ' break-all'
              }
            },
            [
              h('span', null, this.href),
              h(
                NSpace,
                {
                  style: {
                    textAlign: 'right',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'flex-end'
                  }
                },
                {
                  default: () => [
                    renderIcon(CopyOutlined, {
                      style: {
                        cursor: 'pointer'
                      },
                      onClick: (event) => {
                        copy(this.href);
                      }
                    })(),
                    renderIcon(LinkOutlined, {
                      style: {
                        cursor: 'pointer'
                      },
                      onClick: (event) => {
                        window.open(this.href);
                      }
                    })()
                  ]
                }
              )
            ]
          ),
        default: () => [h('span', null, this.href)]
      }
    );
  }
});
export const TableState = defineComponent({
  props: {
    options: {
      type: [Object, Array],
      validator(value) {
        for (const key in value) {
          const { text, color } = value[key];
          !text || (!color && console.error(new Error(`必须有 text 和 color`)));
        }
        return true;
      }
    },
    value: [String, Number, Boolean]
  },
  render() {
    const { text, color } = this.options[this.value];
    return h(
      'p',
      {
        className: 'table-state'
      },
      [
        h('i', {
          background: color
        }),
        h(
          'span',
          { style: { color } },
          {
            default: () => text
          }
        )
      ]
    );
  }
});
export const TableTags = defineComponent({
  props: {
    value: [Array, Object],
    options: Object,
    width: [String,Number]
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

export const TableOther = defineComponent({
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
export const TableBts = defineComponent({
  props: {
    options: Array,
    data: Object
  },
  render() {
    return h(NSpace, {
      style:{
        justifyContent: 'center'
      }
    }, {
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
    });
  }
});
