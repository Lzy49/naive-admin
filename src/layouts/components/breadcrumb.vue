<template>
  <n-breadcrumb style="margin: var(--appPadding)">
    <n-breadcrumb-item
      v-for="item of store.state.system.breadcrumb"
      @click="$router.push(item.value)"
    >
      {{ item.label }}
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
console.log(store.state.system.breadcrumb[0]);
// store.system.breadcrumb();
// console.log(exportBreadcrumb());
</script>
