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
      <span @click="$router.push(item.value)">
        {{ item.label }}
      </span>
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>
<script></script>
