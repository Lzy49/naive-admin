import { h } from 'vue';
import { tableTypes } from './default';
import {
  TableImage,
  TableEllipsis,
  TableLink,
  TableState,
  TableTags,
  TableOther,
  TableBts
} from './items';
// 处理 array 数组值
const getValue = (key, data) =>
  Array.isArray(key)
    ? key.reduce((result, index) => result + (data[index] || ''), '')
    : data[key];

function handler({ type, key, options = {}, width, ...ags }) {
  return {
    width,
    key: Array.isArray(key) ? key.toString() : key,
    ...ags,
    render(data) {
      switch (type) {
        case 'img': {
          return h(TableImage, {
            src: getValue(key, data)
          });
        }
        case 'ellipsis': {
          return h(TableEllipsis, {
            text: getValue(key, data)
          });
        }
        case 'link': {
          return h(TableLink, {
            href: getValue(key, data)
          });
        }
        case 'state': {
          return h(TableState, { ...options, value: getValue(key, data) });
        }
        case 'tag': {
          return h(TableTags, { options, value: getValue(key, data), width });
        }
        case 'description': {
          return h(TableOther, { options, value: getValue(key, data), data });
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
export default (columns) =>
  columns.map((item) => {
    const { type } = item;
    if (!type || !tableTypes.includes(type)) {
      return item;
    }
    return handler(item);
  });
