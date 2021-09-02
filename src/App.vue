<template>
  <n-config-provider :theme="theme ? darkTheme : null">
    <router-view></router-view>
  </n-config-provider>
</template>
<script setup>
import { ref, provide } from 'vue';
import { useOsTheme, darkTheme } from 'naive-ui';
const osThemeRef = useOsTheme();
const theme = ref(osThemeRef.value === 'dark');
provide('theme', theme);
provide('setTheme', (value) => {
  theme.value = value;
});
</script>
