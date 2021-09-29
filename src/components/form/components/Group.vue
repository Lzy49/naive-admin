<template>
  <n-gi :span="props.span" style="margin-bottom: 22px">
    <n-card :title="title" size="small" v-bind="$attrs">
      <n-grid cols="1 600:2 900:3 1200:4" x-gap="24">
        <slot></slot>
      </n-grid>
    </n-card>
  </n-gi>
</template>
<script setup>
const props = defineProps(['title']);
</script>
<script>
export default {
  __GRID_ITEM__: true
};
</script>
