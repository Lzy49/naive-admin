<template>
  <!-- 配置loading -->
  <n-loading-bar-provider>
    <!-- 配置 message  -->
    <n-message-provider>
      <!-- 配置 theme  -->
      <n-config-provider
        :theme-overrides="$store.state.system.theme"
        :theme="$store.state.system.isDark && darkTheme"
        :locale="zhCN"
        :date-locale="dateZhCN"
      >
        <!-- 配置 dialog-provider -->
        <n-dialog-provider>
          <!-- 一些JavaScript配置 -->
          <ConfigWarp>
            <slot></slot>
          </ConfigWarp>
        </n-dialog-provider>
      </n-config-provider>
    </n-message-provider>
  </n-loading-bar-provider>
</template>
<script setup>
import { darkTheme, zhCN, dateZhCN } from 'naive-ui';
import ConfigWarp from './config.vue';
</script>
