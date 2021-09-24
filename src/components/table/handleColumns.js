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
function handler({ type, key, options = {}, width, ...ags }) {
  return {
    width,
    key,
    ...ags,
    render(data) {
      switch (type) {
        case 'img': {
          return h(TableImage, {
            src: data[key]
          });
        }
        case 'ellipsis': {
          return h(TableEllipsis, {
            text: data[key]
          });
        }
        case 'link': {
          return h(TableLink, {
            href: data[key]
          });
        }
        case 'state': {
          return h(TableState, { ...options, value: data[key] });
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
export default (columns) =>
  columns.map((item) => {
    const { type } = item;
    if (!type || !tableTypes.includes(type)) {
      return item;
    }
    return handler(item);
  });
