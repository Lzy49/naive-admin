<template>
  <n-breadcrumb style="padding: var(--appPadding)">
    <n-breadcrumb-item v-for="item of $store.state.system.breadcrumb">
      <!-- 
      <n-dropdown
        v-if="item.children"
        placement="bottom-start"
        trigger="click"
        size="small"
        :options="item.children"
        @select="(res) => $router.push(res)"
      >
        {{ item.label }}
         -->
      <router-link :to="item.value">
        {{ item.label }}
      </router-link>
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>
<script></script>
