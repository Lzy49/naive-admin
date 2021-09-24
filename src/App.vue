<template>
  <n-loading-bar-provider>
    <n-message-provider>
      <n-config-provider
        :theme-overrides="$store.state.system.theme"
        :theme="$store.state.system.isDark && darkTheme"
        :locale="zhCN"
        :date-locale="dateZhCN"
      >
        <warp>
          <router-view></router-view>
        </warp>
      </n-config-provider>
    </n-message-provider>
  </n-loading-bar-provider>
</template>
<script setup>
import Warp from '@/layouts/warp.vue';
import { darkTheme, useOsTheme, zhCN, dateZhCN } from 'naive-ui';
import { useStore } from 'vuex';
import storage from '@/utils/storage.js';
// 在这里取一下用户喜好的
const store = useStore();
if (storage.local.get('theme') === undefined) {
  const osThemeRef = useOsTheme();
  store.commit('system/setTheme', osThemeRef.value === 'dark');
} else {
  store.commit('system/setTheme', storage.local.get('theme'));
}
</script>
