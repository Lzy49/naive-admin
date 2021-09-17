<template>
  <div class="table-box">
    
    <n-data-table
      :columns="columns"
      :data="props.data"
      style="height: 100%"
      flex-height
      :pagination="{
        ...defaultPagination,
        ...props.page
      }"
      v-bind="props.options"
    >
    </n-data-table>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import { defaultPagination } from './default.js';
import handleColumns from './handleColumns.js';
const props = defineProps({
  data: Array,
  columns: Array,
  pages: Object,
  options: Object
});
const columns = handleColumns(props.columns);
</script>
<script>
export default {
  name: 'Table'
};
</script>
