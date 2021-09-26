<template>
  <slot></slot>
</template>
<script setup>
// 在这里取一下用户喜好的
import { useStore } from 'vuex';
import storage from '@/utils/storage.js';
import { useOsTheme } from 'naive-ui';
const store = useStore();
if (storage.local.get('theme') === undefined) {
  const osThemeRef = useOsTheme();
  store.commit('system/setTheme', osThemeRef.value === 'dark');
} else {
  store.commit('system/setTheme', storage.local.get('theme'));
}
// 挂载一下 message 框
import { useMessage } from 'naive-ui';
window.$message = useMessage();
// 挂载一个 进度条
import { useLoadingBar } from 'naive-ui';
window.$loading = useLoadingBar();
</script>
