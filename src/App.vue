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
const store = useStore();
const osThemeRef = useOsTheme();
store.commit('system/setTheme', osThemeRef.value === 'dark');
</script>
