<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    show-trigger
  >
    <n-menu
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="navLink"
      :render-label="renderMenuLabel"
      :default-value="store.state.system.navValue"
    />
  </n-layout-sider>
</template>

<script setup>
import { navLink } from '@/router/export.js';
import { ref, h, watch, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { NEllipsis } from 'naive-ui';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
const store = useStore();
const inverted = ref(false);
onMounted(() => {
  setTimeout(() => {
    console.log(store.state.system.navValue);
  }, 1000);
});
const renderMenuLabel = (option) => {
  return h(NEllipsis, null, {
    default: () =>
      !option.children
        ? h(
            RouterLink,
            { to: option.value },
            {
              default: () => option.label
            }
          )
        : option.label
  });
};
</script>
