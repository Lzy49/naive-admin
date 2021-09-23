import { defineComponent, h, handleError } from 'vue';
import { tableTypes } from './default';
import { NAvatar, NPopover } from 'naive-ui';
import {
  TableImage,
  TableEllipsis,
  TableLink,
  TableState,
  TableTags,
  TableOther,
  TableBts
} from './items';
function handler({ type, key, options = {}, width, ...ags }) {
  return {
    width,
    key,
    ...ags,
    render(data) {
      switch (type) {
        case 'img': {
          return h(
            TableImage,
            {
              src: data[key],
              ...options
            },
            null
          );
        }
        case 'ellipsis': {
          return h(
            TableEllipsis,
            {
              text: data[key],
              ...options
            },
            null
          );
        }
        case 'link': {
          return h(
            TableLink,
            {
              href: data[key]
            },
            null
          );
        }
        case 'state': {
          return h(TableState, { options, value: data[key] });
        }
        case 'tag': {
          return h(TableTags, { options, value: data[key], width });
        }
        case 'description': {
          return h(TableOther, { options, value: data[key], data });
        }
        case 'bts': {
          return h(TableBts, { options, data });
        }
        default: {
          return undefined;
        }
      }
    }
  };
}
export default (columns) => {
  const newColumns = columns.map((item) => {
    const { type } = item;
    if (!type || !tableTypes.includes(type)) {
      return item;
    }
    return handler(item);
  });
  return newColumns;
};
