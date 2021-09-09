<template>
  <n-gi id="c-search-item" :span="span">
    <n-form-item label-placement="left" :path="props.path" :label="props.label">
      <slot></slot>
    </n-form-item>
  </n-gi>
</template>
<script setup>
const props = defineProps({
  label: String,
  path: String,
  span: String
});
</script>
<script>
export default {
  __GRID_ITEM__: true,
  name: 'GridItem',
  props: ['span']
};
</script>
<style>
#c-search-item {
  padding-right: 15px;
}
</style>
