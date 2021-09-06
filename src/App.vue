<template>
  <n-loading-bar-provider>
    <n-config-provider
      :theme-overrides="$store.state.system.theme"
      :theme="$store.state.system.isDark && darkTheme"
    >
      <router-view></router-view>
    </n-config-provider>
  </n-loading-bar-provider>
</template>
<script setup>
import { darkTheme, useOsTheme } from 'naive-ui';
import { useStore } from 'vuex';
const store = useStore();
const osThemeRef = useOsTheme();
store.commit('system/setTheme', osThemeRef.value === 'dark');
</script>
