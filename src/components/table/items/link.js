import { defineComponent, h } from 'vue';
import { NEllipsis, NSpace } from 'naive-ui';
import copy from '@/utils/copy.js';
import { renderIcon } from '@/utils/icon';
import {} from '@vicons/ionicons5';
import { CopyOutlined, LinkOutlined } from '@vicons/antd';
export default defineComponent({
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
