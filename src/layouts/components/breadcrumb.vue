<template>
  <n-breadcrumb style="margin: var(--appPadding)">
    <n-breadcrumb-item v-for="item of $store.state.system.breadcrumb">
      <n-dropdown
        v-if="item.children"
        placement="bottom-start"
        trigger="click"
        size="small"
        :options="item.children"
        @select="(res) => $router.push(res)"
      >
        {{ item.label }}
      </n-dropdown>
      <template v-else @click="$router.push(item.value)">
        {{ item.label }}
      </template>
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>