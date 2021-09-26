<template>
  <n-form-item-gi
    id="my-search-item"
    :span="span"
    label-placement="left"
    :path="props.path"
    :label="props.label"
  >
    <slot></slot>
  </n-form-item-gi>
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
