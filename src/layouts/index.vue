<template>
  <n-layout class="warp">
    <app-header></app-header>
    <n-layout has-sider class="context-warp">
      <app-nav class="nav"></app-nav>
      <n-layout-content>
        <app-breadcrumb></app-breadcrumb>
        <n-layout-content
          position="absolute"
          style="top: 22px; margin-top: var(--appPadding)"
          content-style="padding: var(--appPadding); height:100%"
          :native-scrollbar="false"
        >
          <router-view></router-view>
        </n-layout-content>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
<script setup>
import appBreadcrumb from './components/breadcrumb.vue';
import appHeader from './components/header.vue';
import appNav from './components/nav.vue';
</script>
<style lang="scss">
.context-warp {
  height: calc(100vh - 64px);
  --appPadding: 18px;
}
</style>
