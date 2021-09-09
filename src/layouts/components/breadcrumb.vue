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
// store.system.breadcrumb();
// console.log(exportBreadcrumb());
</script>
