import * as clipboard from 'clipboard-polyfill/text';
export default {
  mounted(el, binding) {
    el.addEventListener('click', () => {
      clipboard.writeText(binding);
    });
  }
};
