import { h } from 'vue';
import { NIcon } from 'naive-ui';
export const renderIcon = (icon, options = {}) => {
  return () =>
    h(
      NIcon,
      {
        ...options,
      },
      { default: () => h(icon) }
    );
};
